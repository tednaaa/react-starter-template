import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

describe('Counter', () => {
  it('should render correctly', () => {
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'increment' });
    const decrementButton = screen.getByRole('button', { name: 'decrement' });
    const countElement = screen.getByRole('spinbutton');

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveValue(0);
  });

  it('should increase count value on increment button click', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const countInput = screen.getByRole('spinbutton');
    const incrementButton = screen.getByRole('button', { name: 'increment' });

    expect(countInput).toHaveValue(0);

    await user.click(incrementButton);

    expect(countInput).toHaveValue(1);

    await user.click(incrementButton);

    expect(countInput).toHaveValue(2);
  });

  it('should decrease count value on decrement button click', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const countInput = screen.getByRole('spinbutton');
    const decrementButton = screen.getByRole('button', { name: 'decrement' });

    expect(countInput).toHaveValue(0);

    await user.click(decrementButton);

    expect(countInput).toHaveValue(-1);

    await user.click(decrementButton);

    expect(countInput).toHaveValue(-2);
  });

  it('should update count value on input change', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const countInput = screen.getByRole('spinbutton');

    await user.type(countInput, '10');

    expect(countInput).toHaveValue(10);

    await user.clear(countInput);

    expect(countInput).toHaveValue(0);

    await user.type(countInput, '15');

    expect(countInput).toHaveValue(15);
  });

  it('should focus elements in right order', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole('button', { name: 'increment' });
    const decrementButton = screen.getByRole('button', { name: 'decrement' });
    const countInput = screen.getByRole('spinbutton');

    await user.tab();

    expect(incrementButton).toHaveFocus();

    await user.tab();

    expect(countInput).toHaveFocus();

    await user.tab();

    expect(decrementButton).toHaveFocus();
  });
});
