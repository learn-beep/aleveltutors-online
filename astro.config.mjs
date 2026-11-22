import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.aleveltutors.online',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you/') })],
});
