'use strict';

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import profile from './profile';

describe('About', () => {
  it('should render component', () => {
    const wrapper = shallow(<profile />);
    expect(wrapper.find('.profile').length).toBe(1);
  });
});
