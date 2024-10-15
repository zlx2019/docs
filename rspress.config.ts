import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginShiki } from '@rspress/plugin-shiki'

export default defineConfig({
  base: '.',
  root: path.join(__dirname, 'docs'),
  title: 'Zero9501',
  description: 'zero doc',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/zlx2019' },
    ],
  },
  plugins: [
    pluginShiki({
      // 代码高亮主题
    })
  ]
});
