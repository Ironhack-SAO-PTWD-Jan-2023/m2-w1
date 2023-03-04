import { useState } from 'react';

import './App.css';
import Counter from './components/Counter'

function App() {
  const [ theme, setTheme ] = useState('light');

  const toggleTheme = (event) => {
    setTheme(event.target.value);
    // theme = event.target.value; // ERRADO! Não re-renderiza/atualiza o componente
  }

  return (
    <div className={`App ${theme}`}>
      <Counter initialValue={50} theme={theme} />

      <select onChange={toggleTheme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
}

export default App;
