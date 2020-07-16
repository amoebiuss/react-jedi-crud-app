import { nanoid } from 'nanoid'
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Heading, BackLink } from '../common';
import { generateColumns, getNameBySlag } from '../../services/utils';
import { setPeople } from '../../store/actions/people';
import { setPlanets } from '../../store/actions/planets';
import { setStarships } from '../../store/actions/starships';
import { getPeopleList } from '../../store/selectors/people';
import { getPlanetsList } from '../../store/selectors/planets';
import { getStarshipsList } from '../../store/selectors/starships';

const FormPage = ({ items, slug, currentItem, dispatchListUpdate }) => {
  const history = useHistory();

  const handleFormSubmit = (updateData) => {
    const index = items.findIndex((item) => item.id === updateData.id);
    const updatedPerson = { id: nanoid(), ...updateData }; // now we don't change id on change item
    let newList = [...items];

    if (index === -1) {
      newList = [...newList, updatedPerson];
    } else {
      newList[index] = updatedPerson;
    }

    dispatchListUpdate(newList);
    history.goBack();
  }

  const headingText = currentItem && Object.keys(currentItem).length
    ? `Edit ${getNameBySlag(slug)}: ${currentItem.name}`
    : `Add new ${getNameBySlag(slug)}`

  return (<>
    <Heading text={headingText} />
    <BackLink />
    <Form
      initialData={currentItem}
      columns={generateColumns(slug)}
      onFormSubmit={handleFormSubmit}
    />
  </>);
}

// TODO: move to utils
const getSlug = (path) => {
  return path.slice(path.indexOf('/') + 1, path.lastIndexOf('/'))
}

// TODO: move to selectors
const getItemsBySlag = (state, slug) =>  {
  if (slug === 'people') { //  nice to extract to separate selector
    return getPeopleList(state)
  } else if (slug === 'planets') {
    return getPlanetsList(state)
  } else if (slug === 'starships') {
    return getStarshipsList(state)
  }
  return []
}

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.match.path;
  const currentItem = {...ownProps.location.state};
  const slug = getSlug(path);
  return {
    slug,
    currentItem,
    items: getItemsBySlag(state, slug)
  };
}

const ACTION_BY_SLAG = {
  people: setPeople,
  planets: setPlanets,
  starships: setStarships,
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.match.path;
  const slug = getSlug(path);
  return {
    dispatchListUpdate: list => dispatch(ACTION_BY_SLAG[slug](list))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
