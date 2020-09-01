<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'OrangeCollapse',
    props: {
      single: {
        type: Boolean,
        default:false
      },
      selected: {
        type: Array
      }
    },
    data() {
      return {
        eventBus: new Vue(),
      }
    },
    provide() {
        return {
          eventBus: this.eventBus
        }
    },
    mounted(){
      this.eventBus.$emit('update:selected',this.selected)
      this.eventBus.$on('update:addSelected',(name)=>{
        let selectedClone = JSON.parse(JSON.stringify(this.selected))
        if(this.single){
          selectedClone = [name]
        }else {
          selectedClone.push(name)
        }
        this.$emit('update:selected',selectedClone)
        this.eventBus.$emit('update:selected',selectedClone)

      })
      this.eventBus.$on('update:removeSelected',(name)=>{
        let selectedClone = JSON.parse(JSON.stringify(this.selected))
        let index = selectedClone.indexOf(name)
        selectedClone.splice(index,1)
        this.$emit('update:selected',selectedClone)
        this.eventBus.$emit('update:selected',selectedClone)

      })
    },
  }
</script>

<style lang="scss" scoped>
  $color: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $color;
    border-radius: $border-radius;
  }
</style>