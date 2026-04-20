import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceFile = path.join(root, 'source-references', 'generated', 'unit_upgrade_cost_overrides_source.json');
const outputFile = path.join(root, 'runtime', 'payloads', 'unit-upgrade-cost-overrides.js');
const result = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

const content = [
  'window.__unitUpgradeCostOverrides = ' + JSON.stringify(result, null, 2) + ';',
  '',
].join('\n');

fs.writeFileSync(outputFile, content, 'utf8');
console.log(`Wrote ${outputFile}`);
