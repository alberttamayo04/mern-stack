import React from 'react';
import { shallow, mount, render } from 'enzyme';
import home from './home';

describe('home test', () => {
  it('should render component', () => {
    const wrapper = shallow(<home />);
    expect(wrapper.find('.home').length).toBe(1);
  });
});
