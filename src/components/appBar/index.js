import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Fade from 'material-ui/transitions/Fade';
import { logoutUser } from '../../actions/authenticationActions';

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  toolbar: {
    justifyContent: 'flex-end',
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TheAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = ( event ) => {
    this.setState( { anchorEl: event.currentTarget } );
  };

  handleClose = () => {
    this.setState( { anchorEl: null } );
  };

  handleLogout = () => {
    this.setState( { anchorEl: null } );
    this.props.logoutUserConnect();
  };

  render() {
    const { classes, isAuthenticated } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean( anchorEl );
    const usersLink = props => <Link to="/users" {...props} />;

    if ( !isAuthenticated ) {
      return null;
    }

    return (
      <div className={classes.root}>
        <Fade in>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Button color="inherit" component={usersLink}>
                Show Users
              </Button>
              {this.props.isAuthenticated && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Fade>
      </div>
    );
  }
}

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
