import { combineReducers } from 'redux';
import persons from './persons/reducer';
import appearance from './appearance/reducer';

const reducers = combineReducers({ persons, appearance});

export default reducers;
