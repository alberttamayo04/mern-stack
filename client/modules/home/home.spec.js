'use strict';

import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';

import home from './home';

describe('Home', () => {
  it('should render component', () => {
    const wrapper = shallow(<home />);
    expect(wrapper.find('.home').length).toBe(1);
  });
});
