<template>
  <div style="padding-top: 16px;">
    <p><strong>可以添加关闭按钮</strong></p>

    <div class="global">
      <g-button @click="$toast('这是一条顶部信息',{ isCloseButton: true })">顶部信息</g-button>
      <g-button @click="$toast('这是一条中部信息',{ position:'middle',isCloseButton: true })">中部信息</g-button>
      <g-button @click="$toast('这是一条底部信息',{ position:'bottom',isCloseButton: true })">底部信息</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>

</template>

<script>
  import Toast from "../../../src/plugin";
  import Button from "../../../src/button/button";
  import Vue from "vue";
  Vue.use(Toast);

  export default {
    components: {
      'g-button' : Button
    },
    data() {
      return {

        content: `
          <g-button @click="$toast('这是一条顶部信息',{ isCloseButton: true })">顶部信息</g-button>
          <g-button @click="$toast('这是一条中部信息',{ position:'middle',isCloseButton: true })">中部信息</g-button>
          <g-button @click="$toast('这是一条底部信息',{ position:'bottom',isCloseButton: true })">底部信息</g-button>

      `.replace(/^ {8}/gm, '').trim(),
      }
    }
  };
</script>
<style lang="scss" scoped>
  .global {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 20px 20px;
  }
</style>