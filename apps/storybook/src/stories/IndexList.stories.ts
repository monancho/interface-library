import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

const meta = {
  title: 'Components/IndexList',
  render: () => `
    <main class="pf-container sb-frame">
      <ol class="pf-index-list">
        ${neutralText.items.map((item, index) => `
          <li class="pf-index-list__item">
            <span class="pf-index-list__index">${String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2 class="pf-index-list__title">${escapeHtml(item)}</h2>
              <p class="pf-index-list__description">${escapeHtml(neutralText.description)}</p>
            </div>
            <a class="pf-action-link" href="#item-${index + 1}">${escapeHtml(neutralText.primaryAction)}</a>
          </li>
        `).join('')}
      </ol>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
