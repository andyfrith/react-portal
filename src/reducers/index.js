import { combineReducers } from 'redux';
import users from './userReducer';
import selectedUser from './selectedUserReducer';
import authentication from './authenticationReducer';
import notifications from './notificationsReducer';

const reducers = combineReducers( {
  users,
  selectedUser,
  authentication,
  notifications,
} );

export default reducers;
