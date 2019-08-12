import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import './style.less';

const DirectionMap = {
  n: 's',
  s: 'n',
  w: 'e',
  e: 'w',
};

const classDraggingSibling = 'react-draggable-dragging-sibling';

class ResizeHandle extends React.Component {
  static propTypes = {
    direction: PropTypes.string.isRequired,
    closable: PropTypes.bool,
    onResize: PropTypes.func,
    defaultClosed: PropTypes.bool,
    defaultPosition: PropTypes.object,
    style: PropTypes.object,
    // realTime: PropTypes.bool,
  }

  static defaultProps = {
    closable: true,
    onResize: null,
    defaultPosition: { x: 0, y: 0 },
    defaultClosed: false,
    style: {},
    // realTime: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      closed: props.defaultClosed,
      position: props.defaultPosition,
    };
    this.toogleSize = 0;
  }

  handleStart = (event, data) => {
    const { node } = data;
    this.preSibling = node.previousElementSibling;
    this.nextSibling = node.nextElementSibling;
    // resize的时候两边不可以被选中和响应事件
    if (this.preSibling && this.nextSibling) {
      this.preSibling.classList.add(classDraggingSibling);
      this.nextSibling.classList.add(classDraggingSibling);
    }
  }
  handleStop = (event, data) => {
    const { preSibling, nextSibling } = this;
    if (preSibling && nextSibling) {
      preSibling.classList.remove(classDraggingSibling);
      nextSibling.classList.remove(classDraggingSibling);
    }
    this.handleResize(event, data);
  }
  handleResize = (event, data) => {
    const { node, x, y } = data;
    const { direction, onResize } = this.props;
    const { closed } = this.state;
    const { preSibling, nextSibling } = this;
    if (preSibling && nextSibling) {
      // resize-bar横向分隔
      if (direction === 'n' || direction === 's') {
        const h = preSibling.getBoundingClientRect().height;
        const h2 = nextSibling.getBoundingClientRect().height;
        preSibling.style.height = `${h + y}px`;
        nextSibling.style.height = `${h2 - y}px`;
      } else {
        // resize-bar竖向分隔
        const w = preSibling.getBoundingClientRect().width;
        const w2 = nextSibling.getBoundingClientRect().width;
        preSibling.style.width = `${w + x}px`;
        nextSibling.style.width = `${w2 - x}px`;
      }
    }
    // 由closeed状态到非closed状态
    if (closed && (x > 0 || y > 0)) {
      this.setState({
        closed: false,
      });
    }
    // 执行自定义的resize函数
    if (typeof onResize === 'function') {
      onResize(event, { node, x, y });
    }
  }
  // handleDrag = (event, data) => {
  //   this.handleResize(event, data);
  // }
  handleToogle = (e) => {
    const { direction, onResize } = this.props;
    const { closed } = this.state;
    const { node } = this;
    const { preSibling, nextSibling } = this;
    let x = 0,
      y = 0;
    if (preSibling && nextSibling) {
      const { width: pw, height: ph } = preSibling.getBoundingClientRect();
      const { width: nw, height: nh } = nextSibling.getBoundingClientRect();
      switch (direction) {
        case 'n': // 向上
          if (closed) {
            // 从关闭到展开
            y = -this.toogleSize;
            preSibling.style.height = `${this.toogleSize}px`;
            nextSibling.style.height = `${nh - this.toogleSize}px`;
          } else {
            // 展开到关闭 设置展开/关闭的高度
            this.toogleSize = ph;
            y = this.toogleSize;
            preSibling.style.height = '0px';
            nextSibling.style.height = `${nh + this.toogleSize}px`;
          }
          break;
        case 's': // 向下
          if (closed) {
            // 关闭到向上展开
            y = this.toogleSize;
            nextSibling.style.height = `${this.toogleSize}px`;
            preSibling.style.height = `${ph - this.toogleSize}px`;
          } else {
            this.toogleSize = nh;
            y = -this.toogleSize;
            nextSibling.style.height = '0px';
            preSibling.style.height = `${ph + this.toogleSize}px`;
          }
          break;
        case 'w': // 向左
          if (closed) {
            x = this.toogleSize;
            preSibling.style.width = `${this.toogleSize}px`;
            nextSibling.style.width = `${nw - this.toogleSize}px`;
          } else {
            this.toogleSize = pw;
            x = -this.toogleSize;
            preSibling.style.width = '0px';
            nextSibling.style.width = `${nw + this.toogleSize}px`;
          }
          break;
        case 'e': // 向右
          if (closed) {
            x = -this.toogleSize;
            nextSibling.style.width = `${this.toogleSize}px`;
            preSibling.style.width = `${pw - this.toogleSize}px`;
          } else {
            this.toogleSize = nw;
            x = this.toogleSize;
            nextSibling.style.width = '0px';
            preSibling.style.width = `${pw + this.toogleSize}px`;
          }
          break;
        default:
          break;
      }
      this.setState({
        closed: !closed,
      });

      if (typeof onResize === 'function') {
        onResize(e, { node, x, y });
      }
    }
  }
  render() {
    const { closed, position } = this.state;
    const {
      direction, closable, style, realTime
    } = this.props;
    let toogleDir = direction;
    if (closed) toogleDir = DirectionMap[toogleDir];
    const toogleBarCls = classNames('resize-handle', { 'resize-handle-closed': closed }, `resize-handle-${direction}`);
    // let prop = {};
    // if (realTime) {
    //   props.onDrag = this.handleDrag;
    // }
    return (
      <Draggable
        axis={direction === 'n' || direction === 's' ? 'y' : 'x'}
        onStart={this.handleStart}
        onStop={this.handleStop}
        position={position}
      >
        <div
          className={toogleBarCls}
          style={style}
        >
          {
            closable && <span onClick={this.handleToogle} className={`resize-handle-button-${toogleDir}`} />
          }
        </div>
      </Draggable>
    );
  }
}

export default ResizeHandle;

