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


<style lang="scss">
  @keyframes spin {
    0% {transform: rotate(0deg) ;}
    100%{transform: rotate(360deg)}
  }
  .g-button {
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    background: var(--button-bg);
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
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