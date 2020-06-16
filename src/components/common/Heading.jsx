import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Heading = ({ text }) => (
  <Jumbotron>
    <h2>{text}</h2>
  </Jumbotron>
);

export default Heading;