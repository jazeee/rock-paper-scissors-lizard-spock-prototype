import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUpForm } from './Form';

test('allows form submission', async () => {
  const testName = 'My Name';
  const onSubmit = jest.fn().mockResolvedValue('Success');
  render(<SignUpForm onSubmit={onSubmit} formIsSubmitting={false} />);

  await userEvent.type(screen.getByLabelText(/Name/i), testName);
  expect(screen.getByLabelText(/Name/i)).toHaveAttribute('value', testName);

  await userEvent.click(screen.getByText(/Submit/i));

  expect(onSubmit).toBeCalledWith({
    userName: testName,
  });
});
