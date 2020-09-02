module.exports = {
  base: "/orange-demo/",
  title: "Orange UI",
  description: "一个好用的UI框架",
  themeConfig: {
    logo: "assets/logo.svg",
    nav: [
      {text: "主页", link: "/"},
      {text: "文档", link: "/components/button"},
      {text: "github", link: "https://github.com/fzh5785/orange-demo"},
      {text: "gitee", link: ""},
    ],
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "/fast-start/"],
        collapsable: false,
      },
      {
        title: "组件",
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