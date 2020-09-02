<template>
  <div>
    <div style="padding-top: 16px;">
      <h3>按钮组</h3>
      <p><strong>预览</strong></p>
      <g-button-group class="wrapper">
        <g-button icon="left">上一页</g-button>
        <g-button>全部</g-button>
        <g-button icon="right" iconPosition="right">下一页</g-button>
      </g-button-group>

      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{groupContent}}</code></pre>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'
  import Group from '../../../src/button/button-group'

  export default {
    components: {
      'g-button': Button,
      'g-button-group' :Group
    },
    data () {
      return {
        groupContent: `
          <g-button-group>
          <g-button icon="left">上一页</g-button>
          <g-button>全部</g-button>
          <g-button icon="right" iconPosition="right">下一页</g-button>
          </g-button-group>
      `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    display: flex;
    height: 80px;
    align-items: center;
    padding-left: 20px;
  }
  .auto {
    >.g-button{
      margin: 0 .1em;
    }
  }
</style>