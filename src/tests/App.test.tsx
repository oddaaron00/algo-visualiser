import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../components/Menu';

const menuProps = {
  sortingAlgs: ['test1', 'test2', 'test3'],
  currentAlg: 'test1',
  setAlg: jest.fn()
}

//test('renders Menu component successfully', () => {
//  render(<Menu { ...menuProps } />);
//});
