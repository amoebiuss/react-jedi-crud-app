import React, { useState } from 'react';
import Table from '../components/common/Table';
import Form from '../components/common/Form';
import Heading from '../components/common/Heading';

const data = [
  { first: 'Mark', last: 'Otto', handle: '@motto', id: '1' },
  { first: 'Carl', last: 'Reno', handle: '@ceno', id: '2' },
  { first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3' }
]

const columns = Object.keys(data[0]);

export const PeoplePage = () => {
  const [people, setPeople] = useState(data);

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
    <Heading text="People"/>

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