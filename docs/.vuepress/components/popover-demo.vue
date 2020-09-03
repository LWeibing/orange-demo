<template>
  <div>
    <div style="padding-top: 16px;">
      <p><strong>click/hover</strong></p>
      <div class="global">
        <g-popover>
          <div slot="content">这是一段内容。</div>
          <g-button>click向上</g-button>
        </g-popover>
        <g-popover position="bottom">
          <div slot="content">这是一段内容。</div>
          <g-button>click向下</g-button>
        </g-popover>
        <g-popover position="left">
          <div slot="content">这是一段内容。</div>
          <g-button>click向左</g-button>
        </g-popover>
        <g-popover position="right">
          <div slot="content">这是一段内容。</div>
          <g-button>click向右</g-button>
        </g-popover>
        <div>
          <g-popover trigger="hover">
            <div slot="content">这是一段内容。</div>
            <g-button>hover向上</g-button>
          </g-popover>
          <g-popover position="bottom" trigger="hover">
            <div slot="content">这是一段内容。</div>
            <g-button>hover向下</g-button>
          </g-popover>
          <g-popover position="left" trigger="hover">
            <div slot="content">这是一段内容。</div>
            <g-button>hover向左</g-button>
          </g-popover>
          <g-popover position="right" trigger="hover">
            <div slot="content">这是一段内容。</div>
            <g-button>hover向右</g-button>
          </g-popover>
        </div>
      </div>
      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{content}}</code></pre>
    </div>


  </div>
</template>
<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button/button'

  export default {
    components: {
      'g-popover': Popover,
      'g-button': Button
    },
    data() {
      return {
        content: `
          <g-popover>
            <div slot="content">这是一段内容。</div>
            <g-button>click向上</g-button>
          </g-popover>

          <g-popover position="bottom">
            <div slot="content">这是一段内容。</div>
            <g-button>click向下</g-button>
          </g-popover>

          <g-popover position="left">
            <div slot="content">这是一段内容。</div>
            <g-button>click向左</g-button>
          </g-popover>

          <g-popover position="right">
            <div slot="content">这是一段内容。</div>
            <g-button>click向右</g-button>
          </g-popover>

          <div>
            <g-popover trigger="hover">
              <div slot="content">这是一段内容。</div>
              <g-button>hover向上</g-button>
            </g-popover>

            <g-popover position="bottom" trigger="hover">
              <div slot="content">这是一段内容。</div>
              <g-button>hover向下</g-button>
            </g-popover>

            <g-popover position="left" trigger="hover">
              <div slot="content">这是一段内容。</div>
              <g-button>hover向左</g-button>
            </g-popover>

            <g-popover position="right" trigger="hover">
              <div slot="content">这是一段内容。</div>
              <g-button>hover向右</g-button>
            </g-popover>
           </div>
      `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>
  .global {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding: 20px 20px;
    flex-wrap: wrap;

    .g-button {
      margin: 10px 10px;
    }
  }

</style>