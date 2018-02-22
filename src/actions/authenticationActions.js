import v4 from 'node-uuid';
import * as types from './actionTypes';
import authenticationAPI from '../api/AuthenticationAPI';

export const requestLogin = creds => ( {
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  creds,
} );

export const receiveLogin = user => ( {
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
} );

export const loginError = message => ( {
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  message,
} );

export const requestLogout = () => ( {
  type: types.LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: false,
} );

export const receiveLogout = () => ( {
  type: types.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
} );

export const loginUser = creds => dispatch =>
  authenticationAPI
    .loginUser( creds )
    .then( ( user ) => {
      if ( user && user.id_token ) {
        localStorage.setItem( 'id_token', user.id_token );
        dispatch( receiveLogin( user ) );
      } else {
        // Return OK for testing without node server
        // dispatch( loginError( 'bad' ) );
        const mockUser = {};
        mockUser.username = creds.username;
        mockUser.password = creds.password;
        mockUser.id_token = v4();
        localStorage.setItem( 'id_token', mockUser.id_token );
        dispatch( receiveLogin( mockUser ) );
      }
    } )
    .catch( ( error ) => {
      throw error;
    } );

export const logoutUser = () => ( dispatch ) => {
  dispatch( requestLogout() );
  localStorage.removeItem( 'id_token' );
  dispatch( receiveLogout() );
};
