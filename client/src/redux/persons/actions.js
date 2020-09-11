import axios from 'axios';
import config from '../../config';

// action types
export const SET_PERSON = 'SET_PERSON'; 
export const REQ_PERSONS = 'REQ_PERSONS';
export const ERR_PERSONS = 'ERR_PERSONS';

export const RES_GET_ALL_PERSONS = 'RES_PERSONS_GET_ALL_PERSONS';
export const RES_GET_PERSON_BY_ID = 'RES_GET_PERSON_BY_ID';
export const RES_CREATE_PERSON = 'RES_CREATE_PERSON';
export const RES_EDIT_PERSON_BY_ID = 'RES_EDIT_PERSON_BY_ID';
export const RES_DELETE_PERSON_BY_ID = 'RES_DELETE_PERSON_BY_ID';

// action creators
export const setPerson = (person) => ({
  type: SET_PERSON,
  person
});

const reqPersons = () => ({
  type: REQ_PERSONS,
  isFetching: true
});


const errPersons = (status) => ({
  type: ERR_PERSONS,
  isFetching: false,
  status
});

const resGetAllPersons = (status, persons) => ({
  type: RES_GET_ALL_PERSONS,
  isFetching: false,
  status,
  persons
});

const resGetPersonByID = (status, person) => ({
  type: RES_GET_PERSON_BY_ID,
  isFetching: false,
  status,
  person
});

const resCreatePerson = (status) => ({
  type: RES_CREATE_PERSON,
  isFetching: false,
  status
});

const resEditPersonByID = (status) => ({
  type: RES_EDIT_PERSON_BY_ID,
  isFetching: false,
  status
});

const resDeletePersonByID = (status) => ({
  type: RES_DELETE_PERSON_BY_ID,
  isFetching: false, 
  status
}); 

const { SERVER, SERVER_API } = config;
const urlAPIperson = `${SERVER}${SERVER_API}/person`;

const handlerError = (err, dispatch) => {
  const status = Number(err.message.slice(err.message.length - 3));
  dispatch(errPersons(status));
};

// async action creators
export const getAllPersons = () => (dispatch) => {
  dispatch(reqPersons());
  return axios.get(urlAPIperson)
    .then(res => {
      const {data: persons, status } = res;
      dispatch(resGetAllPersons(status, persons));
    })
    .catch((err) => {
      handlerError(err, dispatch);
    })
};

export const getPersonByID = (id) => (dispatch) => {
  dispatch(reqPersons());
  return axios.get(`${urlAPIperson}/${id}`)
    .then(res => {
      const { data: person, status } = res;
      dispatch(resGetPersonByID(status, person));
    })
    .catch((err) => {
      handlerError(err, dispatch);
    })
};

export const createPerson = (firstName, lastName) => (dispatch) => {
  dispatch(reqPersons());
  return axios.post(urlAPIperson, {firstName, lastName})
    .then(res => {
      const { status } = res;
      dispatch(resCreatePerson(status));
      dispatch(getAllPersons());
    })
    .catch((err) => {
      handlerError(err, dispatch);
    })
};

export const editPersonByID = (id, firstName, lastName) => (dispatch) => {
  dispatch(reqPersons());
  return axios.put(`${urlAPIperson}/${id}`, {firstName, lastName})
    .then(res => {
      const { status } = res;
      dispatch(resEditPersonByID(status));
      dispatch(getAllPersons());
    })
    .catch((err) => {
      handlerError(err, dispatch);
    })
};

export const deleteUserByID = (id) => (dispatch) => {
  dispatch(reqPersons());
  return axios.delete(`${urlAPIperson}/${id}`)
    .then(res => {
      const { status } = res;
      dispatch(resDeletePersonByID(status));
      dispatch(getAllPersons());
    })
    .catch((err) => {
      handlerError(err, dispatch);
    })
};
