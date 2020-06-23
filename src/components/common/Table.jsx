import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from './Button';
import { Alert } from 'react-bootstrap';
import './Table.css';

function Table({ columns, data, tableDescriptor, onItemDelete }) {
    let { url } = useRouteMatch();

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
                    <tr key={item.id} className="table-row">
                        <th scope="row">
                            {++index}
                        </th>
                        {columns.map(columnTitle => (
                            <td key={item[columnTitle] + columnTitle}>
                                {item[columnTitle]}
                            </td>
                        ))}
                        <td className="btn-container">
                            <Button onClick={() => onItemDelete(item.id)} label="Delete" classes='btn-danger'></Button>

                            <Link to={{
                                pathname: `${url}/${item.id}`,
                                state: { ...item }
                            }} style={{ margin: '0 10px' }}>
                                Edit
                            </Link>
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
