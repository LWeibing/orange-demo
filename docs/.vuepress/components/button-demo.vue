<template>
  <div>
    <div style="padding-top: 16px;">
      <h3>用法</h3>
      <p><strong>预览</strong></p>
      <div class="wrapper">
        <g-button>默认按钮</g-button>
        <g-button :loading="isLoading" @click="isLoading = !isLoading">点击按钮</g-button>
        <g-button disabled>禁用按钮</g-button>
        <g-button icon="setting">设置按钮</g-button>
        <g-button icon="zan">点赞按钮</g-button>
        <g-button icon="download">下载按钮</g-button>
      </div>
      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{content}}</code></pre>
    </div>



  </div>
</template>
<script>
  import Button from '../../../src/button/button'

  export default {
    components: {
      'g-button': Button,
    },
    data () {
      return {
        isLoading: false,
        content: `
          <g-button>默认按钮</g-button>
          <g-button :loading="isLoading" @click="isLoading = !isLoading">点击按钮</g-button>
          <g-button disabled>禁用按钮</g-button>
          <g-button icon="setting">设置按钮</g-button>
          <g-button icon="zan">点赞按钮</g-button>
          <g-button icon="download">下载按钮</g-button>
      `.replace(/^ {8}/gm, '').trim() ,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding: 20px 20px;
    flex-wrap: wrap;
    margin: 0 .5em;
    >.g-button{
      margin: 4px ;
    }
  }

</style>