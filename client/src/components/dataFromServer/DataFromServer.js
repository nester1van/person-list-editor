import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPersons } from '../../redux/persons/actions';

const DataFromServer = ({ getAllPersons }) => {
  useEffect(() => {
    getAllPersons();
  }, []);
  return null;
};

export default connect(null, {getAllPersons})(DataFromServer);