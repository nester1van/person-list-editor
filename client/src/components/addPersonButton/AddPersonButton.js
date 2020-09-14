import React from 'react';
import { connect } from 'react-redux';
import { setShowModalPerson, setTypeModalPerson } from '../../redux/appearance/actions';
import './addPersonButton.css';

const AddPersonButton = ({ setShowModalPerson, setTypeModalPerson }) => {
  const handleAddPerson = () => {
    setTypeModalPerson('create');
    setShowModalPerson(true);
  }

  return (
    <button 
      onClick={handleAddPerson}
      className='add-person-btn'
      >Add person</button>
  )
};

export default connect(null, 
  {setShowModalPerson, setTypeModalPerson})(AddPersonButton);