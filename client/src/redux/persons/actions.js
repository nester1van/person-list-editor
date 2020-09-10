import axios from 'axios';
import config from '../../config';

// action types
export const REQ_PERSONS = 'REQ_PERSONS';
export const ERR_PERSONS = 'ERR_PERSONS';

export const RES_GET_ALL_PERSONS = 'RES_PERSONS_GET_ALL_PERSONS';
export const RES_GET_PERSON_BY_ID = 'RES_GET_PERSON_BY_ID';

// action creators
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

const { SERVER, SERVER_API } = config;
const urlAPIperson = `${SERVER}${SERVER_API}/person`;

// async action creators
export const getAllPersons = () => (dispatch) => {
  dispatch(reqPersons());
  return axios.get(urlAPIperson)
    .then(res => {
      const {data: persons, status } = res;
      dispatch(resGetAllPersons(status, persons));
    })
    .catch((err) => {
      const status = Number(err.message.slice(err.message.length - 3));
      dispatch(errPersons(status));
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
      const status = Number(err.message.slice(err.message.length - 3));
      dispatch(errPersons(status));
    })
}