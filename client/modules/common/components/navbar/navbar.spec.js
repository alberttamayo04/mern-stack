'use strict';

import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import Navbar from './navbar';

describe('Navbar', () => {
  it('should render <Navbar /> component', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar').length).to.equal(1);
  });
});
