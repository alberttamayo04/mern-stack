'use strict';

import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import WorkExperience from './experiences';

describe('Home', () => {
  it('should render <WorkExperience /> component', () => {
    const wrapper = shallow(<WorkExperience />);
    expect(wrapper.find('.work-experience').length).to.equal(1);
  });
});
