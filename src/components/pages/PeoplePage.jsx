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
      const data = await dataService.getPeople();
      columns = Object.keys(data[0]);
      setPeople(data);
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

  const handleRowDelete = (id) => {
    const data = [...people];
    const filteredData = data.filter(item => item.id !== id);
    setPeople(filteredData);
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