import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

const meta = {
  title: 'Examples/FormFlow',
  parameters: {
    controls: { disable: true },
  },
  render: () => `
    <main class="pf-container sb-frame sb-composition">
      <header class="pf-section-header">
        <h1 class="pf-section-header__title">${escapeHtml(neutralText.title)}</h1>
        <p class="pf-section-header__description">${escapeHtml(neutralText.description)}</p>
      </header>

      <form class="sb-form-composition">
        <div class="pf-field">
          <label class="pf-field__label" for="flow-name">${escapeHtml(neutralText.fieldLabel)}</label>
          <input
            class="pf-field__control"
            id="flow-name"
            placeholder="${escapeHtml(neutralText.fieldPlaceholder)}"
            aria-describedby="flow-name-hint"
          />
          <p class="pf-field__hint" id="flow-name-hint">${escapeHtml(neutralText.fieldHint)}</p>
        </div>

        <div class="pf-field">
          <label class="pf-field__label" for="flow-select">${escapeHtml(neutralText.items[0])}</label>
          <select class="pf-field__control" id="flow-select">
            ${neutralText.items.map((item) => `<option>${escapeHtml(item)}</option>`).join('')}
          </select>
        </div>

        <div class="pf-field sb-form-composition__wide">
          <label class="pf-field__label" for="flow-description">${escapeHtml(neutralText.items[1])}</label>
          <textarea
            class="pf-field__control"
            id="flow-description"
            placeholder="${escapeHtml(neutralText.fieldPlaceholder)}"
          ></textarea>
        </div>

        <div class="sb-form-composition__wide">
          <label class="pf-checkbox">
            <input class="pf-checkbox__control" type="checkbox" />
            <span class="pf-checkbox__label">${escapeHtml(neutralText.fieldHint)}</span>
          </label>
        </div>

        <div class="sb-form-composition__footer">
          <div class="pf-status-message">
            <span class="pf-status-message__mark" aria-hidden="true">i</span>
            <div>
              <p class="pf-status-message__title">${escapeHtml(neutralText.statusTitle)}</p>
              <p class="pf-status-message__description">${escapeHtml(neutralText.statusMessage)}</p>
            </div>
          </div>
          <button class="pf-button" type="button">${escapeHtml(neutralText.primaryAction)}</button>
        </div>
      </form>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
