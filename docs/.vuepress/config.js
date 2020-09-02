module.exports = {
  base: '/orange-demo/',
  title: 'Orange UI',
  description: '一个好用的UI框架',
  themeConfig: {
    logo: 'assets/logo.svg',
    nav:[
      {text: '主页',link: '/'},
      {text: '文档',link: '/components/button'},
      {text: 'github',link: 'https://github.com/fzh5785/orange-demo'},
      {text: '博客',link: 'https://juejin.im/user/3069492197855037/posts'},
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/fast-start/'],
        collapsable:false,
      },
      {
        title: '组件',
        children: [ '/components/button' ],
      }
    ]
  }
}