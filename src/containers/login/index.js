import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authenticationActions';
import LoginForm from '../../components/login/form/';

const LoginContainer = ( { loginUserConnect } ) => (
  <LoginForm onLogin={creds => loginUserConnect( creds )} />
);

LoginContainer.propTypes = {
  loginUserConnect: PropTypes.func.isRequired,
};

export default connect( null, { loginUserConnect: loginUser } )( LoginContainer );
