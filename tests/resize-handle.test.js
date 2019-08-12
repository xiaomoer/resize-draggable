// import jest from 'jest';
import React from 'react';
import { mount, shallow } from 'enzyme';
// import sinon from 'sinon';
import ResizeHandle from '../src/resize-handle';

const Comp = (
  <div>
    <div style={{ width: 100, height: 100 }}></div>
    <ResizeHandle direction="n" />
    <div style={{ width: 100, height: 100 }}></div>
  </div>
)

describe('Test ResizeHandle', () => {
  test('render three children', () => {
    const wrapper = shallow(Comp);
    expect(wrapper.children().length).toBe(3);
  });
  test('resize-handle properties', () => {
    const wrapper = shallow(Comp);
    expect(wrapper.childAt(1).prop('direction')).toBe('n');
  });
});

describe('test ResizeHandle method call and state change', () => {
  test('test tooglebar event', () => {
    const wrapper = shallow(<ResizeHandle direction="n" />);
    const instance = wrapper.instance();
    expect(instance.toogleSize).toBe(0);
    instance.handleToogle();
    expect(wrapper.state('closed')).toBeFalsy(); // no context evn, state will not change
  });
  test('test without toogle-bar', () => {
    const wrapper = shallow(<ResizeHandle direction="n" closable={false} />);
    expect(wrapper.find('.resize-handle-button-n').exists()).toBeFalsy();
  })
});

