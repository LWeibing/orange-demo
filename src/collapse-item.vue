<template>
  <div class="collapseItem">
    <div class="title" @click="open =!open">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script >
  export default  {
    name: 'OrangeCollapseItem',
    data(){
      return{
        open:false
      }
    },
    props: {
      title: {
        type: String,
        require: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $color: #ddd;
  $border-radius:4px;
  .collapseItem{
    >.title{
      border: 1px solid $color;
      margin: -1px -1px 0 -1px;
      display: flex;
      align-items: center;
      min-height: 32px;
      padding: 0 8px;
    }
    &:first-child{
      >.title{
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child{
      >.title:last-child{
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    >.content{
      padding: 8px;
    }
  }
</style>