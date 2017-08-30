'use strict';

import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import Footer from './footer';

describe('Footer', () => {
  it('should render <Navbar /> component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('#footer').length).to.equal(1);
  });
});
