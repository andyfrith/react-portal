import { combineReducers } from 'redux';
import users from './userReducer';
import selectedUser from './selectedUserReducer';
import authentication from './authenticationReducer';

const reducers = combineReducers( {
  users,
  selectedUser,
  authentication,
} );

export default reducers;
