import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

type CallToActionArgs = {
  title: string;
  description: string;
  actionLabel: string;
};

const meta = {
  title: 'Components/CallToAction',
  args: {
    title: neutralText.title,
    description: neutralText.description,
    actionLabel: neutralText.primaryAction,
  },
  render: ({ title, description, actionLabel }) => `
    <main class="pf-container sb-frame">
      <section class="pf-call-to-action">
        <div class="pf-call-to-action__content">
          <h2 class="pf-call-to-action__title">${escapeHtml(title)}</h2>
          <p class="pf-call-to-action__description">${escapeHtml(description)}</p>
        </div>
        <a class="pf-action-link" href="#action">${escapeHtml(actionLabel)}</a>
      </section>
    </main>
  `,
} satisfies Meta<CallToActionArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
