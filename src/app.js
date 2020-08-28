import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon.vue"
import ButtonGroup from "./button-group"
import Input from './input'
import Col from  './col'
import Row from  './row'
import Content from  './content'
import Sider from  './sider'
import Footer from  './footer'
import Header from  './header'
import Layout from  './layout'
import plugin from "./plugin"

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

new Vue({
  el: "#app",
  data: {
    loading1: true,
    message: 'hi'
  },
  methods: {
    showToast(){
      this.$toast('我是 message')
    }
  },
  created(){
  },
})

