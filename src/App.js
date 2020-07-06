import React, { useState } from 'react';
import Table from './components/Table'
import './App.css';
import uuid from 'uuid';

const App = () => {



const buildMultuTable = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = (i+1) * (j+1)
    }
  }
  return result
}
const [mulTab, setMulTab] = useState(buildMultuTable(10))


  return (
    <div className="App">
      <Table mulTab={mulTab}/>

    </div>
  );
}

export default App;
