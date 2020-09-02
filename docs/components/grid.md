---
title: Grid 栅格
sidebarDepth: 2
---
# Grid 栅格 
24 栅格系统

## 基础栅格
<ClientOnly>
<grid-demo/>
</ClientOnly>

## 左右偏移
<ClientOnly>
<grid-offset/>
</ClientOnly>

## 区块间隔
<ClientOnly>
<grid-gutter/>
</ClientOnly>

## Row 属性
|  属性   |   说明   |      类型      |       可选值        | 默认值 |
| :-----: | :------: | :------------: | :-----------------: | :----: |
| gutter  |   间距   | string、number |      任意数字       |   0    |
| align | 对齐方式 |     string     | left、center、right |  left  |

## Col 属性
|   属性   |        说明        |      类型      |         可选值          | 默认值 |
| :------: | :----------------: | :------------: | :---------------------: | :----: |
|   span   |   栅格占位格数   | string、number |          1-24           |  —  |
|  offset  | 栅格左侧的间隔格数 | string、number |          1-24           |  —  |
|   ipad   |   ipad响应式布局   | number、object | 数字或{span,offset}对象 |  —  |
| narrowPc |  窄屏幕响应式布局  | number、object | 数字或{span,offset}对象 |   —  |
|    pc    | 普通电脑响应式布局 | number、object | 数字或{span,offset}对象 |   —  |
|  widePc  |   宽屏响应式布局   | number、object | 数字或{span,offset}对象 |  —  |