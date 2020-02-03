import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote.js';
import { quote } from '../services/futurama-api.js';
jest.mock('../services/futurama-api.js');

describe('Quote component', () => {
  it('renders Quote', () => {
    const wrapper = shallow(<Quote />);
    expect(wrapper).toMatchSnapshot();
  });

  it('fetches from the api', () => {
    const wrapper = shallow(<Quote />);
    const quoteFetcher = wrapper.instance();
    quoteFetcher.fetch()
      .then(() => {
        expect(wrapper.state('character')).toEqual('Professor Farnsworth');
        expect(wrapper.state('quote')).toEqual('I\'m as spry as a 140 year old. See? I only broke one ankle.');
        expect(wrapper.state('image')).toEqual('https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/farnsworth.png');
      });
    expect(quote).toHaveBeenCalled();
  });

});

