import React, { useState, useEffect } from 'react';
import Table from '../common/Table';
import Form from '../common/Form';
import Heading from '../common/Heading';
import * as dataService from '../../services/dataService';

let columns = [];

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const isStorageEmpty = !localStorage.getItem('people');
      const data = isStorageEmpty
        ? await dataService.getPeople()
        : JSON.parse(localStorage.getItem('people'));
      
      columns = Object.keys(data[0]);
      setPeople(data);

      isStorageEmpty && localStorage.setItem('people', JSON.stringify(data));
    };
    
    getData();
  }, [])

  const handleAppPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data)
  }

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  const handleRowDelete = (name) => {
    const data = [...people];
    const filteredData = data.filter(item => item.name !== name);
    setPeople(filteredData);
    localStorage.setItem('people', JSON.stringify(filteredData));
  }

  return (<>
    <Heading text="People" />

    <Table
      data={people}
      columns={columns}
      tableDescriptor="People"
      onRowDelete={handleRowDelete}
    />

    <Form
      initialData={getInitialPeopleData()}
      columns={columns}
      onAddData={handleAppPerson}
    />
  </>)
}