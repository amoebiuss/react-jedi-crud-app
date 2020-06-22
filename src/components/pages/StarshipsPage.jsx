import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import Form from '../common/Form';
import Heading from '../common/Heading';
import * as dataService from '../../services/dataService';

let columns = [];

export const StarshipsPage = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const isStorageEmpty = !localStorage.getItem('starships');
      const data = isStorageEmpty
        ? await dataService.getShips()
        : JSON.parse(localStorage.getItem('starships'));

      columns = Object.keys(data[0]);
      setShips(data);

      isStorageEmpty && localStorage.setItem('starships', JSON.stringify(data));
    };

    getData();
  }, [])

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
  
  const handleRowDelete = (name) => {
    const data = [...ships];
    const filteredData = data.filter(item => item.name !== name);
    setShips(filteredData);
    localStorage.setItem('starships', JSON.stringify(filteredData));
  }

  return (<>
    <Heading text="Starships" />

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