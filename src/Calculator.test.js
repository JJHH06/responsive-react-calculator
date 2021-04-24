import React from 'react';
import ReactDOM from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('operation verification', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByTestId('testnumber9'));
  fireEvent.click(screen.getByTestId('operator+'));
  fireEvent.click(screen.getByTestId('testnumber6'));
  fireEvent.click(screen.getByTestId('testEqual'));
  expect(screen.getByText(15)).toBeInTheDocument();
});

it('second operation verification', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByTestId('testnumber9'));
    fireEvent.click(screen.getByTestId('operator*'));
    fireEvent.click(screen.getByTestId('testnumber6'));
    fireEvent.click(screen.getByTestId('testEqual'));
    expect(screen.getByText(54)).toBeInTheDocument();
  });
