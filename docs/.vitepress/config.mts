import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  title: 'IE105 Project Hub',
  description: 'Tài liệu đề tài Backdoor Attack trong mô hình học máy',
  base: '/project-hub/',
  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Project', link: '/project/' },
      { text: 'Discovery', link: '/discovery/' },
      { text: 'Product', link: '/product/' },
      { text: 'Development', link: '/development/' }
    ],
    sidebar: {
      '/project/': [{ text: 'Project', items: [{ text: 'Tổng quan', link: '/project/' }] }],
      '/discovery/': [{ text: 'Discovery', items: [{ text: 'Tổng quan', link: '/discovery/' }] }],
      '/product/': [{ text: 'Product', items: [{ text: 'Tổng quan', link: '/product/' }] }],
      '/development/': [{ text: 'Development', items: [{ text: 'Tổng quan', link: '/development/' }] }]
    },
    search: {
      provider: 'local'
    }
  }
})
