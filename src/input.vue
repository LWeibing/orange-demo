
<template>
  <div class="wrapper" :class="{error}">

    <label class="errorWrapper">
      <input :value="value" type="text" :disabled="disable" :readonly="readOnly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
      @focus="$emit('focus',$event.target.value)">
      <template v-if="error">
        <icon name="error" class="icon-error"></icon>
        <span class="errorMessage">{{error}}</span>
      </template>
    </label>
  </div>
</template>

<script>
  import Icon from './button/icon'
  export default {
    components: {Icon},
    name:'OrangeInput' ,
    props: {
      value: {
        type: String
      },
      disable: {
        type: Boolean,
        default: false
      },
      readOnly: {
        type:Boolean,
        default: false
      },
      error: {
        type: String
      },
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    font-size: 14px;
    display: inline-flex;
    .errorWrapper{
      display: flex;
      align-items: center;
      > * {margin-right: .5em}
    }
    > label {
      > input {
        height: 32px;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 0 8px;
        &:hover {
          border-color: #666;
        }
        &:focus {
          box-shadow: inset 0 1px 3px rgba(0,0,0,.5);
          outline: none;
        }
        &[disabled]{
          border-color: #bbb;
          color:#bbb;
          cursor: not-allowed;
        }
        &[readOnly]{
          border-color: #bbb;
          color:#bbb;
          cursor: default;
        }
      }
    }
    &.error{
      > label {
        > input{
          border-color: #F1453d;
        }
      }
    }
    .icon-error {fill:#F1453d}
    .errorMessage{color: #F1453d}
  }
</style>