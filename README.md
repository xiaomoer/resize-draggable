# resize-draggable

[English](README-en.md)

> 一个可以通过拖拽分割天来改变大小（展开/关闭）的 React 组件

## 安装

```bash
$ yarn add resize-draggable
```

## 使用

```js
import React from "react";
import ResizeDraggable from "resize-draggable";
import "resize-draggable/dist/main.css"; // 必须导入样式

const App = () => (
  <div>
    <div style={{ width: 100 }}></div>
    <ResizeDraggable direction="e" />
    <div style={{ width: 100 }}></div>
  </div>
);

export default App;
```

## <ResizeDraggable>组件

`<ResizeDraggable>` 放在两个元素之间，在视觉上，显示成一个带展开和关闭按钮的分隔条。通过拖拽该分隔条，可以改变其两侧元素的尺寸（注：由于性能原因，尺寸的更改将在拖拽完毕进行）。与此同时，还可点击分隔条上的按钮在特定方向上快速展开/关闭一侧内容。

点击[demo](http://212.64.77.74:8080)体验和了解更多。

```js
// demo
import React from "react";
import { render } from "react-dom";
import Draggleable from "resize-draggable";
import "resize-draggable/dist/main.css";
import "./index.css";

const App = () => (
  <div>
    <div className="container-v">
      <div className="prev">Prev Element</div>
      <Draggleable direction="w" />
      <div className="next">Next Element</div>
    </div>
    <div className="container-v">
      <div className="prev">Prev Element</div>
      <Draggleable direction="e" />
      <div className="next">Next Element</div>
    </div>
    <div className="container-h">
      <div className="prev-h">Prev Element</div>
      <Draggleable direction="n" />
      <div className="next-h">Next Element</div>
    </div>
    <div className="container-h">
      <div className="prev-h">Prev Element</div>
      <Draggleable direction="s" />
      <div className="next-h">Next Element</div>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
```

## <ResizeDraggable> 属性

```js
{
  // 分割条上展开/关闭按钮的方向
  // 可选值 东(e) 南(s) 西（w）北（n）
  // 默认情况下，属性`axis`为'x'，如果设置`direction`为`s`或`n`，则`axis`为`y`
  direction: 'e' || 'w' || 'n' || 's',

  // 设置展开关闭是否可用，默认为`true`
  closable?: boolean,

  // 设置分割条是否可拖拽，默认为`false`，表示可以拖拽
  dragDisabled?: boolean,

  // 如果分隔条两边至少有一侧尺寸是自适应的（例如：flex：1的元素，百分比的宽高等），那么请设置`adaptive`为true，默认为`false`
  adaptive?: boolean,

  // 设置展开/关闭按钮默认情况下是否是关闭的，默认为false
  defaultClosed?: boolean,

  // 分隔条默认的位置偏移，默认为`{ x: 0, y: 0 }`
  // 关于该属性的更多描述，见：https://www.npmjs.com/package/react-draggable
  defaultPosition?: object,

  // 当拖动分隔条改变尺寸后触发
  onResize?: (e, { data, x, y }) => {...}

  // 当点击 分隔条上的展开/关闭按钮后触发
  onToggleClose?: (e, prevElement, nextElement) => {...}

  // 自定义样式
  style?: object,
}
```
