import * as types from '../actions/actionTypes';

const notificationsReducer = (
  state = {
    message: '',
  },
  action,
) => {
  switch ( action.type ) {
    case types.NOTIFY_USER:
      return Object.assign( {}, state, {
        message: action.message,
      } );
    case types.CLEAR_NOTIFICATION:
      return Object.assign( {}, state, {
        message: '',
      } );
    default:
      return state;
  }
};

export default notificationsReducer;
