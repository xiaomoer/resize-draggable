declare module 'resize-draggable' {
  import { CSSProperties } from 'react'
  type DragableEvent = React.MouseEvent<HTMLElement | SVGElement> | MouseEvent
  interface DraggableData {
    node: HTMLElement
    x: number
    y: number
    deltaX?: number
    deltaY?: number
    lastX?: number
    lastY?: number
  }
  interface IProps {
    direction: 'e' | 'w' | 'n' | 's'
    closable?: boolean
    dragDisabled?: boolean
    adaptive?: boolean
    defaultClosed?: boolean
    defaultPosition?: boolean
    onResize?: (e: DragableEvent, data: DraggableData) => void | false
    onToggleClose?: (e: React.MouseEvent<HTMLSpanElement>, prevElement: HTMLElement, nextElement: HTMLElement) => void
    style?: CSSProperties
  }
  export default class ResizeHandle extends React.Component<IProps, {}> {
     static defaultProps: IProps
   }
}
