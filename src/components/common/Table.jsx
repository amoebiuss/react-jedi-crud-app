import React from 'react'
import Button from './Button'
import { Alert } from 'react-bootstrap'

import './Table.css'

const Table = ({ columns, data, tableDescriptor, onItemDelete }) => {
  const renderCell = (item, column) => {
    if (column.content) { // better use full body
      return column?.content(item)
    }

    return column?.columnTitle !== 'id'
      ? item[column.columnTitle]
      : null
  }

  if (!data?.length) {
    return <Alert variant="info">No data, but you can add some.</Alert>
  }
  return (
    <table className="table table-striped table-dark">
      <thead>
      <tr>
        <th scope="col">{tableDescriptor}</th>
        {columns.map(column => (
          <th key={column.columnTitle} scope="col">{column.columnTitle}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <tr key={item.name}>
          <th scope="row">{index + 1}</th>
          {
            columns.map(column => (
              <td key={column.columnTitle}>
                {renderCell(item, column)}
              </td>
            ))
          }
          <td>
            <Button
              onClick={() => onItemDelete(item.id)}
              className="btn btn-danger"
              label="Delete"
            />
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table
