---
title: Toast 消息提示
sidebarDepth: 2
---
# Toast 消息提示 
常用于主动操作后的反馈提示

## 基本用法
<ClientOnly>
<toast-demo/>
</ClientOnly>

## 可关闭
<ClientOnly>
<toast-close/>
</ClientOnly>

## 自定义
<ClientOnly>
<toast-customize/>
</ClientOnly>

## Options 选项
|     属性      |       说明       |      类型       |       可选值        |              默认值              |
| :-----------: | :--------------: | :-------------: | :-----------------: | :------------------------------: |
|   position    |       位置       |     String      | top、middle、bottom |               top                |
|   autoClose   |  自动关闭及时间  | Boolean、Number |  true、false、number  |                3                 |
| isCloseButton | 是否启用关闭按钮 |     Boolean     |     true、false     |              false               |
|  closeButton  |     关闭按钮     |     Object      |   {text,callback}   | {text:"关闭",callback:undefined} |
|  enableHtml   |   支持html内容   |     Boolean     |     true、false     |              false               |