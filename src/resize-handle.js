import React from 'react';
import { findDOMNode } from 'react-dom';
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
    onToggleClose: PropTypes.func,
    defaultClosed: PropTypes.bool,
    defaultPosition: PropTypes.object,
    style: PropTypes.object,
    dragDisabled: PropTypes.bool,
    adaptive: PropTypes.bool,
  }

  static defaultProps = {
    closable: true,
    onResize: null,
    onToggleClose: null,
    defaultPosition: { x: 0, y: 0 },
    defaultClosed: false,
    style: {},
    dragDisabled: false,
    adaptive: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      closed: props.defaultClosed,
      position: props.defaultPosition,
    };
    this.toogleSize = 0;
    this.dragged = false;
    this.reiseHandle = React.createRef();
    this.cleared = false;
  }
  componentDidMount() {
    const node = this.props.dragDisabled ? this.reiseHandle.current : findDOMNode(this.reiseHandle.current);
    this.preSibling = node.previousElementSibling;
    this.nextSibling = node.nextElementSibling;
    this.prevOverflow = getComputedStyle(this.preSibling).getPropertyValue('overflow');
    window.addEventListener('resize', this.handleWindowResize);
  }
  handleWindowResize = () => {
    if (this.dragged && !this.cleared) {
      const { preSibling, nextSibling } = this;
      const { direction } = this.props;
      const prop = direction === 'n' || direction === 's' ? ['height', 'clientHeight'] : ['width', 'clientWidth'];
      // psl: prevSibling style length
      // nsl: nextSibling style length
      // pcl: prevSibling computed length
      // ncl: nextSibling computed length
      const psl = Number(preSibling.style[prop[0]].replace('px', ''));
      const nsl = Number(nextSibling.style[prop[0]].replace('px', ''));
      const pcl = preSibling[prop[1]];
      const ncl = nextSibling[prop[1]];
      this.cleared = true;
      if (psl !== pcl) {
        console.log('run this prev');
        preSibling.style[prop[0]] = null;
      }
      if (nsl !== ncl) {
        console.log('run this next');
        nextSibling.style[prop[0]] = null;
      }
    }
  }
  handleStart = () => {
    this.dragged = true;
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
    if (x === 0 && y === 0) return; // 此时如果该方法触发，但是没有位移，则为点击了展开和关闭按钮
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
    // 用于判断是否由展开到关闭
    const conditionMap = {
      e: x < 0,
      w: x > 0,
      n: y > 0,
      s: y < 0,
    };
    // 由closeed状态到非closed状态
    if (closed && conditionMap[direction]) {
      this.setState({
        closed: false,
      });
    }
    // 执行自定义的resize函数
    if (typeof onResize === 'function') {
      onResize(event, { node, x, y });
    }
  }
  toggleWithDirection = () => {
    const { direction, adaptive } = this.props;
    const { closed } = this.state;
    const { preSibling, nextSibling } = this;
    const prop = direction === 'n' || direction === 's' ? 'height' : 'width';
    const { width: pw, height: ph } = preSibling.getBoundingClientRect();
    const { width: nw, height: nh } = nextSibling.getBoundingClientRect();
    // 方位和使用到的size映射
    const obj = {
      n: [nh, ph],
      s: [ph, nh],
      w: [nw, pw],
      e: [pw, nw],
    };
    const prev = ['n', 'w'].includes(direction) ? preSibling : nextSibling;
    const next = ['n', 'w'].includes(direction) ? nextSibling : preSibling;
    if (closed) {
      // 关闭到展开
      prev.style[prop] = `${this.toogleSize}px`;
      prev.style.overflow = this.prevOverflow; // 使用其默认的overflow
      if (!adaptive) {
        next.style[prop] = `${obj[direction][0] - this.toogleSize}px`;
      }
    } else {
      this.toogleSize = obj[direction][1];
      prev.style[prop] = '0px';
      prev.style.overflow = 'hidden';
      if (!adaptive) {
        next.style[prop] = `${obj[direction][0] + this.toogleSize}px`;
      }
    }
  }
  handleToogle = (e) => {
    const { onToggleClose } = this.props;
    const { closed } = this.state;
    const { preSibling, nextSibling } = this;
    if (preSibling && nextSibling) {
      this.toggleWithDirection();
      this.setState({
        closed: !closed,
      });

      if (typeof onToggleClose === 'function') {
        onToggleClose(e, preSibling, nextSibling);
      }
    }
  }
  render() {
    const { closed, position } = this.state;
    const {
      direction, closable, style, dragDisabled,
    } = this.props;
    let toogleDir = direction;
    if (closed) toogleDir = DirectionMap[toogleDir];
    const toogleBarCls = classNames(
      'resize-handle',
      { 'resize-handle-closed': closed }, `resize-handle-${direction}`,
      { 'resize-handle-no-drag': dragDisabled }
    );
    return dragDisabled ? (
      <div
        className={toogleBarCls}
        style={style}
        ref={this.reiseHandle}
      >
        {
          closable && <span onClick={this.handleToogle} className={`resize-handle-button-${toogleDir}`} />
        }
      </div>
    ) : (
      <Draggable
        axis={direction === 'n' || direction === 's' ? 'y' : 'x'}
        onStart={this.handleStart}
        onStop={this.handleStop}
        position={position}
        ref={this.reiseHandle}
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
