'use strict';

import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import Profile from './profile';

describe('About', () => {
  it('should render <Profile /> component', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.find('.profile').length).to.equal(1);
  });
});
