import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type ButtonArgs = {
  label: string;
  variant: 'primary' | 'secondary';
  disabled: boolean;
};

const meta = {
  title: 'Components/Button',
  args: {
    label: neutralText.primaryAction,
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
  },
  render: ({ label, variant, disabled }) => `
    <main class="pf-container sb-frame">
      <button
        class="pf-button"
        type="button"
        data-variant="${variant}"
        ${disabled ? 'disabled' : ''}
      >${escapeHtml(label)}</button>
    </main>
  `,
} satisfies Meta<ButtonArgs>;

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
