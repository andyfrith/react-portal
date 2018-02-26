import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearNotification } from '../../actions/notificationActions';
import AppSnackbar from '../../components/appSnackbar';

const NotificationsContainer = ( { message, clearNotificationConnect } ) =>
  ( message !== '' ? (
    <AppSnackbar
      clearNotification={clearNotificationConnect}
      message={message}
    />
  ) : null );

NotificationsContainer.defaultProps = {
  message: '',
};

NotificationsContainer.propTypes = {
  message: PropTypes.string,
  clearNotificationConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  message: state.notifications.message,
} );

export default connect( mapStateToProps, {
  clearNotificationConnect: clearNotification,
} )( NotificationsContainer );
