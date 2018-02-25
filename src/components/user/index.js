import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import Fade from 'material-ui/transitions/Fade';
import Form from './form';
import styles from './styles';

function Index( props ) {
  const {
    classes, createUser, selectedUser, isEditing,
  } = props;

  return (
    <div>
      <Fade in>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Users">
                <PersonAddIcon />
              </Avatar>
            }
            className={classes.cardHeader}
            classes={{
              title: classes.cardTitle,
              subheader: classes.cardSubheader,
            }}
            title="User"
          />
          <CardContent>
            <Form
              createUser={createUser}
              selectedUser={selectedUser}
              isEditing={isEditing}
            />
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default withStyles( styles )( Index );
