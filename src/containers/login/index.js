import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authenticationActions';
import Login from '../../components/login/';

const LoginContainer = ( { isAuthenticated, loginUserConnect } ) => (
  <Login
    isAuthenticated={isAuthenticated}
    onLogin={creds => loginUserConnect( creds )}
  />
);

LoginContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loginUserConnect: PropTypes.func.isRequired,
};

export default connect( null, { loginUserConnect: loginUser } )( LoginContainer );
