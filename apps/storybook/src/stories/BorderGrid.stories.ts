import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';

const meta = {
  title: 'Layout/BorderGrid',
  render: () => `
    <main class="pf-container sb-frame">
      <div class="pf-border-grid" aria-label="항목 목록">
        ${neutralText.items.map((item) => `<div>${item}</div>`).join('')}
      </div>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
