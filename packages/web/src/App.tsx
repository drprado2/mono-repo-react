import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import api from '@reactshardlib/services';

function App() {
  useEffect(() => {
    api.get('');
      })

      const abc = ''

  return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> ATTTTT
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
