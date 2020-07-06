import React from 'react';
import Table from './components/Table'
import './App.css';

const multiply = (n) => {
  const result = {};
  for (let i = 1; i <= n; i++) {
    result[i] = {};
    for (let j = 1; j <= n; j++) {
      result[i][j] = i * j
    }
  }
  console.table(result)
}

multiply(20);

function App() {
  return (
    <div className="App">
     <Table />
    </div>
  );
}

export default App;
