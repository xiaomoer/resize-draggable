# resize-draggable

A react component that can be used for sizing by dragging.

```html
<div>
  <div style={{ width: 100 }}></div>
  <ResizeDraggable direction="e" />
  <div style={{ width: 100 }}></div>
</div>
```

## Install

```bash
$ yarn add resize-draggable
```

## Usage

```js
// es6
import ResizeDraggable from "resize-draggable";
import "resize-draggable/dist/main.css";

// CommonJS
const ResizeDraggable = require("resize-draggable");
require("resize-draggable/dist/main.css");
```

## <ResizeDraggable>

`<ResizeDraggable>` component is placed between two elements. it will change these two elsement by dragging. You can also click the bar on it to expand/collapse the elements in the specified direction.

See the [demo](http://212.64.77.74:8080) for more.

```js
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

## <ResizeDraggable> props

```js
{
  // the expand/collapse bar direction, also decided the axis of the draggable
  // east west north south
  // if direction is 'n' or 's', the `axis` is 'y'
  direction: 'e' || 'w' || 'n' || 's',

  // show the expand/collapse bar or not, default is true
  closable?: boolean,

  // allow drag or not, default: false
  dragDisabled?: boolean,

  // Set to true if the opposite direction element is adaptive(eg flex:1 or use % width/height). default: false
  adaptive?: boolean,

  // the expand/collapse bar closed or not init, default is false.
  defaultClosed?: boolean,

  // the draggable element default position, default { x: 0, y: 0 }
  // more about the prop, see: https://www.npmjs.com/package/react-draggable
  defaultPosition?: object,

  // custom function trigger when size changed
  onResize?: (e, { data, x, y }) => {...}

  // custom function called when expand/collapse one element
  onToggleClose?: (e, prevElement, nextElement) => {...}

  // custom style of this component
  style?: object,
}
```
