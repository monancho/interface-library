import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const cssFiles = [
  new URL('../packages/css/src/layouts.css', import.meta.url),
  new URL('../packages/css/src/components.css', import.meta.url),
];

const expectedSelectors = [
  '.pf-container',
  '.pf-stack',
  '.pf-split-layout',
  '.pf-border-grid',
  '.pf-divider',
  '.pf-action-link',
  '.pf-section-header',
  '.pf-call-to-action',
  '.pf-button',
  '.pf-field',
  '.pf-checkbox',
  '.pf-status-message',
  '.pf-content-card',
  '.pf-index-list',
  '.pf-inline-nav',
];

test('CSS package exposes the documented recipe selectors', async () => {
  const css = (await Promise.all(cssFiles.map((file) => readFile(file, 'utf8')))).join('\n');

  for (const selector of expectedSelectors) {
    assert.match(css, new RegExp(selector.replace('.', '\\.')));
  }
});
