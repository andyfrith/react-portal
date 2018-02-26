import v4 from 'node-uuid';
import * as types from './actionTypes';
import usersAPI from '../api/UsersAPI';
import notifyUser from './notificationActions';

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
      dispatch( notifyUser( 'Users have been loaded' ) );
    } )
    .catch( ( error ) => {
      throw error;
    } );

export const updateUser = user => ( dispatch ) => {
  dispatch( updateUserSuccess( user ) );
  dispatch( notifyUser( 'User has been updated' ) );
};

export const createUser = ( userId, displayName, gender, location, website ) => {
  const user = {
    user_id: userId || v4(),
    display_name: displayName,
    gender,
    location,
    website,
    active: true,
  };

  const action = userId ? 'updated' : 'created';

  return ( dispatch ) => {
    dispatch( createUserSuccess( user ) );
    dispatch( notifyUser( `User has been ${ action }` ) );
  };
};

export const deleteUser = user => ( dispatch ) => {
  dispatch( deleteUserSuccess( user ) );
  dispatch( notifyUser( 'User has been deleted' ) );
};
