import React from 'react';
import ReactDOM from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Numbers from './Numbers';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Numbers />, div);
});

it('renders Number correctly', () => {
  const { getByTestId } = render(<Numbers numero="0" />);
  expect(getByTestId('number')).toHaveTextContent('0');
});

it('renders second Number correctly', () => {
  const { getByTestId } = render(<Numbers numero="2" />);
  expect(getByTestId('number')).toHaveTextContent('2');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Numbers numero="2" />).toJSON();
  expect(tree).toMatchSnapshot();
});
