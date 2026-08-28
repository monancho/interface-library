import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

const meta = {
  title: 'Components/InlineNav',
  render: () => `
    <main class="pf-container sb-frame">
      <nav class="pf-inline-nav" aria-label="항목 탐색">
        <ul class="pf-inline-nav__list">
          ${neutralText.items.map((item, index) => `
            <li>
              <a
                class="pf-inline-nav__link"
                href="#item-${index + 1}"
                ${index === 0 ? 'aria-current="page"' : ''}
              >${escapeHtml(item)}</a>
            </li>
          `).join('')}
        </ul>
      </nav>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
