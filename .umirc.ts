import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'codingman',
  favicon: 'https://alwaysloveme.github.io/doc/images/logo.png',
  logo: 'https://alwaysloveme.github.io/doc/images/logo.png',
  outputPath: 'doc',
  base: "/doc/",
  publicPath: process.env.NODE_ENV === 'production' ? '/doc/' : '/',
  mode: "site",
  theme: {
    '@primary-color': '#1DA57A',
  },
  hash: true,
  // history: {
  //   type: "hash",
  // },
  exportStatic: {},
  locales: [['zh-CN', '中文']],
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/AlwaysLoveme',
    },
  ],
  webpack5: {
    lazyCompilation: {}
  }
  // more config: https://d.umijs.org/config
});
