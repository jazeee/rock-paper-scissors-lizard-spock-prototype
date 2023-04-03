import { render, screen, waitFor } from '@testing-library/react';

import { App } from './App';

test('renders Header', async () => {
  render(<App />);
  await waitFor(() => {
    const linkElement = screen.getByText(/Paper on the rocks/i);
    expect(linkElement).toBeInTheDocument();
  });
});
