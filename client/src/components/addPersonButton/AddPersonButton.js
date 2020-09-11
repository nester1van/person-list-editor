import React from 'react';
import { connect } from 'react-redux';
import { setShowModalPerson } from '../../redux/appearance/actions';

const AddPersonButton = ({ setShowModalPerson }) => {
  const handleAddPerson = () => {
    setShowModalPerson(true);
  }

  return (
    <button onClick={handleAddPerson}>Add person</button>
  )
};

export default connect(null, {setShowModalPerson})(AddPersonButton);