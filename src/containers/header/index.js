import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authenticationActions';
import { loadUsers } from '../../actions/userActions';
import AppBar from '../../components/appBar';

const HeaderContainer = ( {
  isAuthenticated,
  logoutUserConnect,
  loadUsersConnect,
} ) => (
  <AppBar
    isAuthenticated={isAuthenticated}
    logoutUser={logoutUserConnect}
    loadUsers={loadUsersConnect}
  />
);

HeaderContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUserConnect: PropTypes.func.isRequired,
  loadUsersConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  isAuthenticated: state.authentication.isAuthenticated,
} );

export default connect( mapStateToProps, {
  logoutUserConnect: logoutUser,
  loadUsersConnect: loadUsers,
} )( HeaderContainer );
