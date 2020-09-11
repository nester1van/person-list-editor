import React from 'react';
import { connect } from 'react-redux';
import { getPersonByID, deletePersonByID } from '../../../redux/persons/actions';
import { setShowModalPerson, setTypeModalPerson } from '../../../redux/appearance/actions';

const PersonItem = ({ firstName, lastName, id, getPersonByID,
  setShowModalPerson, setTypeModalPerson, deletePersonByID }) => {

  const handleEditPerson = () => {
    getPersonByID(id);
    setShowModalPerson(true);
    setTypeModalPerson('edit');
  };

  const handleDeletePerson = () => {
    deletePersonByID(id);
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
  {getPersonByID, setShowModalPerson, setTypeModalPerson, deletePersonByID})
  (PersonItem);