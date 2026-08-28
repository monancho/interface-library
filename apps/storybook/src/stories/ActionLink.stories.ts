import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type ActionLinkArgs = {
  label: string;
};

const meta = {
  title: 'Components/ActionLink',
  args: {
    label: neutralText.primaryAction,
  },
  render: ({ label }) => `
    <main class="pf-container sb-frame">
      <a class="pf-action-link" href="#action">${escapeHtml(label)}</a>
    </main>
  `,
} satisfies Meta<ActionLinkArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
