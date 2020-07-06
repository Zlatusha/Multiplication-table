import React, { useState } from 'react';

const Table = ({ table }) => {

  const [activeColumn, setActiveColumn] = useState();
  const [activeRow, setActiveRow] = useState();

  const lightLines = (row, column) => {
    setActiveColumn(column)
    setActiveRow(row)
  }

  const light = (row, column) => {
    const lightHover = 'light-hover';
    const defaultItem = 'table-item'
    if (column === activeColumn || row === activeRow) {
      return lightHover;
    }
    return defaultItem
  }

  return (
    <table>
      <caption>Multiplication tables</caption>
      <tbody>
        {table.map((row, i) =>
          <tr key={i}>
            {row.map((item, n) =>
              <td
                key={`${i}_${item}`}
                onMouseEnter={() => { lightLines(i, n) }}
                className={light(i, n)}>
                {item}
              </td>)}
          </tr>)}
      </tbody>
    </table>
  )
}

export default Table
