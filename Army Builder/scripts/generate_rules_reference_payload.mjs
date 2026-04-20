import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sourcePath = path.join(rootDir, 'source-references', 'rules_reference_content.html');
const outputPath = path.join(rootDir, 'runtime', 'payloads', 'rules-reference.js');

function escapeTemplateLiteral(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

const sourceHtml = await fs.readFile(sourcePath, 'utf8');
const normalizedHtml = sourceHtml.replace(/\r\n/g, '\n').trim();

const output = `(() => {
  const rulesHtml = \`${escapeTemplateLiteral(normalizedHtml)}\`;

  function mountRulesReference(target) {
    if (!target) return;
    target.innerHTML = rulesHtml;
  }

  window.__rulesReference = {
    html: rulesHtml,
    mount: mountRulesReference,
  };
})();
`;

await fs.writeFile(outputPath, output, 'utf8');
console.log(`Wrote ${path.relative(rootDir, outputPath)}`);
