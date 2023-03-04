import { useState } from 'react';

function Counter({ initialValue, theme }) {
  const [ counter, setCounter ] = useState(initialValue);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }
  const resetCounter = () => {
    setCounter(initialValue);
  }

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>Você clicou {counter} vezes!</p>
      <p>O tema é {theme}</p>

      <button onClick={decreaseCounter}>-</button>
      <button onClick={() => increaseCounter()}>+</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  )
}


export default Counter