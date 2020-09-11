import React from 'react';
import { connect } from 'react-redux';
import PersonItem from './personItem/PersonItem';
import './personList.css';

const PersonList = ({ persons }) => {
  return (
    <div className='person-list'>
      <h1 className='person-list__title'>Список сотрудников</h1>
      <h2 className='person-list__list-header'>
        <span>Имя</span>
        <span>Фамилия</span>
      </h2>
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