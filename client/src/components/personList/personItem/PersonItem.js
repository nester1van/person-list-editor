import React from 'react';
import { connect } from 'react-redux';
import { getPersonByID, deletePersonByID } from '../../../redux/persons/actions';
import { setShowModalPerson, setTypeModalPerson,
  setShowModalStatus } from '../../../redux/appearance/actions';
import './personItem.css';

const PersonItem = ({ firstName, lastName, id, getPersonByID,setShowModalPerson, 
  setTypeModalPerson, deletePersonByID, setShowModalStatus }) => {

  const handleEditPerson = () => {
    getPersonByID(id);
    setShowModalPerson(true);
    setTypeModalPerson('edit');
  };

  const handleDeletePerson = () => {
    deletePersonByID(id);
    setShowModalStatus(true);
  };

  return (
    <li className='person-item'>
      <div className='person-item__name-group'>
        <span className='person-item__icon'>&#128100;</span>
        <span className='person-item__first-name'>{firstName}</span>
        <span className='person-item__last-name'>{lastName}</span>
      </div>
      <div className='person-item__btn-group'>
        <button 
          className='person-item__btn-edit'
          onClick={handleEditPerson}>		&#9998;</button>
        <button 
          className='person-item__btn-delete'
          onClick={handleDeletePerson}>&#9932;</button>  
      </div>
    </li>
  )
};

export default connect(null, 
  {getPersonByID, setShowModalPerson, setTypeModalPerson, 
  deletePersonByID, setShowModalStatus})
  (PersonItem);