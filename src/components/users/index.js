import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Fade from 'material-ui/transitions/Fade';
import PeopleIcon from 'material-ui-icons/People';
import Table from './table';
import styles from './styles';

function Index( props ) {
  const {
    classes, users, deleteUser, editUser,
  } = props;

  return (
    <div>
      <Fade in>
        <Card className={classes.card}>
          <CardHeader
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
            <Table users={users} deleteUser={deleteUser} editUser={editUser} />
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};

export default withStyles( styles )( Index );
