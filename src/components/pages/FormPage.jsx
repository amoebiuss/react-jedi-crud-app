import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Heading, BackLink } from '../common';
import { generateColumns, generateID, generateHeading } from '../../services/utils';
import { setPeople } from '../../store/actions/people';
import { setPlanets } from '../../store/actions/planets';
import { setStarships } from '../../store/actions/starships';
import { getPeopleList } from '../../store/selectors/people';
import { getPlanetsList } from '../../store/selectors/planets';
import { getStarshipsList } from '../../store/selectors/starships';

const FormPage = ({ items, slug, currentItem, dispatchListUpdate }) => {
  const history = useHistory();

  const handleListUpdate = (items) => {
    dispatchListUpdate(items);
  }

  const handleFormSubmit = (personData) => {
    const index = items.findIndex((item) => item.id === personData.id);
    const updatedPerson = { ...personData, id: generateID() };
    let newList = [...items];

    if (index === -1) {
      newList = [...newList, updatedPerson];
    } else {
      newList[index] = updatedPerson;
    }

    handleListUpdate(newList);
    history.goBack();
  }

  return (<>
    {
      currentItem && Object.keys(currentItem).length
        ? <Heading text={`${generateHeading(slug, true)}: ${currentItem.name}`} />
        : <Heading text={generateHeading(slug, false)} />
    }

    <BackLink />
    <Form
      initialData={currentItem}
      columns={generateColumns(slug)}
      onFormSubmit={handleFormSubmit}
    />
  </>);
}

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.match.path;
  const currentItem = {...ownProps.location.state};
  const slug = path.slice(path.indexOf('/') + 1, path.lastIndexOf('/'));
  const props = { slug, currentItem };

  if (slug === 'people') {
    props.items = getPeopleList(state);
  } else if (slug === 'planets') {
    props.items = getPlanetsList(state);
  } else if (slug === 'starships') {
    props.items = getStarshipsList(state);
  }

  return props;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.match.path;
  const slug = path.slice(path.indexOf('/') + 1, path.lastIndexOf('/'));
  const actions = {};

  if (slug === 'people') {
    actions.dispatchListUpdate = (list) => {
      dispatch(setPeople(list));
    };
  } else if (slug === 'planets') {
    actions.dispatchListUpdate = (list) => {
      dispatch(setPlanets(list));
    };
  } else if (slug === 'starships') {
    actions.dispatchListUpdate = (list) => {
      dispatch(setStarships(list));
    };
  }

  return actions;
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);