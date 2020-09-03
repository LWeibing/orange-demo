---
title: Input 输入框
sidebarDepth: 2
---
# Input 输入框 
通过鼠标或键盘输入字符

## 基础用法
<ClientOnly>
<input-demo/>
</ClientOnly>

## 双向绑定
<ClientOnly>
<input-model/>
</ClientOnly>

## Input 属性

|   属性   |   说明   |  类型   |   可选值    | 默认值 |
| :------: | :------: | :-----: | :---------: | :----: |
|  value   |  输入值  | String  | 任意字符串  |    -    |
| disable | 禁用状态 | Boolean | true、false | false  |
| readOnly | 只读状态 | Boolean | true、false | false  |
|  error   | 错误信息 | String  | 任意字符串  |     -   |