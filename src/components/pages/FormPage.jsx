import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Heading, BackLink } from '../common';
import { generateColumns, generateID } from '../../services/utils';

export const FormPage = ({ location }) => {
  const [personList, setPersonList] = useState(JSON.parse(localStorage.getItem('people')));
  const [person, setPerson] = useState(location.state || {});
  const history = useHistory();

  const handleFormSubmit = (personData) => {
    const index = personList.findIndex((item) => item.id === personData.id);
    const updatedPerson = { ...personData, id: generateID() };
    let newList = [...personList];

    if (index === -1) {
      newList = [...newList, updatedPerson];
    } else {
      newList[index] = updatedPerson;
    }

    setPerson(updatedPerson);
    setPersonList(newList);

    localStorage.setItem('people', JSON.stringify(newList));
    history.goBack();
  }

  return (<>
    {
      Object.keys(person).length
        ? <Heading text={`Edit person: ${person.name}`} />
        : <Heading text="Add new person" />
    }
    <BackLink />

    <Form
      initialData={person}
      columns={generateColumns(personList[0])}
      onFormSubmit={handleFormSubmit}
    />
  </>);
}