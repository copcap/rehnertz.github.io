import { hopeTheme } from 'vuepress-theme-hope'
import { enUsNavbar, zhCnNavbar } from './navbar'
import { enUsSidebar, zhCnSidebar } from './sidebar'

export default hopeTheme({
  hostname: 'https://rehnertz.github.io',
  author: {
    name: 'Rehnertz',
    url: 'https://github.com/rehnertz',
  },

  iconAssets: 'iconfont',
  logo: '/logo.jpg',
  blog: {
    medias: {},
    roundAvatar: true,
    description: '星と深淵を目指せ！',
  },
  locales: {
    '/': {
      navbar: enUsNavbar,
      sidebar: enUsSidebar,
    },
    '/zh-CN/': {
      navbar: zhCnNavbar,
      sidebar: zhCnSidebar,
    },
  },

  plugins: {
    blog: true,
    mdEnhance: {
      footnote: true,
      container: true,
      figure: true,
      imgLazyload: true,
      mermaid: true,
      mathjax: {
        output: 'svg',
        svg: { mtextInheritFont: true, }
      },
    },
  },
})