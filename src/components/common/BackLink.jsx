import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../common';

const BackLink = () => {
  const history = useHistory();
  return (
    <Button
      label="< back"
      className="alert alert-link"
      onClick={() => history.goBack()}
    />
  );
};

export default BackLink;
