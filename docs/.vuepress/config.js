module.exports = {
  title: '橘子UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav:[
      {text: '主页',link: '/'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/fast-start/',
        ],
      },
      {
        title: '组件',
        children: [ '/components/button' ],
      }
    ]
  }
}