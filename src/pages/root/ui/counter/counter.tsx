import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        decrement
      </button>

      <input
        type="number"
        name="amount"
        value={count}
        onChange={(event) => {
          const { value } = event.currentTarget;

          if (value) setCount(parseInt(value, 10));
          else setCount(0);
        }}
      />
    </div>
  );
};
