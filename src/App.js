import React, { useState } from 'react';
import Table from './components/Table'
import './App.css';


const App = () => {

  const buildMultiplicationTable = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = (i + 1) * (j + 1)
      }
    }
    return result
  }

  const [table, setTable] = useState(buildMultiplicationTable(10))

  return (
    <div className="App">
      <Table
        table={table}
      />
    </div>
  );
}

export default App;
