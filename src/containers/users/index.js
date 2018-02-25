import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { deleteUser, selectUser } from '../../actions/userActions';
import Users from '../../components/users';

class UsersContainer extends React.Component {
  state = {
    dialogOpen: false,
    selectedUser: {},
  };

  render() {
    const { users, deleteUserConnect, selectUserConnect } = this.props;

    const handleDeleteUser = ( user ) => {
      this.setState( { dialogOpen: true, selectedUser: user } );
    };

    const handleEditUser = ( user ) => {
      this.setState( { selectedUser: user } );
      selectUserConnect( user );
    };

    const handleClose = () => {
      this.setState( { dialogOpen: false, selectedUser: {} } );
    };

    const handleDeleteUserConfirmed = () => {
      deleteUserConnect( this.state.selectedUser );
      handleClose();
    };

    return users.length > 0 ? (
      <div>
        <Dialog
          open={this.state.dialogOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Delete {this.state.selectedUser.display_name}?{' '}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The user will be marked inactive.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteUserConfirmed} color="primary">
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
        <Users
          users={users}
          deleteUser={handleDeleteUser}
          editUser={handleEditUser}
        />
      </div>
    ) : (
      <p>No Users!</p>
    );
  }
}

UsersContainer.propTypes = {
  users: PropTypes.arrayOf( PropTypes.shape( {
    user_id: PropTypes.string.isRequired,
    display_name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  } ) ).isRequired,
  deleteUserConnect: PropTypes.func.isRequired,
  selectUserConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  users: state.users,
} );

export default connect( mapStateToProps, {
  deleteUserConnect: deleteUser,
  selectUserConnect: selectUser,
} )( UsersContainer );
