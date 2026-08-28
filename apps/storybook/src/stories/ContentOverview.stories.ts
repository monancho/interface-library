import type { Meta, StoryObj } from '@storybook/html-vite';
import { neutralText } from '@interface-library/fixtures';
import { escapeHtml } from '../lib/escape-html';

const meta = {
  title: 'Examples/ContentOverview',
  parameters: {
    controls: { disable: true },
  },
  render: () => `
    <main class="pf-container sb-frame sb-composition">
      <nav class="pf-inline-nav" aria-label="항목 탐색">
        <ul class="pf-inline-nav__list">
          ${neutralText.items.map((item, index) => `
            <li>
              <a
                class="pf-inline-nav__link"
                href="#overview-item-${index + 1}"
                ${index === 0 ? 'aria-current="page"' : ''}
              >${escapeHtml(item)}</a>
            </li>
          `).join('')}
        </ul>
      </nav>

      <section class="pf-split-layout sb-composition__hero" aria-labelledby="overview-title">
        <header class="pf-section-header">
          <h1 class="pf-section-header__title" id="overview-title">${escapeHtml(neutralText.title)}</h1>
          <p class="pf-section-header__description">${escapeHtml(neutralText.description)}</p>
        </header>
        <div class="pf-status-message sb-composition__aside">
          <span class="pf-status-message__mark" aria-hidden="true">i</span>
          <div>
            <p class="pf-status-message__title">${escapeHtml(neutralText.statusTitle)}</p>
            <p class="pf-status-message__description">${escapeHtml(neutralText.statusMessage)}</p>
          </div>
        </div>
      </section>

      <section aria-label="콘텐츠 목록">
        <div class="pf-card-grid">
          ${neutralText.items.map((item, index) => `
            <article class="pf-content-card" id="overview-item-${index + 1}">
              <p class="pf-content-card__meta">${String(index + 1).padStart(2, '0')}</p>
              <div class="pf-content-card__body">
                <h2 class="pf-content-card__title">${escapeHtml(item)}</h2>
                <p class="pf-content-card__description">${escapeHtml(neutralText.description)}</p>
                <a class="pf-action-link" href="#overview-action-${index + 1}">${escapeHtml(neutralText.primaryAction)}</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="pf-call-to-action">
        <div class="pf-call-to-action__content">
          <h2 class="pf-call-to-action__title">${escapeHtml(neutralText.title)}</h2>
          <p class="pf-call-to-action__description">${escapeHtml(neutralText.description)}</p>
        </div>
        <a class="pf-action-link" href="#overview-next">${escapeHtml(neutralText.primaryAction)}</a>
      </section>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
