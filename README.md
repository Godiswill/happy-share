# 前端学习分享系统

## 技术栈
- JS框架：[Nextjs](https://nextjs.org/) 
- CSS：Sass + CSS-in-JS + [TailwindCSS](https://www.tailwindcss.cn/docs) (学会这个基本不需要前两者)
- 图表库：[Chart.js](https://www.chartjs.org/docs/latest/samples/bar/border-radius.html) + [react-chartjs-2](https://react-chartjs-2.js.org/examples/line-chart) + [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.app/samples/charts/line.html)
比较轻量，该工程编译后打包不到 500KB，bizCharts 或 ant design chart 均超 1M+。

已完成
1. 配置 TypeScript、eslint、prettier、husky、编译分析插件
1. 每周分享列表主页、分享文章列表、统计页


// todo: 
1. 考虑到需要定时任务后续会加上 [koa](https://koajs.com/)
1. mysql 数据库存储
1. docker 部署

## 使用

开发
```
npm run dev

http://localhost:3000

or
http://localhost:3000/post/xx
http://localhost:3000/stats
http://localhost:3000/demo
```

build
```
npm run build
```

eslint
```
npm run lint
```

开发包分析
```
npm run analyze-dev
```

build 包分析
```
npm run analyze
```


### 为什么是 Next.js
非常棒的[课程](https://nextjs.org/learn/basics/create-nextjs-app)

优点：
1. 服务端渲染神器，可做静态资源服务器
1. 目录即路由，无需配置
1. 各种资源加载优化，极致性能
1. 等等...

#### 内置导航
```
// SPA，直接 a 链接容易导致页面刷新
import Link from 'next/link';
```

#### 图片优化
```
// 1. 懒加载：viewport 非可视区
// 2. 格式优化： webp
// 3. 尺寸：自动裁剪
import Image from 'next/image';
```

#### head 标签
```
// 便捷改 title、meta
import Head from 'next/head';
```

#### script 加载优化
```
// script 加载优化
import Script from 'next/script';
```

#### CSS
1. 默认支持 `css modules`
1. 默认支持 `css-in-js`，组件级小量样式无需在新增样式文件
1. 添加 `npm i sass -D` 依赖开箱即用，尾缀 `.module.scss`
1. 配置 [Tailwind.css](https://tailwindcss.com/docs/guides/nextjs)

个人倾向：
1. `Tailwind` 原子化样式组装基本满足大部分样式需求，需要学习成本
1. 特殊自定义用 `css-in-js`，类似写 vue

#### hybird
1. SSG: Static-site generation `getStaticProps` 只运行在服务端 build 时，不会打包进 bundle
2. SSR: Server-side rendering `getServerSideProps` 每次 http 请求都计算数据组装 HTML
3. CSR: Client-side rendering 客户端 JS 请求处理补充内容

后台管理系统适合：CSR
```typescript jsx
import useSWR from 'swr'
```

一般考虑尽可能 SSG + CSR 配合，SSG 返回骨架内容便于 SEO，CSR 动态更新实时内容

#### 动态路由 Dynamic Routes
