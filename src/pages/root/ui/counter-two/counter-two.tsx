import { FC } from 'react';

interface Props {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

export const CounterTwo: FC<Props> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>

      {handleIncrement && <button onClick={handleIncrement}>increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>decrement</button>}
    </div>
  );
};
