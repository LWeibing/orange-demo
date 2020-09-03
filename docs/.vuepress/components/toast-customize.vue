<template>
  <div style="padding-top: 16px;">
    <p><strong>可以自定义文字和时间</strong></p>

    <div class="global">
      <g-button @click="showToast1">自定义文字</g-button>
      <g-button @click="showToast2">自定义时间</g-button>
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
    methods:{
      showToast1(){
        this.$toast('Hello World', {
          isCloseButton: true,
          closeButton: { text: "Close Me" },
          autoClose: false
        });
      },
      showToast2(){
        this.$toast("2秒后自动关闭", {
          isCloseButton: true,
          autoClose: 2,
        });
      }
    },
    data() {
      return {
        content: `
          methods:{
            showToast1(){
              this.$toast('Hello World', {
                isCloseButton: true,
                closeButton: { text: "Close Me" },
                autoClose: false
              });
            },
            showToast2(){
              this.$toast("2秒后自动关闭", {
              isCloseButton: true,
              autoClose: 2,
              });
            }
          }

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