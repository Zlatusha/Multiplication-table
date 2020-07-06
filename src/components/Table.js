import React from 'react';
import TableItem from './TableItem'


const Table = ({ mulTab }) => {
  return (
    // <div className="multi-head">
    //   {mulTab.map((row) =>
    //     <div className="multi-section">
    //       {row.map((item) =>
    //         <div className="multi-item">{item}</div>)}
    //     </div>)}
    // </div>


    <table>
      
      <caption>Multiplication tables</caption>
      <tbody>
      {mulTab.map((row, i) =>
        <tr key={i}>
          {row.map((item) =>
            <td key={`${i}_${item}`}>{item}</td>)}
        </tr>)}
        </tbody>
    </table>

  )
}

export default Table
