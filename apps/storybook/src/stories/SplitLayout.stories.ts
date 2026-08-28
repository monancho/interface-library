import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';

type SplitLayoutArgs = {
  align: 'start' | 'center' | 'end';
};

const meta = {
  title: 'Layout/SplitLayout',
  args: {
    align: 'start',
  },
  argTypes: {
    align: {
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
    },
  },
  render: ({ align }) => `
    <main class="pf-container sb-frame">
      <section class="pf-split-layout" style="--pf-split-align: ${['start', 'center', 'end'].includes(align) ? align : 'start'}">
        <h2>${neutralText.title}</h2>
        <p>${neutralText.description}</p>
      </section>
    </main>
  `,
} satisfies Meta<SplitLayoutArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
