import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Form, Heading, BackLink } from '../common';
import { generateColumns, generateID, generateHeading } from '../../services/utils';

export const FormPage = ({ location }) => {
  const { url } = useRouteMatch();
  const storagePath = url.slice(url.indexOf('/') + 1, url.lastIndexOf('/'));
  const [personList, setPersonList] = useState(JSON.parse(localStorage.getItem(storagePath)));
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

    localStorage.setItem(storagePath, JSON.stringify(newList));
    history.goBack();
  }

  return (<>
    {
      Object.keys(person).length
        ? <Heading text={`${generateHeading(url, true)}: ${person.name}`} />
        : <Heading text={generateHeading(url, false)} />
    }
    <BackLink />

    <Form
      initialData={person}
      columns={generateColumns(personList[0])}
      onFormSubmit={handleFormSubmit}
    />
  </>);
}