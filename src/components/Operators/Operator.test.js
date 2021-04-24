import React from 'react';
import ReactDOM from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Operators from './Operators';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Operators />, div);
});

it('renders Operator correctly', () => {
  const { getByTestId } = render(<Operators simbolo="÷" testid="operator/" operador="/" />);
  expect(getByTestId('operator/')).toHaveTextContent('÷');
});

it('renders second Operator correctly', () => {
  const { getByTestId } = render(<Operators simbolo="x" testid="operator*" operador="*" />);
  expect(getByTestId('operator*')).toHaveTextContent('x');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Operators simbolo="x" testid="operator*" operador="*" />).toJSON();
  expect(tree).toMatchSnapshot();
});
