import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Should render the hello text', () => {
    expect(
      screen.getByText('This is the version boilerplate')
    ).toBeInTheDocument();
  });
});
