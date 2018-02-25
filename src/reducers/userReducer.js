import * as types from '../actions/actionTypes';

const userReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case types.LOAD_USERS_SUCCESS:
      return Object.assign( [], state, action.users );

    case types.UPDATE_USER_SUCCESS:
      return [
        ...state.filter( user => user.user_id !== action.user.user_id ),
        Object.assign( {}, action.user ),
      ];

    case types.CREATE_USER_SUCCESS:
      return [
        ...state.filter( user => user.user_id !== action.user.user_id ),
        Object.assign( {}, action.user ),
      ];

    case types.DELETE_USER_SUCCESS:
      return [
        ...state.slice(
          0,
          state.findIndex( user => user.user_id === action.user.user_id ),
        ),
        ...state.slice( state.findIndex( user => user.user_id === action.user.user_id ) + 1 ),
      ];

    default:
      return state;
  }
};

export default userReducer;
