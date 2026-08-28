# Interface Library

Interface Library is a small, framework-neutral foundation for content-led interfaces.
It packages design tokens, CSS foundations, and reusable markup recipes with
Storybook examples and public documentation.

Package publication remains disabled until the release contents are approved.

## Workspace

- `packages/tokens`: DTCG design tokens and generated CSS custom properties
- `packages/css`: foundations, layouts, and component recipes
- `packages/fixtures`: neutral example copy shared by public examples
- `apps/storybook`: component catalog and design review surface
- `apps/docs`: Starlight documentation site

## Commands

```sh
corepack pnpm install
corepack pnpm build:tokens
corepack pnpm storybook
corepack pnpm docs
```

## Public-content policy

Examples use short neutral state text only. Do not add organization names,
product names, logos, real contact details, customer data, screenshots, or
source-specific motion studies.
