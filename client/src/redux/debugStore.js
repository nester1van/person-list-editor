// import { setPerson, getAllPersons, getPersonByID, createPerson,
//    editPersonByID, deletePersonByID } from './persons/actions';
// import { setShowModalPerson } from './appearance/actions';

const debugStore = (store, isDebugging) => {
  if (isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // persons
    // store.dispatch(setPerson({firstName: 'Cat'}));
    // store.dispatch(setPerson({lastName: 'Cattin'}));
    // store.dispatch(getAllPersons());
    // store.dispatch(getPersonByID(1));
    // store.dispatch(getPersonByID(2)); // status: 404
    // store.dispatch(createPerson('Карп', 'Карпов'));
    // store.dispatch(editPersonByID(0, 'Спанч', 'Боб'));
    // store.dispatch(deletePersonByID(1));

    // appearance
    // store.dispatch(setShowModalPerson(true));
  }
}

export default debugStore;