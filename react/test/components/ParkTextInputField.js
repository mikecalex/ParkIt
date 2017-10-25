import ParkTextInputField from '../../src/components/ParkTextInputField';
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('ParkTextInputField', () => {
  let wrapper,
      value,
      name,
      label

  beforeEach(() => {
    wrapper = shallow(
      <ParkTextInputField
        label='Name'
        value='Boston Common'
        name='parkName'
      />
    );
  });

  it('should return true', () => {
    expect(true).toEqual(true);
  });

  it('should render a single label item', () => {
    expect(wrapper.find('label').length).toEqual(1);
  });

  it('should render a single input item', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
})
