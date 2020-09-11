import React from 'react';
import { connect } from 'react-redux';
import { getPersonByID } from '../../../redux/persons/actions';
import { setShowModalPerson, setTypeModalPerson } from '../../../redux/appearance/actions';

const PersonItem = ({ firstName, lastName, id, getPersonByID,
  setShowModalPerson, setTypeModalPerson }) => {

  const handleEditPerson = () => {
    getPersonByID(id);
    setShowModalPerson(true);
    setTypeModalPerson('edit');
  };

  const handleDeletePerson = () => {

  };

  return (
    <li>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <button onClick={handleEditPerson}>Изменить</button>
      <button onClick={handleDeletePerson}>Удалить</button>
    </li>
  )
};

export default connect(null, 
  {getPersonByID, setShowModalPerson, setTypeModalPerson})(PersonItem);