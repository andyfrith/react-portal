import v4 from 'node-uuid';
import * as types from './actionTypes';
import usersAPI from '../api/UsersAPI';

export const loadUsersSuccess = users => ( {
  type: types.LOAD_USERS_SUCCESS,
  users,
} );

export const deleteUserSuccess = user => ( {
  type: types.DELETE_USER_SUCCESS,
  user,
} );

export const updateUserSuccess = user => ( {
  type: types.UPDATE_USER_SUCCESS,
  user,
} );

export const createUserSuccess = user => ( {
  type: types.CREATE_USER_SUCCESS,
  user,
} );

export const selectUser = user => ( {
  type: types.SELECT_USER,
  user,
} );

export const loadUsers = () => dispatch =>
  usersAPI
    .getAllUsers()
    .then( ( users ) => {
      dispatch( loadUsersSuccess( users ) );
    } )
    .catch( ( error ) => {
      throw error;
    } );

export const updateUser = user => dispatch => dispatch( updateUserSuccess( user ) );

export const createUser = ( displayName, gender, location, website ) => {
  const user = {
    user_id: v4(),
    display_name: displayName,
    gender,
    location,
    website,
    active: true,
  };

  return dispatch => dispatch( createUserSuccess( user ) );
};

export const deleteUser = user => dispatch => dispatch( deleteUserSuccess( user ) );
