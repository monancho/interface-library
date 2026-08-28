import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type FormFieldArgs = {
  label: string;
  placeholder: string;
  hint: string;
  error: string;
  required: boolean;
  invalid: boolean;
  disabled: boolean;
};

const meta = {
  title: 'Components/FormField',
  args: {
    label: neutralText.fieldLabel,
    placeholder: neutralText.fieldPlaceholder,
    hint: neutralText.fieldHint,
    error: neutralText.fieldError,
    required: true,
    invalid: false,
    disabled: false,
  },
  render: ({ label, placeholder, hint, error, required, invalid, disabled }) => {
    const descriptionId = invalid ? 'field-error' : 'field-hint';

    return `
      <main class="pf-container sb-frame">
        <div class="pf-field" style="max-width: 32rem">
          <label class="pf-field__label" for="example-field">
            ${escapeHtml(label)} ${required ? '<span class="pf-field__required" aria-hidden="true">*</span>' : ''}
          </label>
          <input
            class="pf-field__control"
            id="example-field"
            type="text"
            placeholder="${escapeHtml(placeholder)}"
            aria-describedby="${descriptionId}"
            ${required ? 'required' : ''}
            ${invalid ? 'aria-invalid="true"' : ''}
            ${disabled ? 'disabled' : ''}
          />
          ${invalid
            ? `<p class="pf-field__error" id="field-error">${escapeHtml(error)}</p>`
            : `<p class="pf-field__hint" id="field-hint">${escapeHtml(hint)}</p>`}
        </div>
      </main>
    `;
  },
} satisfies Meta<FormFieldArgs>;

export default meta;
type Story = StoryObj<FormFieldArgs>;

export const TextInput: Story = {};

export const Error: Story = {
  args: { invalid: true },
};

export const Disabled: Story = {
  args: { disabled: true, required: false },
};

export const Select: Story = {
  render: ({ label, hint, required, disabled }) => `
    <main class="pf-container sb-frame">
      <div class="pf-field" style="max-width: 32rem">
        <label class="pf-field__label" for="example-select">
          ${escapeHtml(label)} ${required ? '<span class="pf-field__required" aria-hidden="true">*</span>' : ''}
        </label>
        <select
          class="pf-field__control"
          id="example-select"
          aria-describedby="select-hint"
          ${required ? 'required' : ''}
          ${disabled ? 'disabled' : ''}
        >
          <option value="">${escapeHtml(neutralText.fieldPlaceholder)}</option>
          ${neutralText.items.map((item) => `<option>${escapeHtml(item)}</option>`).join('')}
        </select>
        <p class="pf-field__hint" id="select-hint">${escapeHtml(hint)}</p>
      </div>
    </main>
  `,
};

export const Textarea: Story = {
  render: ({ label, placeholder, hint, required, disabled }) => `
    <main class="pf-container sb-frame">
      <div class="pf-field" style="max-width: 32rem">
        <label class="pf-field__label" for="example-textarea">
          ${escapeHtml(label)} ${required ? '<span class="pf-field__required" aria-hidden="true">*</span>' : ''}
        </label>
        <textarea
          class="pf-field__control"
          id="example-textarea"
          placeholder="${escapeHtml(placeholder)}"
          aria-describedby="textarea-hint"
          ${required ? 'required' : ''}
          ${disabled ? 'disabled' : ''}
        ></textarea>
        <p class="pf-field__hint" id="textarea-hint">${escapeHtml(hint)}</p>
      </div>
    </main>
  `,
};
