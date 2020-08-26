<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
  export default  {
    name : 'OrangeCol',
    props: {
      span : [Number,String]
    }
  }
</script>
<style lang="scss" scoped>
  .col {
    border: 1px solid red;
    width: 50%;
    background: gray;
    height: 100px;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
  }
</style>