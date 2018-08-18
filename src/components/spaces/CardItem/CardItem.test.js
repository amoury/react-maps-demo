import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardItem from './CardItem';

configure({adapter: newAdapter()})


describe('<CardItem />', () => {
  it('should render Distance Data', () => {
    const wrapper = shallow(<CardItem />);
    expect(wrapper.contains(<Card.Meta/>)).toHaveLength(1);
  });
})