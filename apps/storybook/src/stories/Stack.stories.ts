import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';

type StackArgs = {
  gap: 'small' | 'medium' | 'large';
};

const gapValues: Record<StackArgs['gap'], string> = {
  small: 'var(--space-3)',
  medium: 'var(--space-5)',
  large: 'var(--space-7)',
};

const meta = {
  title: 'Layout/Stack',
  args: {
    gap: 'medium',
  },
  argTypes: {
    gap: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  render: ({ gap }) => `
    <main class="pf-container sb-frame">
      <div class="pf-stack" style="--pf-stack-gap: ${gapValues[gap] ?? gapValues.medium}">
        ${neutralText.items.map((item) => `<div class="sb-demo-surface">${item}</div>`).join('')}
      </div>
    </main>
  `,
} satisfies Meta<StackArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
