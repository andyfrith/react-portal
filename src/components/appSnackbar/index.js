import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

class AppSnackbar extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState( { open: false } );
  };

  handleClose = ( event, reason ) => {
    if ( reason === 'clickaway' ) {
      return;
    }

    this.setState( { open: false } );
    this.props.clearNotification();
  };

  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        open={this.state.open}
        onClose={this.handleClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{this.props.message}</span>}
      />
    );
  }
}

AppSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  clearNotification: PropTypes.func.isRequired,
};

export default AppSnackbar;
