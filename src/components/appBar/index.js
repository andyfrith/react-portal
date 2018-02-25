import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import PeopleIcon from 'material-ui-icons/People';
import FileUploadIcon from 'material-ui-icons/FileUpload';
import ExitToAppIcon from 'material-ui-icons/ExitToApp';
import Fade from 'material-ui/transitions/Fade';

const styles = theme => ( {
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
  primary: {},
  icon: {},
} );

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

  handleLoadUsers = () => {
    this.setState( { anchorEl: null } );
    this.props.loadUsers();
  };

  handleLogout = () => {
    this.setState( { anchorEl: null } );
    this.props.logoutUser();
  };

  render() {
    const { classes, isAuthenticated } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean( anchorEl );
    const usersLink = props => <Link to="/users" {...props} />;
    const userLink = props => <Link to="/user" {...props} />;

    if ( !isAuthenticated ) {
      return null;
    }

    return (
      <div className={classes.root}>
        <Fade in>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
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
                    <MenuItem onClick={this.handleClose} component={userLink}>
                      <ListItemIcon className={classes.icon}>
                        <PersonAddIcon />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.primary }}
                        inset
                        primary="Add User"
                      />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose} component={usersLink}>
                      <ListItemIcon className={classes.icon}>
                        <PeopleIcon />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.primary }}
                        inset
                        primary="Show Users"
                      />
                    </MenuItem>
                    <MenuItem onClick={this.handleLoadUsers}>
                      <ListItemIcon className={classes.icon}>
                        <FileUploadIcon />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.primary }}
                        inset
                        primary="Load Users"
                      />
                    </MenuItem>
                    <MenuItem onClick={this.handleLogout}>
                      <ListItemIcon className={classes.icon}>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.primary }}
                        inset
                        primary="Logout"
                      />
                    </MenuItem>
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
  logoutUser: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

export default withStyles( styles )( TheAppBar );
