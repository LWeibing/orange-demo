<template>
  <div>
    <div style="padding-top: 16px;">
      <p><strong>默认选中第一项</strong></p>
      <div class="global">
      <g-tabs selected="item1">
        <g-tabs-head>
          <g-tabs-item name="item1"> Tab1</g-tabs-item>
          <g-tabs-item name="item2"> Tab2</g-tabs-item>
          <g-tabs-item name="item3"> Tab3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="item1"> Content of Tab Pane 1</g-tabs-pane>
          <g-tabs-pane name="item2"> Content of Tab Pane 2</g-tabs-pane>
          <g-tabs-pane name="item3"> Content of Tab Pane 3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
      </div>
      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>


<script>
  import Tabs from '../../../src/tabs/tabs'
  import TabsBody from '../../../src/tabs/tabs-body'
  import TabsHead from '../../../src/tabs/tabs-head'
  import TabsItem from '../../../src/tabs/tabs-item'
  import TabsPane from '../../../src/tabs/tabs-pane'

  export default {
    components: {
      'g-tabs': Tabs,
      'g-tabs-head': TabsHead,
      'g-tabs-body': TabsBody,
      'g-tabs-pane': TabsPane,
      'g-tabs-item': TabsItem,
    },
    data() {
      return {
        content: `
          <g-tabs selected="item1">
            <g-tabs-head>
              <g-tabs-item name="item1"> Tab1</g-tabs-item>
              <g-tabs-item name="item2"> Tab2</g-tabs-item>
              <g-tabs-item name="item3"> Tab3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="item1"> Content of Tab Pane 1</g-tabs-pane>
              <g-tabs-pane name="item2"> Content of Tab Pane 2</g-tabs-pane>
              <g-tabs-pane name="item3"> Content of Tab Pane 3</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>
  .global {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 20px 20px;
  }
</style>