<template>
  <div class="button-group">
    <slot></slot>
  </div>

</template>

<script>
export default {
  name:'OrangeButtonGroup' ,
  mounted() {
    for(let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if(name!== 'button'){
        console.warn(`g-button-group 的子元素应该为 g-button, 但你的是${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $border-radius:4px;
  .button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      };
      &:first-child{
        border-bottom-left-radius: $border-radius;
        border-top-left-radius: $border-radius;
      }
      &:last-child{
        border-bottom-right-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>