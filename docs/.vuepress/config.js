module.exports = {
  base: '/orange-demo/',
  title: 'Orange UI',
  description: '一个好用的UI框架',
  themeConfig: {
    logo: 'assets/logo.svg',
    nav:[
      {text: '主页',link: '/'},
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