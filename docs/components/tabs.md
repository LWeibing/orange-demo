---
title: Tabs 标签页
sidebarDepth: 2
---
# Tabs 标签页 
选项卡切换组件

## 基本用法
<ClientOnly>
<tabs-demo/>
</ClientOnly>

## 禁用
<ClientOnly>
<tabs-disable/>
</ClientOnly>

## Tabs 属性
|   属性   |       说明       |  类型  | 可选值 | 默认值 |
| :------: | :--------------: | :----: | :----: | :----: |
| selected | 默认选中某一样（必选） | String |  name  | - |

## TabsItem 属性
|   属性   |         说明         |  类型   |   可选值    | 默认值 |
| :------: | :------------------: | :-----: | :---------: | :----: |
|   name   | 唯一对应标识（必选） | String  | 任意字符串  |  - |
| disabled |         禁用         | Boolean | true、false | false  |

## TabsPane 属性
| 属性  |         说明         |  类型  |   可选值   | 默认值 |
| :---: | :------------------: | :----: | :--------: | :----: |
| name  | 唯一对应标识（必选） | String | 任意字符串 |  - |