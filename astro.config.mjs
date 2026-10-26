import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const userSiteRepo = owner && repo === `${owner}.github.io`;

const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = process.env.BASE_PATH || (repo && !userSiteRepo ? `/${repo}` : undefined);

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    format: 'directory'
  }
});
