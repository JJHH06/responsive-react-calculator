/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
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
  const { getByTestId } = render(<Numbers numero="0" id="number0" testid="testnumber0" />);
  expect(getByTestId('testnumber0')).toHaveTextContent('0');
});

it('renders second Number correctly', () => {
  const { getByTestId } = render(<Numbers numero="2" id="number2" testid="testnumber2" />);
  expect(getByTestId('testnumber2')).toHaveTextContent('2');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Numbers numero="2" id="number2" testid="testnumber2" />).toJSON();
  expect(tree).toMatchSnapshot();
});
