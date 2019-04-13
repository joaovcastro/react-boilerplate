import Example from './Example';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper.find('div').text()).toBe('This is an example component');
    expect(wrapper).toMatchSnapshot();
  });
});
