<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>

  </button>
</template>

<script>
  import Icon from "./icon"
  export default {
    components: {
      'g-icon': Icon
    },
    name:'OrangeButton' ,
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value){
          return !(value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  $font-size:14px;
  $button-height:32px;
  $button-bg:white;
  $button-active-bg:#eee;
  $border-radius:4px;
  $color:#333;
  $border-color:#999;
  $border-color-hover:#666;
  @keyframes spin {
    0% {transform: rotate(0deg) ;}
    100%{transform: rotate(360deg)}
  }
  .g-button {
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    font-size:$font-size;
    height: $button-height;
    padding: 0 1em;
    background: $button-bg;
    border-radius: $border-radius;
    border:1px solid $border-color;
    &:hover {
      border-color: $border-color-hover;
      cursor: pointer;
    }
    &:active {
      background: $button-active-bg;
    }
    &:focus {
      outline: none;
    }
    >.icon {
      order: 1;
      margin-right: .1em;
    }
    >.content{
      order: 2;
    }
    &.icon-right {
      >.icon{
        order: 2;
        margin-left: .1em;
        margin-right: 0;
      }
      >.content{
        order: 1;
      }
    }
    .loading {
      animation: spin 1.5s infinite linear;
    }
  }
</style>