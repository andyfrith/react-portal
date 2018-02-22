import * as types from '../actions/actionTypes';

const selectedUserReducer = ( state = null, action ) => {
  switch ( action.type ) {
    case types.SELECT_USER:
      return action.user;
    default:
      return state;
  }
};

export default selectedUserReducer;
