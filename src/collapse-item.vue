<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      <g-icon :name="direction"></g-icon>
      <span>{{title}}</span>
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
        open:false,
      }
    },
    props: {
      title: {
        type: String,
        require: true
      },
      name: {
        type: String,
        require: true
      },
    },
    computed:{
      direction(){
        return this.open ? 'down' : 'right'
      }
    },
    inject: ['eventBus'],
    mounted(){
      this.eventBus && this.eventBus.$on('update:selected',(names)=>{
        this.open = names.indexOf(this.name) >= 0;
      })
    },
    methods: {
      toggle(){
        if(this.open){
          this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
        }else {
          this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
        }
      },

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
      cursor: pointer;
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
      padding: 24px;
    }
  }
</style>