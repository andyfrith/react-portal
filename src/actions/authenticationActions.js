import v4 from 'node-uuid';
import * as types from './actionTypes';
// import authenticationAPI from '../api/AuthenticationAPI';

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

// export const loginUser = creds => dispatch =>
//   authenticationAPI
//     .loginUser( creds )
//     .then( ( user ) => {
//       if ( user && user.id_token ) {
//         localStorage.setItem( 'id_token', user.id_token );
//         dispatch( receiveLogin( user ) );
//       } else {
//         dispatch( loginError( 'bad' ) );
//       }
//     } )
//     .catch( ( error ) => {
//       throw error;
//     } );

export const loginUser = creds => ( dispatch ) => {
  localStorage.setItem( 'id_token', v4() );
  dispatch( receiveLogin( creds ) );
};

export const logoutUser = () => ( dispatch ) => {
  dispatch( requestLogout() );
  localStorage.removeItem( 'id_token' );
  dispatch( receiveLogout() );
};
