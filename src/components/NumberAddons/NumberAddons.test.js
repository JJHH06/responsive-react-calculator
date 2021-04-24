/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import NumberAddons from './NumberAddons';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NumberAddons />, div);
});

it('renders NumberAddOn correctly', () => {
  const { getByTestId } = render(<NumberAddons operacion="." testid="operator." />);
  expect(getByTestId('operator.')).toHaveTextContent('.');
});

it('renders second NumberAddOn correctly', () => {
  const { getByTestId } = render(<NumberAddons operacion="=" testid="operator=" />);
  expect(getByTestId('operator=')).toHaveTextContent('=');
});

it('matches snapshot', () => {
  const tree = renderer.create(<NumberAddons operacion="=" testid="operator=" />).toJSON();
  expect(tree).toMatchSnapshot();
});
