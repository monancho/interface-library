import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type ContentCardArgs = {
  count: 2 | 3;
};

const meta = {
  title: 'Components/ContentCard',
  args: { count: 3 },
  argTypes: {
    count: { control: 'inline-radio', options: [2, 3] },
  },
  render: ({ count }) => `
    <main class="pf-container sb-frame">
      <div class="pf-card-grid" style="--pf-card-columns: ${count}">
        ${neutralText.items.slice(0, count).map((item, index) => `
          <article class="pf-content-card">
            <p class="pf-content-card__meta">${String(index + 1).padStart(2, '0')}</p>
            <div class="pf-content-card__body">
              <h2 class="pf-content-card__title">${escapeHtml(item)}</h2>
              <p class="pf-content-card__description">${escapeHtml(neutralText.description)}</p>
              <a class="pf-action-link" href="#item-${index + 1}">${escapeHtml(neutralText.primaryAction)}</a>
            </div>
          </article>
        `).join('')}
      </div>
    </main>
  `,
} satisfies Meta<ContentCardArgs>;

export default meta;
type Story = StoryObj<ContentCardArgs>;

export const Grid: Story = {};

export const TwoColumns: Story = {
  args: { count: 2 },
};
