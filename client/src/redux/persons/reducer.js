import { SET_PERSON, REQ_PERSONS, ERR_PERSONS, 
  RES_GET_ALL_PERSONS, RES_GET_PERSON_BY_ID,
  RES_CREATE_PERSON, RES_EDIT_PERSON_BY_ID, 
  RES_DELETE_PERSON_BY_ID } from './actions';

const initialPersons = {
  isFetching: false,
  status: 200,
  persons: [],
  person: {firstName: '', lastName: '', id: undefined}
};

const persons = (state = initialPersons, action) => {
  const { isFetching, status, persons, person, type } = action;
  switch (type) {
    case SET_PERSON:
      const newPerson = {...state.person, ...person};
      return {...state, person: newPerson};
    case REQ_PERSONS:
      return {...state, isFetching};
    case ERR_PERSONS:
      return {...state, isFetching, status};
    case RES_GET_ALL_PERSONS:
      return {...state, isFetching, status, persons};
    case RES_GET_PERSON_BY_ID:
      return {...state, isFetching, status, person};
    case RES_CREATE_PERSON:
    case RES_EDIT_PERSON_BY_ID:
    case RES_DELETE_PERSON_BY_ID:
      return {...state, isFetching, status};
    default:
      return state;
  }
};

export default persons;