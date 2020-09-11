import React from 'react';
import { connect } from 'react-redux';
import { setShowModalPerson, setShowModalStatus } from '../../redux/appearance/actions';
import { setPerson, createPerson, editPersonByID } from '../../redux/persons/actions';
import './createEditPersonModal.css';

const CreateEditPersonModal = ({ isShownPersonModal, personModalType, 
  setShowModalPerson, setPerson, person, createPerson, 
  editPersonByID, setShowModalStatus }) => {
  
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
    if (personModalType === 'create') {
      createPerson(firstName, lastName);
    } else {
      editPersonByID(id, firstName, lastName);
    }
    setShowModalPerson(false);
    setShowModalStatus(true);
    setPerson({firstName: '', lastName: ''});
  };

  return (
    <div className={'person-modal ' + isShown()}>
      <div className='person-modal__body'>
        <h2 className='person-modal__title'>
          {personModalType === 'create' 
          ? 'Создание сотрудника' : 'Редактирование сотрудника'}
        </h2>
        <button 
          className='person-modal__back-to-list-btn'
          onClick={handleCloseModal}
          >Назад к списку</button>
        <form 
          className='person-modal__form'
          onSubmit={handleSavePerson}>
          <input 
            className='person-modal__input-first-name'
            onChange={handleChangeFirstName}
            type='text' 
            name='firstName' 
            value={person.firstName}
            placeholder='Введите имя сотрудника'
            required
          />
          <input 
            className='person-modal__input-last-name'
            onChange={handleChangeLastName}
            type='text' 
            name='lastName'
            value={person.lastName}
            placeholder='Введите фамилию сотрудника'
            required
          />
          <input 
            className='person-modal__input-submit'
            type='submit'
            value='Сохранить'
          />
        </form>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  isShownPersonModal: state.appearance.isShownPersonModal,
  personModalType: state.appearance.personModalType,
  person: state.persons.person
});

export default connect(mapStateToProps,
   {setShowModalPerson, setPerson, createPerson, 
    editPersonByID, setShowModalStatus })
   (CreateEditPersonModal);
