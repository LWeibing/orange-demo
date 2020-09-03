module.exports = {
  base: "/orange-demo/",
  title: "Orange UI",
  description: "一个好用的UI框架",
  themeConfig: {
    logo: "assets/logo.svg",
    nav: [
      {text: "主页", link: "/"},
      {text: "文档", link: "/components/button"},
      {text: "github", link: "https://github.com/fzh5785/orange-demo/tree/gh-pages"},
      {text: "gitee", link: "https://gitee.com/feng_zihao/orange-demo/tree/gh-pages/"},
    ],
    sidebar: [
      {
        title: "开始",
        children: ["/introduce/"],
        collapsable: false,
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/components/button",
          "/components/collapse",
          "/components/grid",
          "/components/input",
          "/components/layout",
          "/components/popover",
          "/components/tabs",
          "/components/toast",
        ],

      }
    ]
  }
}