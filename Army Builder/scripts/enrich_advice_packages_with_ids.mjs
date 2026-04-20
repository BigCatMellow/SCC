import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { getLegacyBuilderPayload, resolveUnit, UPGRADES } from '../runtime/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const payloadPath = path.join(rootDir, 'runtime', 'payloads', 'advice-packages.js');

function normalizeLookupKey(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function findByNormalizedName(collection, name) {
  const target = normalizeLookupKey(name);
  return (collection || []).find((item) => normalizeLookupKey(item?.name) === target) || null;
}

function findById(collection, id) {
  return (collection || []).find((item) => item?.id === id) || null;
}

function getFlattenedUnitUpgrades(unit) {
  const groups = unit?.upgrades;
  if (Array.isArray(groups)) {
    return groups.flatMap((group) => Array.isArray(group?.options) ? group.options : []);
  }
  if (groups && typeof groups === 'object') {
    return Object.values(groups).flatMap((group) => {
      if (Array.isArray(group?.options)) return group.options;
      if (Array.isArray(group)) return group;
      return [];
    });
  }
  return [];
}

function getResolvedUnitUpgradeOptions(unitId, fallbackUnit) {
  const resolvedUnit = (unitId ? resolveUnit(unitId) : null) || fallbackUnit;
  return getFlattenedUnitUpgrades(resolvedUnit);
}

function findRuntimeUpgradeByUnitAndName(unitId, name) {
  return (UPGRADES || []).find((upgrade) => upgrade?.unitId === unitId && normalizeLookupKey(upgrade?.name) === normalizeLookupKey(name)) || null;
}

function parseWindowAssignment(source, globalName) {
  const prefix = `window.${globalName} =`;
  const start = source.indexOf(prefix);
  if (start === -1) {
    throw new Error(`Could not find ${globalName} assignment in ${payloadPath}`);
  }

  const objectLiteral = source.slice(start + prefix.length).trim().replace(/;\s*$/, '');
  return Function(`"use strict"; return (${objectLiteral});`)();
}

const factionPayloads = ['zerg', 'protoss', 'terran'].map((key) => {
  const payload = getLegacyBuilderPayload(key);
  return {
    key,
    payload,
    factionCards: payload.factionCards || [],
    units: payload.units || [],
    tacticalCards: payload.tacticalCards || [],
  };
});

function resolveFactionInfo({ factionId, factionName }) {
  for (const entry of factionPayloads) {
    const faction = (factionId ? findById(entry.factionCards, factionId) : null)
      || (factionName ? findByNormalizedName(entry.factionCards, factionName) : null);
    if (faction) {
      return { key: entry.key, faction, payload: entry.payload };
    }
  }
  return null;
}

const raw = await readFile(payloadPath, 'utf8');
const data = parseWindowAssignment(raw, '__armyBuilderAdviceData');

const enriched = {
  ...data,
  factionNotes: (data.factionNotes || []).map((note) => {
    const factionInfo = resolveFactionInfo(note);
    return {
      ...note,
      factionId: factionInfo?.faction?.id || note.factionId || null,
      factionKey: factionInfo?.key || note.factionKey || null,
    };
  }),
  packages: (data.packages || []).map((pkg) => {
    const factionInfo = resolveFactionInfo(pkg);
    const factionCards = factionInfo?.payload?.factionCards || [];
    const tacticalCards = factionInfo?.payload?.tacticalCards || [];
    const units = factionInfo?.payload?.units || [];

    const tacticalCardIds = (pkg.tacticalCardIds && pkg.tacticalCardIds.length ? pkg.tacticalCardIds : (pkg.tacticalCards || []).map((name) => {
      const card = findByNormalizedName(tacticalCards, name);
      return card?.id || null;
    }));

    return {
      ...pkg,
      factionId: factionInfo?.faction?.id || pkg.factionId || null,
      factionKey: factionInfo?.key || pkg.factionKey || null,
      tacticalCardIds: (pkg.tacticalCards || []).map((name, index) => {
        const existingId = tacticalCardIds[index];
        if (existingId) return existingId;
        const card = findByNormalizedName(tacticalCards, name);
        return card?.id || null;
      }),
      units: (pkg.units || []).map((unitConfig) => {
        const unit = (unitConfig.unitId ? findById(units, unitConfig.unitId) : null)
          || findByNormalizedName(units, unitConfig.name);
        const flattenedUpgrades = getResolvedUnitUpgradeOptions(unit?.id || unitConfig.unitId, unit);
        const names = unitConfig.upgrades || [];
        const existingIds = unitConfig.upgradeIds || [];
        const upgradeIds = names.map((upgradeName, index) => {
          const existingId = existingIds[index];
          if (existingId) return existingId;

          const upgrade = findById(flattenedUpgrades, existingId)
            || findByNormalizedName(flattenedUpgrades, upgradeName)
            || findRuntimeUpgradeByUnitAndName(unit?.id || unitConfig.unitId, upgradeName);
          return upgrade?.id || null;
        });

        return {
          ...unitConfig,
          unitId: unit?.id || unitConfig.unitId || null,
          upgradeIds,
        };
      }),
    };
  }),
};

await writeFile(payloadPath, 'window.__armyBuilderAdviceData = ' + JSON.stringify(enriched, null, 2) + ';\n', 'utf8');
console.log(JSON.stringify({ ok: true, payloadPath, packages: enriched.packages.length }, null, 2));
