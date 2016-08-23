import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../src/components/nav';

function setup() {
  const props = {};
  const enzymeWrapper = shallow(<Nav />)
  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Nav', () => {
    const { enzymeWrapper } = setup();
    it('should render self and subcomponents', () => {
      expect(enzymeWrapper.find('a.navbar-brand').text()).toBe('Some Online Shop');
    });
    it('should render 2 items for navigations', () => {
      expect(enzymeWrapper.find('#navbar > ul').find('li').length).toBe(2);
    });
  });
});