import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';

const meta = {
  title: 'Layout/Divider',
  render: () => `
    <main class="pf-container sb-frame pf-stack">
      <p>${neutralText.title}</p>
      <hr class="pf-divider" />
      <p>${neutralText.description}</p>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
