import { getAllPersons, getPersonByID } from './persons/actions';

const debugStore = (store, isDebugging) => {
  if (isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(getAllPersons());
    // store.dispatch(getPersonByID(1));
    // store.dispatch(getPersonByID(2)); // status: 404

  }
}

export default debugStore;