import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
let fetch = require('jest-fetch-mock'); // Makes the test use 'jest-fetch-mock

import App from './app';

fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        value: 'Testing something!',
      }),
  })
);

describe('App', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = fetch;
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            value: 'Testing something!',
          }),
      })
    );
  });

  afterEach(() => {
    fetch = originalFetch;
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
