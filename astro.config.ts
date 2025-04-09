import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://travisbubb.dev',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Travis Bubb',
      openGraph: {
        home: {
          title: 'Travis Bubb | Home',
          description: 'TODO: Update this description.'
        },
        blog: {
          title: 'Travis Bubb | Blog',
          description: 'TODO: News and guides for Spectre.'
        },
        projects: {
          title: 'Travis Bubb | Projects',
          description: 'TODO: Update this description.'
        }
      },
      giscus: {
        repository: 'travisbubb/dev-portfolio',
        repositoryId: 'iR_kgDOOVsw1Q',
        category: 'Blogs',
        categoryId: 'DIC_kwDOOVsw1c4Co4Ju',
        mapping: 'og:title',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: netlify()
});