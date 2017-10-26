import ParkTile from '../../src/components/ParkTile';
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('ParkTile', () => {
  let wrapper,
      name;

  beforeEach(() => {
    wrapper = shallow(
      <ParkTile
        name={"Boston Common"}
      />
    );
  });

  it('should return true', () => {
    expect(true).toEqual(true);
  });

  it('should render a single list item', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('should render a single link', () => {
    expect(wrapper.find('Link').length).toEqual(1);
  });

  // it('should display the park name in the link', () => {
  //   expect(wrapper.find('Link').toContain('Boston Common');
  // });
})
