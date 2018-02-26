import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Fade from 'material-ui/transitions/Fade';
import PeopleIcon from 'material-ui-icons/People';
import GridOn from 'material-ui-icons/GridOn';
import ViewModule from 'material-ui-icons/ViewModule';
import Table from './table';
import List from './list';
import styles from './styles';

class Users extends React.Component {
  state = {
    display: 'list',
  };

  render() {
    const toggleDisplay = () => {
      this.setState( {
        display: this.state.display === 'table' ? 'list' : 'table',
      } );
    };

    const {
      classes, users, deleteUser, editUser,
    } = this.props;

    return (
      <div>
        <Fade in>
          <Card className={classes.card}>
            <CardHeader
              action={
                <IconButton color="inherit">
                  {this.state.display === 'list' ? (
                    <GridOn onClick={toggleDisplay} />
                  ) : (
                    <ViewModule onClick={toggleDisplay} />
                  )}
                </IconButton>
              }
              avatar={
                <Avatar aria-label="Users">
                  <PeopleIcon />
                </Avatar>
              }
              className={classes.cardHeader}
              classes={{
                title: classes.cardTitle,
                subheader: classes.cardSubheader,
              }}
              title="Users"
            />
            <CardContent>
              {this.state.display === 'list' ? (
                <List
                  users={users}
                  deleteUser={deleteUser}
                  editUser={editUser}
                />
              ) : (
                <Table
                  users={users}
                  deleteUser={deleteUser}
                  editUser={editUser}
                />
              )}
            </CardContent>
          </Card>
        </Fade>
      </div>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};

export default withStyles( styles )( Users );
