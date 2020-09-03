---
title: Collapse 折叠面板
sidebarDepth: 2
---
# Collapse 折叠面板 
可以折叠/展开的内容区域。

## 基础用法
<ClientOnly>
<collapse-simple/>
</ClientOnly>

## 手风琴
<ClientOnly>
<collapse-single/>
</ClientOnly>

## Collapse 属性
|   属性   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-----: | :---------: | :----: |
| selected |  默认选中项  |  Array  | 任意字符串  |   ['1']   |
|  single  | 是否手风琴模式 | Boolean | true、false | false  |

## CollapseItem 属性
| 属性  |       说明       |  类型  |   可选值   | 默认值 |
| :---: | :--------------: | :----: | :--------: | :----: |
| title |       标题内容       | String | 任意字符串 |  —  |
| name  | 唯一标志符 | String | 任意字符串 |  —  |