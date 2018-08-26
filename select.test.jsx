const select = require('./select');
import React from 'react';
import UnstructuredSelect from './select';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {

  it('should render 1 options', () => {
    const twoOptions = ['cats'];
    const component = shallow(<UnstructuredSelect options={twoOptions} />);
    expect(component.find('option').length).toEqual(1);
  });

  it('should render 2 options', () => {
    const twoOptions = ['cats', 'dogs'];
    const component = shallow(<UnstructuredSelect options={twoOptions} />);
    expect(component.find('option').length).toEqual(2);
  });

  it('should render 3 options', () => {
    const twoOptions = ['cats', 'dog', 'wolf'];
    const component = shallow(<UnstructuredSelect options={twoOptions} />);
    expect(component.find('option').length).toEqual(3);
  });

  it('should render complex object', () => {
    const twoOptions = [ ['cats', 'dogs'], {object: 'obj'}, 'wolf' ];
    const component = shallow(<UnstructuredSelect options={twoOptions} />);
    expect(component.find('option').length).toEqual(4);
  });
});
