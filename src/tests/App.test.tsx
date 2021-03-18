import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

beforeEach(() => {
  render(<App />);
})

describe('\'Randomise data\' button', () => {
  it('exists', () => {
    expect(screen.getByText('Randomise data')).toBeTruthy();
  });
  it('is clickable', () => {
    const button = screen.getByText('Randomise data');
    expect(button).toBeEnabled();
  });
});