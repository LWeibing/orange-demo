<template>
  <div>
    <div style="padding-top: 16px;">
      <p><strong>基础的输入框用法</strong></p>
      <div class="global">
        <g-input value="默认输入框"/>
        <g-input value="只读输入框" readOnly/>
        <g-input value="禁用输入框" disable/>
        <g-input value="错误信息" error="错误信息"/>
      </div>
      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>


<script>
  import Input from '../../../src/input'

  export default {
    components: {
        'g-input': Input
    },
    data() {
      return {
        content: `
          <g-input value="默认输入框"/>
          <g-input value="只读输入框" readOnly/>
          <g-input value="禁用输入框" disable/>
          <g-input value="错误信息" error="错误信息"/>
      `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>

  .global {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    align-items: center;
    padding: 20px;
    >* {
      margin: 10px;
    }
  }
</style>