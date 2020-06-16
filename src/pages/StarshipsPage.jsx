import React, { useState } from 'react';
import Table from '../components/common/Table';
import Form from '../components/common/Form';

const data = [
  { name: 'CR90 corvette', crew: '30-165', passengers: '600', id: '1' },
  { name: 'Sentinel-class landing craft', crew: '5', passengers: '75', id: '2' },
  { name: 'Death Star', crew: '342,953', passengers: '843,342', id: '3' },
]

const columns = Object.keys(data[0]);

export const StarshipsPage = () => {
  const [ships, setShips] = useState(data);

  const handleAppShip = (shipData) => {
    const data = [...ships, shipData];
    setShips(data)
  }

  const getInitialShipData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }
  
  const handleRowDelete = (id) => {
    const data = [...ships];
    const filteredData = data.filter(item => item.id !== id);
    setShips(filteredData);
  }

  return (<>
    <Table
      data={ships}
      columns={columns}
      tableDescriptor="Starships"
      onRowDelete={handleRowDelete}
    />

    <Form
      initialData={getInitialShipData()}
      columns={columns}
      onAddData={handleAppShip}
    />
  </>)
};