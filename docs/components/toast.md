---
title: Toast 消息提示
sidebarDepth: 2
---
# Toast 消息提示 
常用的操作按钮

## 基本用法
<ClientOnly>
<button-demo/>
</ClientOnly>

## 组合用法
<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

## Options 选项
|     属性      |       说明       |      类型       |       可选值        |              默认值              |
| :-----------: | :--------------: | :-------------: | :-----------------: | :------------------------------: |
|   position    |       位置       |     string      | top、middle、bottom |               top                |
|   autoClose   |  自动关闭及时间  | boolean、Number |  true、false、数字  |                5                 |
| isCloseButton | 是否启用关闭按钮 |     Boolean     |     true、false     |              false               |
|  closeButton  |     关闭按钮     |     Object      |   {text,callback}   | {text:"关闭",callback:undefined} |
|  enableHtml   |   支持html内容   |     boolean     |     true、false     |              false               |