import React from 'react';
import { render } from '@testing-library/react';
import App from './MyList';

test('renders learn react link', () => {
  const { getByText } = render(<MyList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
