import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const generatedCss = new URL('../packages/tokens/dist/tokens.css', import.meta.url);
const generatedJson = new URL('../packages/tokens/dist/tokens.json', import.meta.url);

test('generated tokens contain usable CSS values', async () => {
  const css = await readFile(generatedCss, 'utf8');

  assert.doesNotMatch(css, /\[object Object\]/);
  assert.match(css, /--color-text-primary:/);
  assert.match(css, /--space-5: 24px;/);
  assert.match(css, /--motion-easing-out: cubic-bezier\(/);
});
test('generated flat JSON contains the public token groups', async () => {
  const tokens = JSON.parse(await readFile(generatedJson, 'utf8'));

  assert.equal(tokens.ColorTextPrimary, '#111110');
  assert.equal(tokens.Space5, '24px');
  assert.ok(Array.isArray(tokens.FontFamilySans));
});
