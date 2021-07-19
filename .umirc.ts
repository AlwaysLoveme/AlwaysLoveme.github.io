import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Coding Man Blog',
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
  exportStatic: {},
  locales: [['zh-CN', '中文']],
  navs: [
    {
      title: "HTML(5)",
      path: "/html",
    },
    {
      title: "CSS(3)",
      path: "/css",
    },
    {
      title: "JavaScript",
      path: "/javascript"
    },
    {
      title: "TypeScript",
      path: "/typescript"
    },
    {
      title: "Hybrid App",
      path: "/hybrid"
    },
    {
      title: "Flutter",
      path: "/flutter"
    },
    //null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: "三大框架",
      children: [
        {
          title: "Vue.js",
          path: "/vue.js"
        },
        {
          title: "React.js",
          path: "/react.js"
        },
        {
          title: "Angular",
          path: "/angular"
        }
      ]
    },
    {
      title: 'GitHub',
      path: 'https://github.com/AlwaysLoveme',
    },
  ],
  webpack5: {
    lazyCompilation: {}
  },
  styles: ['https://alwaysloveme.github.io/doc/styles/global.css']
  // more config: https://d.umijs.org/config
});
