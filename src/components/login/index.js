import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import LoginForm from './form';
import styles from './styles';

function Login( props ) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          classes={{
            title: classes.cardTitle,
            subheader: classes.cardSubheader,
          }}
          title="Login"
          subheader="Subheader"
        />
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( Login );
