import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions';
import User from '../../components/user';

const UserContainer = ( { match, selectedUser, createUserConnect } ) => (
  <User
    selectedUser={selectedUser}
    createUser={createUserConnect}
    isEditing={!!match.params.id}
  />
);

UserContainer.defaultProps = {
  selectedUser: null,
};

UserContainer.propTypes = {
  createUserConnect: PropTypes.func.isRequired,
  selectedUser: PropTypes.object,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ( {
  selectedUser: state.selectedUser,
} );

export default connect( mapStateToProps, { createUserConnect: createUser } )( UserContainer );
