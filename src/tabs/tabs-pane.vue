<template>
  <div class="tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'OrangeTabsPane',
    inject: ['eventBus'],
    data(){
      return{
        active: false
      }
    },
    props: {
      name: {
        type: [String,Number],
        require: true
      }
    },
    computed: {
      classes(){
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name;
      })
    },
  }
</script>

<style lang="scss" scoped>
  .tabs-pane{

  }
</style>