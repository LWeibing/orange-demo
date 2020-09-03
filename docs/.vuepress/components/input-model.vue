<template>
  <div>
    <div style="padding-top: 16px;">
      <div class="global">
        <g-input v-model="value"/>
        {{value}}
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
        value: 'orange',
        content: `
          <g-input v-model="value"/>
          {{value}}
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