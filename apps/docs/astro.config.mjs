import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Interface Library',
      description: '중립적인 토큰과 CSS 레시피',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '시작하기', link: '/' },
        { label: '토큰', link: '/tokens/' },
        { label: '컴포넌트', link: '/components/' },
        { label: '폼과 상태', link: '/forms/' },
        { label: '콘텐츠와 탐색', link: '/collections/' },
        { label: '공개 원칙', link: '/public-policy/' }
      ]
    })
  ]
});
