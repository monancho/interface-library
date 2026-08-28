import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type SectionHeaderArgs = {
  title: string;
  description: string;
};

const meta = {
  title: 'Components/SectionHeader',
  args: {
    title: neutralText.title,
    description: neutralText.description,
  },
  render: ({ title, description }) => `
    <main class="pf-container sb-frame">
      <header class="pf-section-header">
        <h1 class="pf-section-header__title">${escapeHtml(title)}</h1>
        <p class="pf-section-header__description">${escapeHtml(description)}</p>
      </header>
    </main>
  `,
} satisfies Meta<SectionHeaderArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
