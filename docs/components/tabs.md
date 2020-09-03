---
title: Tabs 标签页
sidebarDepth: 2
---
# Tabs 标签页 
常用的操作按钮

## 简单用法
<ClientOnly>
<button-demo/>
</ClientOnly>

## 组合用法
<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

## Tabs 属性
|   属性   |       说明       |  类型  | 可选值 | 默认值 |
| :------: | :--------------: | :----: | :----: | :----: |
| selected | 默认选中（必选） | string |  name  |

## TabsItem 属性
|   属性   |         说明         |  类型   |   可选值    | 默认值 |
| :------: | :------------------: | :-----: | :---------: | :----: |
|   name   | 唯一对应标识（必选） | string  | 任意字符串  |
| disabled |         禁用         | boolean | true、false | false  |

## TabsPane 属性
| 属性  |         说明         |  类型  |   可选值   | 默认值 |
| :---: | :------------------: | :----: | :--------: | :----: |
| name  | 唯一对应标识（必选） | string | 任意字符串 |