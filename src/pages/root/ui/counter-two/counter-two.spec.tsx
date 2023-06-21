import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterTwo } from './counter-two';
import userEvent from '@testing-library/user-event';

describe('CounterTwo', () => {
  it('should render correctly', () => {
    render(<CounterTwo count={0} />);

    const textElement = screen.getByRole('heading');

    expect(textElement).toBeInTheDocument();
  });

  it('should call handlers', async () => {
    const user = userEvent.setup();

    const spyHandleIncrement = jest.fn();
    const spyHandleDecrement = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={spyHandleIncrement}
        handleDecrement={spyHandleDecrement}
      />
    );

    const incrementButton = screen.getByRole('button', { name: 'increment' });
    const decrementButton = screen.getByRole('button', { name: 'decrement' });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(spyHandleIncrement).toBeCalled();
    expect(spyHandleDecrement).toBeCalled();
  });
});
