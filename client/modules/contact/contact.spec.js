import React from 'react';
import { shallow, mount, render } from 'enzyme';
import contact from './contact';

describe('contact test', () => {
  it('should render component', () => {
    const wrapper = shallow(<contact />);
    expect(wrapper.find('.contact').length).toBe(1);
  });
});
