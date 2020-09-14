import React from 'react';
import { connect } from 'react-redux';
import PersonItem from './personItem/PersonItem';
import './personList.css';

const PersonList = ({ persons }) => {
  return (
    <div className='person-list'>
      <h1 className='person-list__title'>Список сотрудников</h1>
      <h2 className='person-list__list-header'>
        
        <span className='person-list__icon'>&#9055;</span>
        <span className='person-list__first-name'>Имя</span>
        <span className='person-list__last-name'>Фамилия</span>
      </h2>
      <hr className='person-list__hr'/>
      <ul className='person-list__list'>
        {persons.map(person => {
          const { firstName, lastName, id } = person;
          return <PersonItem 
            firstName={firstName} 
            lastName={lastName} 
            key={id}
            id={id}/>
        })}
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => ({
  persons: state.persons.persons
});

export default connect(mapStateToProps)(PersonList);