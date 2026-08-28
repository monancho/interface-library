import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Interface Library',
      description: '콘텐츠 중심 인터페이스를 위한 중립적인 토큰과 CSS 패턴',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/monancho/interface-library'
        }
      ],
      sidebar: [
        {
          label: 'Overview',
          items: [
            { label: '시작하기', link: '/' },
            { label: '구조', link: '/architecture/' },
            { label: '설계 기준', link: '/principles/' }
          ]
        },
        {
          label: 'Foundations',
          items: [{ label: '토큰', link: '/tokens/' }]
        },
        {
          label: 'Patterns',
          items: [
            { label: '컴포넌트', link: '/components/' },
            { label: '폼과 상태', link: '/forms/' },
            { label: '콘텐츠와 탐색', link: '/collections/' }
          ]
        },
        {
          label: 'Governance',
          items: [{ label: '공개 원칙', link: '/public-policy/' }]
        }
      ]
    })
  ]
});
