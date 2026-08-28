import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
  title: 'Layout/Container',
  render: () => `
    <main class="sb-frame">
      <div class="pf-container sb-demo-surface">기본 제목</div>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
