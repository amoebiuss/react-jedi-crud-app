import React from 'react';
import Button from './Button';
import { Alert } from 'react-bootstrap';
import { generateID } from '../../services/utils';

import './Table.css';

function Table({ columns, data, tableDescriptor, onItemDelete,}) {
    const renderCell = (item, column) => {
        if (column.content) return column?.content(item);

        return column?.columnTitle !== 'id'
            ? item[column.columnTitle]
            : null;
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
                        <th key={generateID(column.columnTitle)} scope="col">{column.columnTitle}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={generateID(item.name)}>
                        <th scope="row">{++index}</th>
                        {columns.map(column => {
                            return (
                                <td key={generateID(item.name)}>
                                    {renderCell(item, column)}
                                </td>
                            )
                        })}
                        <td>
                            <Button
                                onClick={() => onItemDelete(item.id)}
                                classes="btn btn-danger"
                                label="Delete"
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
