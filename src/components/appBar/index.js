import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { logoutUser } from '../../actions/authenticationActions';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const TheAppBar = ( { classes, logoutUserConnect, isAuthenticated } ) => (
  <div className={classes.root}>
    <AppBar position="static">
      {isAuthenticated && (
        <Toolbar>
          <Button
            onClick={( e ) => {
              e.preventDefault();
              logoutUserConnect();
            }}
          >
            Logout
          </Button>
          <Link to="/users">
            <Button>Show Users</Button>
          </Link>
        </Toolbar>
      )}
    </AppBar>
  </div>
);

TheAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUserConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ( {
  isAuthenticated: state.authentication.isAuthenticated,
} );

export default withStyles( styles )( connect( mapStateToProps, {
  logoutUserConnect: logoutUser,
} )( TheAppBar ) );
