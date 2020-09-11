import React from 'react';
import { connect } from 'react-redux';
import { setShowModalPerson } from '../../redux/appearance/actions';
import { setPerson, createPerson, editPersonByID } from '../../redux/persons/actions';
import './createEditPersonModal.css';

const CreateEditPersonModal = ({ isShownPersonModal, personModalType, 
  setShowModalPerson, setPerson, person, createPerson, editPersonByID }) => {
  
  const isShown = () => isShownPersonModal ? 'person-modal_is-shown' : '';

  const handleCloseModal = () => {
    setShowModalPerson(false);
  };

  const handleChangeFirstName = (e) => {
    const firstName = e.target.value;
    setPerson({firstName});
  };

  const handleChangeLastName = (e) => {
    const lastName = e.target.value;
    setPerson({lastName});
  };
  
  const handleSavePerson = (e) => {
    e.preventDefault();
    const { firstName, lastName, id } = person;
    console.log(firstName, lastName, id);
    if (personModalType === 'create') {
      createPerson(firstName, lastName);
    } else {
      editPersonByID(id, firstName, lastName);
    }
    setShowModalPerson(false);
  };

  return (
    <div className={'person-modal ' + isShown()}>
      <h2>{personModalType === 'create' 
        ? 'Создание сотрудника' : 'Редактирование сотрудника'}
      </h2>
      <button onClick={handleCloseModal}>Назад к списку</button>
      <form>
        <input 
          onChange={handleChangeFirstName}
          type='text' 
          name='firstName' 
          value={person.firstName}
          placeholder='Введите имя сотрудника'
        />
        <input 
          onChange={handleChangeLastName}
          type='text' 
          name='lastName'
          value={person.lastName}
          placeholder='Введите фамилию сотрудника'
        />
        <input 
          onClick={handleSavePerson}
          type='submit'
          value='Сохранить'
        />
      </form>
    </div>
  )
};

const mapStateToProps = (state) => ({
  isShownPersonModal: state.appearance.isShownPersonModal,
  personModalType: state.appearance.personModalType,
  person: state.persons.person
});

export default connect(mapStateToProps,
   {setShowModalPerson, setPerson, createPerson, editPersonByID })
   (CreateEditPersonModal);
