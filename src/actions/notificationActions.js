import * as types from './actionTypes';

const notifyUser = message => ( {
  type: types.NOTIFY_USER,
  message,
} );

export const clearNotification = message => ( {
  type: types.CLEAR_NOTIFICATION,
  message,
} );

export default notifyUser;
