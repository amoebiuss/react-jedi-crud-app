import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Table, Heading } from '../common';
import { getPeople, columnsData } from '../../services/dataService';

export const PeoplePage = () => {
  const [columns] = useState(columnsData.people);
  const [people, setPeople] = useState([]);
  let { url } = useRouteMatch();

  useEffect(() => {
    const getData = async () => {
      const isStorageEmpty = !localStorage.getItem('people');
      const data = isStorageEmpty
        ? await getPeople()
        : JSON.parse(localStorage.getItem('people'));
      
      setPeople(data);
      isStorageEmpty && localStorage.setItem('people', JSON.stringify(data));
    };

    getData();
  }, [])

  const handleItemDelete = (id) => {
    const data = [...people];
    const filteredData = data.filter(item => item.id !== id);
    setPeople(filteredData);
    localStorage.setItem('people', JSON.stringify(filteredData));
  }

  return (<>
    <Heading text="People" />

    <Link to={`${url}/new`} className="btn btn-info" style={{ margin: '15px 0' }}>
      + Add person
    </Link>

    <Table
      data={people}
      columns={columns}
      tableDescriptor="People"
      onItemDelete={handleItemDelete}
    />
  </>)
}