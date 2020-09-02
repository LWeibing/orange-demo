<template>
  <div>
    <g-button>默认样式</g-button>
    <g-button icon="setting">默认样式</g-button>
    <g-button :loading="true">默认样式</g-button>
    <g-button disabled>默认样式</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button/button'
  export default {
    components: {
      'g-button' : Button
    }
  }
</script>