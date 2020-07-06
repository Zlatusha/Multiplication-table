import React from 'react';
import TableItem from './TableItem'

const Table = ({ mulTab }) => {
  return (
    <div>
      {mulTab.map((row) => <div>{row.map((item) => <div>{item}</div>)}</div>)}
    </div>
  )
}

export default Table
