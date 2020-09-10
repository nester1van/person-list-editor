import { REQ_PERSONS, ERR_PERSONS, 
  RES_GET_ALL_PERSONS, RES_GET_PERSON_BY_ID } from './actions';

const initialPersons = {
  isFetching: false,
  status: undefined,
  persons: [],
  person: null
};

const persons = (state = initialPersons, action) => {
  const { isFetching, status, persons, person, type } = action;
  switch (type) {
    case REQ_PERSONS:
      return {...state, isFetching};
    case ERR_PERSONS:
      return {...state, isFetching, status};
    case RES_GET_ALL_PERSONS:
      return {isFetching, status, persons};
    case RES_GET_PERSON_BY_ID:
      return {...state, isFetching, status, person};
    default:
      return state;
  }
};

export default persons;