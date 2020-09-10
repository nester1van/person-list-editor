import { combineReducers } from 'redux';
import persons from './persons/reducer';

const reducers = combineReducers({ persons });

export default reducers;
