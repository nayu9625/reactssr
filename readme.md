## ReactSSR

跟vue原理一样  但是vue提供了@vue/server-renderer react需要自己写

使用 react hooks

### 概念
客户端 可见即可操作 页面切换流畅 白屏时间长 不利于seo

服务端 可见不一定可操作 服务器压力大 seo友好

ssr(首屏直出) 结合两者

同构 前后端共用一套代码

首屏直出 服务端直接吐出页面

### 代码实战

客户端
* react redux(recoil 更原子级的控制) hooks

react react-dom react-router-dom babel-loader @babel/core @babel/preset-react -> 解析jsx语法
webpack-dev-server webpack-merge html-webpack-plugin mini-css-extract-plugin css-loader nodemon

服务端
* koa一系列

ssr处理
* 处理路由
* 数据预获取

link 引入 css 可能会页面闪屏
直接 style写入css 不会出现这样的问题

.jsx 配置扩展 

resolve: {
  extensions: ['.js', '.jsx', '.json]
}



