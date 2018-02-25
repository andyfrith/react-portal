import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser, selectUser } from '../../actions/userActions';
import Users from '../../components/users';

const UsersContainer = ( { users, deleteUserConnect } ) =>
  ( users.length > 0 ? (
    <Users users={users} deleteUser={deleteUserConnect} />
  ) : (
    <p>No Users!</p>
  ) );

UsersContainer.propTypes = {
  users: PropTypes.arrayOf( PropTypes.shape( {
    user_id: PropTypes.string.isRequired,
    display_name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  } ) ).isRequired,
  deleteUserConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  users: state.users,
} );

export default connect( mapStateToProps, {
  deleteUserConnect: deleteUser,
  selectUserConnect: selectUser,
} )( UsersContainer );
