<template>
  <div>
    <div style="padding-top: 16px;">
      <p><strong>每次只能展开一个面板</strong></p>
      <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" name="1">
          橘（英语：Mandarin orange；学名：Citrus reticulata）是芸香科柑橘属的一种水果。橘（jú）和桔（jú）都是现代汉语规范字，然而桔作橘子一义时，为橘的俗写。在广东的一些方言中二字同音，桔也曾做过橘的二简字。闽南语称橘为柑仔。西南官话区的各方言中呼为柑子或柑儿。“柑橘属”包括柑橘、橙、柚等。
        </g-collapse-item>
        <g-collapse-item title="标题2" name="2">
          柑和橘都属于芸香科柑橘属的宽皮柑橘类，果实外皮肥厚，内藏瓤瓣，由汁泡和种子构成。一般说来，柑的果形正圆，黄赤色，皮紧纹细不易剥，多汁甘香；橘的果形扁圆，红或黄色，皮薄而光滑易剥，味微甘酸。柑和橘虽有区别，但在日常语言中常混用，如广柑也说广橘，蜜橘也说蜜柑。
        </g-collapse-item>
        <g-collapse-item title="标题3" name="3">
          柑橘分为原生柑与杂柑，前者是传统秋桔，杂柑一般是冬桔和春桔。
        </g-collapse-item>
      </g-collapse>

      <p>
        <strong>代码</strong>
      </p>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>


<script>
  import  Collapse from '../../../src/collapse'
  import  CollapseItem from '../../../src/collapse-item'
  export default {
    name:'collapse-single',
    components: {
      'g-collapse' : Collapse,
      'g-collapse-item' : CollapseItem,
    },
    data () {
      return {
        selectedTab: ['1'],
        content: `
          <g-collapse :selected.sync="selectedTab" single>
          <g-collapse-item title="标题1" name="1">橘（英语：Mandarin orange；学名：Citrus reticulata）是芸香科柑橘属的一种水果。橘（jú）和桔（jú）都是现代汉语规范字，然而桔作橘子一义时，为橘的俗写。在广东的一些方言中二字同音，桔也曾做过橘的二简字。闽南语称橘为柑仔。西南官话区的各方言中呼为柑子或柑儿。“柑橘属”包括柑橘、橙、柚等。</g-collapse-item>
          <g-collapse-item title="标题2" name="2">柑和橘都属于芸香科柑橘属的宽皮柑橘类，果实外皮肥厚，内藏瓤瓣，由汁泡和种子构成。一般说来，柑的果形正圆，黄赤色，皮紧纹细不易剥，多汁甘香；橘的果形扁圆，红或黄色，皮薄而光滑易剥，味微甘酸。柑和橘虽有区别，但在日常语言中常混用，如广柑也说广橘，蜜橘也说蜜柑。</g-collapse-item>
          <g-collapse-item title="标题3" name="3">柑橘分为原生柑与杂柑，前者是传统秋桔，杂柑一般是冬桔和春桔。</g-collapse-item>
          </g-collapse>
      `.replace(/^ {8}/gm, '').trim() ,
      }
    }
  }
</script>