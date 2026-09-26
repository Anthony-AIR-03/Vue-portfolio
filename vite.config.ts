import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

const SITE_URL = 'https://anthony-air.nl'

/**
 * Emits sitemap.xml at build time. Project slugs and case studies are read straight from their
 * data files, so adding a project there is enough to get it into the sitemap.
 */
function sitemap(): Plugin {
  const read = (path: string) => readFileSync(fileURLToPath(new URL(path, import.meta.url)), 'utf8')
  const matches = (source: string, pattern: RegExp) => [...source.matchAll(pattern)].map((m) => m.slice(1))

  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const projects = read('./src/assets/data/projectsData.ts')
      const caseStudies = read('./src/components/pages/projects/custom/caseStudies.ts')
      const paths = [
        '/',
        '/about-us',
        '/projects',
        '/services',
        '/contact',
        ...matches(projects, /^ {4}slug: "([^"]+)"/gm).map(([slug]) => `/projects/${slug}`),
        ...matches(caseStudies, /module: "([^"]+)",\s*projectSlug: "([^"]+)"/g).map(
          ([module, slug]) => `/projects/${slug}/case-study/${module}`,
        ),
      ]
      const lastmod = new Date().toISOString().slice(0, 10)
      const urls = paths
        .map((path) => `  <url><loc>${SITE_URL}${path}</loc><lastmod>${lastmod}</lastmod></url>`)
        .join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sitemap(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
