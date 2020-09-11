import React from 'react';
import { connect } from 'react-redux';
import { setShowModalPerson } from '../../redux/appearance/actions';
import './addPersonButton.css';

const AddPersonButton = ({ setShowModalPerson }) => {
  const handleAddPerson = () => {
    setShowModalPerson(true);
  }

  return (
    <button 
      onClick={handleAddPerson}
      className='add-person-btn'
      >Add person</button>
  )
};

export default connect(null, {setShowModalPerson})(AddPersonButton);