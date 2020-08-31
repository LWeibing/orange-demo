import Vue from "vue"
import Button from "./button/button.vue"
import Icon from "./button/icon.vue"
import ButtonGroup from "./button/button-group"
import Input from './input'
import Col from './grid/col'
import Row from './grid/row'
import Content from './grid/content'
import Sider from './grid/sider'
import Footer from './grid/footer'
import Header from './grid/header'
import Layout from './grid/layout'
import plugin from "./plugin"
import Tabs from "./tabs/tabs"
import TabsHead from "./tabs/tabs-head"
import TabsBody from "./tabs/tabs-body"
import TabsPane from "./tabs/tabs-pane"
import TabsItem from "./tabs/tabs-item"
import Popover from  './popover'


Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", Input)
Vue.component("g-row", Row)
Vue.component("g-col", Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.use(plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)


new Vue({
  el: "#app",
  data: {
    selectedTab: 'tab1'
  },
  methods: {
    showToast(){
      this.$toast('这是一条消息提示',{
        position: 'middle',
        enableHtml:false,
        closeButton: {
          text: '关闭'
        },
        autoClose:3,
      })
    },
    yyy(data){
      console.log('data')
    }
  },
  created(){

  },
})

