import React from 'react';
import { shallow, mount, render } from 'enzyme';
import test from './test';

describe('test test', () => {
  it('should render component', () => {
    const wrapper = shallow(<test />);
    expect(wrapper.find('.test').length).toBe(1);
  });
});
