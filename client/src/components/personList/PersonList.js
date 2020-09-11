import React from 'react';
import { connect } from 'react-redux';
import PersonItem from './personItem/PersonItem';

const PersonList = ({ persons }) => {
  return (
    <ul>
      {persons.map(person => {
        const { firstName, lastName, id } = person;
        return <PersonItem 
          firstName={firstName} 
          lastName={lastName} 
          key={id}
          id={id}/>
      })}
    </ul>
  )
};

const mapStateToProps = (state) => ({
  persons: state.persons.persons
});

export default connect(mapStateToProps)(PersonList);