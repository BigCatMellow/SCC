import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const referencePath = path.join(root, 'source-references', 'generated', 'mission_setup_reference.json');
const outputPath = path.join(root, 'runtime', 'payloads', 'mission-setup.js');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

let missionSetupData;

try {
  missionSetupData = JSON.parse(await readFile(referencePath, 'utf8'));
} catch (error) {
  throw new Error(
    `Mission setup reference is required at ${referencePath}. Rebuild or restore the source reference before generating mission payloads.`
  );
}

assert(Array.isArray(missionSetupData.missions), 'mission_setup_reference.json is missing a missions array.');
assert(Array.isArray(missionSetupData.maps), 'mission_setup_reference.json is missing a maps array.');
assert(missionSetupData.missions.length > 0, 'mission_setup_reference.json has no missions.');
assert(missionSetupData.maps.length > 0, 'mission_setup_reference.json has no maps.');

const output = `window.__missionSetupData = {
  missions: ${JSON.stringify(missionSetupData.missions, null, 2)},
  maps: ${JSON.stringify(missionSetupData.maps, null, 2)}
};
`;

await writeFile(outputPath, output, 'utf8');
console.log(`Wrote ${outputPath}`);
