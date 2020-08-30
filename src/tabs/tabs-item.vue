<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'OrangeTabsItem',
    inject: ['eventBus'],
    data(){
      return{
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String,Number],
        require: true
      }
    },
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name;
      })
    },
    computed: {
      classes(){
        return {
          active: this.active
        }
      }
    },
    methods: {
      xxx(){
        this.eventBus.$emit('update:selected',this.name)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .tabs-item{
    padding: 0 1em;
    flex-shrink: 0;
    cursor: pointer;
    &.active {
      color: rgb(255,117,0);
    }
    &:hover{
      color: rgb(255,164,0);
    }
  }
</style>