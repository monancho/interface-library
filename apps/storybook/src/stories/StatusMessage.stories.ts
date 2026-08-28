import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type StatusMessageArgs = {
  title: string;
  description: string;
  state: 'neutral' | 'attention';
};

const meta = {
  title: 'Components/StatusMessage',
  args: {
    title: neutralText.statusTitle,
    description: neutralText.statusMessage,
    state: 'neutral',
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['neutral', 'attention'] },
  },
  render: ({ title, description, state }) => `
    <main class="pf-container sb-frame">
      <div class="pf-status-message" data-state="${state}">
        <span class="pf-status-message__mark" aria-hidden="true">${state === 'attention' ? '!' : 'i'}</span>
        <div>
          <p class="pf-status-message__title">${escapeHtml(title)}</p>
          <p class="pf-status-message__description">${escapeHtml(description)}</p>
        </div>
      </div>
    </main>
  `,
} satisfies Meta<StatusMessageArgs>;

export default meta;
type Story = StoryObj<StatusMessageArgs>;

export const Neutral: Story = {};

export const Attention: Story = {
  args: { state: 'attention' },
};
