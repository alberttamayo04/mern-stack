'use strict';

import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import Home from './home';

describe('Home', () => {
  it('should render <Home /> component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.home').length).to.equal(1);
  });
});
