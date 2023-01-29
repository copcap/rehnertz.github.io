import { defineUserConfig } from 'vuepress'
import theme from './theme'

export default defineUserConfig({
  base: '/',
  title: 'Rehnertz',

  locales: {
    '/': {
      lang: 'en-US',
      description: 'A personal blog',
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      description: '一个普通的个人博客',
    },
  },

  theme,
  shouldPrefetch: false,

  extendsPage(page, app) {
    // 非 post 文章不显示在主页（检查 URL 是否包含 '/posts/'）
    if (!/\/posts\//.test(page.path)) {
      page.frontmatter.article ??= false
    }
  }
})