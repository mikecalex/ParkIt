import ParkShowContainer from '../../src/containers/ParkShowContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ParkShowContainer', () => {
  let wrapper;

  beforeEach(() => {
    let data = {
      park: {
        id: 2,
        name: "Borderland State Park",
        address: "44 Grove St.",
        city: "Easton",
        state: "MA",
        zip: "20159",
        category: "state",
        description: null,
        photo_url: null,
        size: null,
        created_at: "2017-10-18T15:0:11.870Z",
        updated_at: "2017-10-18T15:0:11.870Z",
        user_id: 2
      }
    }

let responseBody = JSON.stringify(data);
    let response = new Response(responseBody, {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' }
    })
    let responsePromise = Promise.resolve(response);
    spyOn(global, 'fetch').and.returnValue(responsePromise);

    const spy = SpyOnProperty(this.props.match.params, 1, )

    wrapper = shallow(
      <ParkShowContainer

      />);
  });

  // it('should display the park\'s name', () => {
  //   expect(wrapper.find('h1').length).toEqual(1)
  // });

  // it('should return true', () => {
  //   expect(true).toEqual(true);
  // });

  // it('should render a ParksIndex Component', () => {
  //   expect(wrapper.find(ParksTile).length).toEqual(1);
  // });

})
