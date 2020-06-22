import React from 'react';
import Button from './Button';
import { Alert } from 'react-bootstrap';

function Table({ columns, data, tableDescriptor, onRowDelete }) {
    return (<>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">{tableDescriptor}</th>
                    {columns.map(columnTitle => (
                        <th key={columnTitle} scope="col">{columnTitle}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.name}>
                        <th scope="row">
                            {++index}
                        </th>
                        {columns.map(columnTitle => (
                            <td key={item[columnTitle] + columnTitle}>
                                {item[columnTitle]}
                            </td>
                        ))}
                        <td>
                            <Button onClick={() => onRowDelete(item.id)} label="Delete" classes='btn-danger'></Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {data.length
            ? null
            : <Alert variant="info">No data, but you can add some.</Alert>
        }
    </>)
}

export default Table;
