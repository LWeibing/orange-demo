const expect = chai.expect;

import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsHead from '../../src/tabs/tabs-head'
import TabsBody from '../../src/tabs/tabs-body'
import TabsItem from '../../src/tabs/tabs-item'
import TabsPane from '../../src/tabs/tabs-pane'


Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', (done) => {

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="tab1">
        <g-tabs-head>
          <g-tabs-item name="tab1"> Tab 1 </g-tabs-item>
          <g-tabs-item name="tab2"> Tab 2 </g-tabs-item>
          <g-tabs-item name="tab3"> Tab 3 </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="tab1"> Content of Tab Pane 1 </g-tabs-pane>
          <g-tabs-pane name="tab2"> Content of Tab Pane 1 </g-tabs-pane>
          <g-tabs-pane name="tab3"> Content of Tab Pane 1 </g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="tab1"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接受 direction prop', () => {

  })

})