import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type CheckboxArgs = {
  label: string;
  checked: boolean;
  disabled: boolean;
};

const meta = {
  title: 'Components/Checkbox',
  args: {
    label: neutralText.fieldHint,
    checked: false,
    disabled: false,
  },
  render: ({ label, checked, disabled }) => `
    <main class="pf-container sb-frame">
      <label class="pf-checkbox">
        <input
          class="pf-checkbox__control"
          type="checkbox"
          ${checked ? 'checked' : ''}
          ${disabled ? 'disabled' : ''}
        />
        <span class="pf-checkbox__label">${escapeHtml(label)}</span>
      </label>
    </main>
  `,
} satisfies Meta<CheckboxArgs>;

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};
