// import { getAllPersons, getPersonByID, createPerson,
//    editPersonByID, deleteUserByID } from './persons/actions';

const debugStore = (store, isDebugging) => {
  if (isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(getAllPersons());
    // store.dispatch(getPersonByID(1));
    // store.dispatch(getPersonByID(2)); // status: 404
    // store.dispatch(createPerson('Карп', 'Карпов'));
    // store.dispatch(editPersonByID(0, 'Спанч', 'Боб'));
    // store.dispatch(deleteUserByID(1));
  }
}

export default debugStore;