<template>
  <div>
    <div style="padding-top: 16px;">
      <g-layout>
        <g-header>Header</g-header>
        <g-content>Content</g-content>
        <g-footer>Footer</g-footer>
      </g-layout>
      <g-layout style="margin-top: 40px">
        <g-header>Header</g-header>
          <g-layout>
          <g-sider style="width: 100px">Sider</g-sider>
            <g-layout>
              <g-content>Content</g-content>
              <g-footer>Footer</g-footer>
            </g-layout>
        </g-layout>
      </g-layout>
      <g-layout style="margin-top: 40px">
        <g-layout>
          <g-sider style="width: 200px">Sider</g-sider>
          <g-layout>
            <g-header>Header</g-header>
            <g-content>Content</g-content>
            <g-footer>Footer</g-footer>
          </g-layout>
        </g-layout>
      </g-layout>
      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>


<script>
  import Layout from '../../../src/grid/layout'
  import Header from '../../../src/grid/header'
  import Content from '../../../src/grid/content'
  import Footer from '../../../src/grid/footer'
  import Sider from '../../../src/grid/sider'

  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-sider': Sider,
    },
    data() {
      return {
        content: `
          <g-layout>
            <g-header>Header</g-header>
            <g-content>Content</g-content>
            <g-footer>Footer</g-footer>
          </g-layout>

          <g-layout style="margin-top: 40px">
            <g-header>Header</g-header>
            <g-layout>
              <g-sider style="width: 100px">Sider</g-sider>
              <g-layout>
                <g-content>Content</g-content>
                <g-footer>Footer</g-footer>
              </g-layout>
            </g-layout>
          </g-layout>

          <g-layout style="margin-top: 40px">
            <g-layout>
              <g-sider style="width: 200px">Sider</g-sider>
              <g-layout>
                <g-header>Header</g-header>
                <g-content>Content</g-content>
                <g-footer>Footer</g-footer>
              </g-layout>
            </g-layout>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>
  $bgc:rgb(44, 62, 80);
  $color: white;
  .header, .footer {
    background-color: lighten($bgc,30%);
    color: $color;
    text-align: center;
    line-height: 60px;
  }
  .sider {
    background-color: lighten($bgc,10%);
    color: $color;
    text-align: center;
    line-height: 200px;
    /* width: 100px; */
  }
  .content {
    background-color: $bgc;
    color: $color;
    text-align: center;
    line-height: 160px;
  }


</style>