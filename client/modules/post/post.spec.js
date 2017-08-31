'use strict';

import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import Post from './post';

describe('Post', () => {
  it('should render <Post /> component', () => {
    const wrapper = shallow(<Post />);
    expect(wrapper.find('.blog').length).to.equal(1);
  });
});
