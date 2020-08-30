<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OrangeTabsHead',
    inject: ['eventBus']

  }
</script>

<style lang="scss" scoped>
  $tabs-height:40px;
  .tabs-head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    min-height: $tabs-height;
    >.actions-wrapper {
      margin-left: auto;
    }
  }
</style>