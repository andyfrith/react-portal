import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Fade from 'material-ui/transitions/Fade';
import LoginContainer from '../../containers/login/';
import styles from './styles';

function Login( props ) {
  const { classes, isAuthenticated } = props;

  if ( isAuthenticated ) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <Fade in>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            classes={{
              title: classes.cardTitle,
              subheader: classes.cardSubheader,
            }}
            title="Login"
            subheader="Please login to administer users."
          />
          <CardContent>
            <LoginContainer />
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withStyles( styles )( Login );
