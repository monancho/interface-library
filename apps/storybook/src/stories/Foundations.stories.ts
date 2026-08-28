import type { Meta, StoryObj } from '@storybook/html-vite';

const meta = {
  title: 'Foundations/Overview',
  render: () => `
    <main class="pf-container sb-frame pf-stack" style="--pf-stack-gap: var(--space-8)">
      <header class="pf-section-header">
        <h1 class="pf-section-header__title">기본 제목</h1>
        <p class="pf-section-header__description">짧은 설명입니다.</p>
      </header>
      <section class="pf-border-grid" aria-label="색상 토큰">
        <div class="sb-grid-item"><div class="sb-swatch" style="--swatch-color: var(--color-surface-default)"></div><span>기본 표면</span></div>
        <div class="sb-grid-item"><div class="sb-swatch" style="--swatch-color: var(--color-surface-subtle)"></div><span>보조 표면</span></div>
        <div class="sb-grid-item"><div class="sb-swatch" style="--swatch-color: var(--color-surface-inverse)"></div><span>반전 표면</span></div>
      </section>
    </main>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
