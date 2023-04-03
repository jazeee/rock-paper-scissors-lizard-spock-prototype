import { render, screen } from '@testing-library/react';

import { App } from './App';

test('renders Header', async () => {
  render(<App />);
  const element = await screen.findByText(/Paper on the rocks/i);
  expect(element).toBeInTheDocument();
});
