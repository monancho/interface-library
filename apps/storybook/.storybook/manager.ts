import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  showPanel: false,
  theme: create({
    base: 'light',
    brandTitle: 'Interface Library',
    brandUrl: '/',
    brandTarget: '_self',
    colorPrimary: '#111110',
    colorSecondary: '#315ee7',
    appBg: '#f7f7f5',
    appContentBg: '#ffffff',
    appBorderColor: '#c8c8c2',
    appBorderRadius: 0,
    textColor: '#111110',
    textInverseColor: '#ffffff',
    barTextColor: '#66665f',
    barSelectedColor: '#315ee7',
    barHoverColor: '#111110',
    inputBg: '#ffffff',
    inputBorder: '#c8c8c2',
    inputTextColor: '#111110',
    inputBorderRadius: 0,
    fontBase: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
    fontCode: 'ui-monospace, SFMono-Regular, Consolas, monospace',
  }),
});
