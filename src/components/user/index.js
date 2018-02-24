import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Fade from 'material-ui/transitions/Fade';
import Form from './form';
import styles from './styles';

function Index( props ) {
  const { classes } = props;

  return (
    <div>
      <Fade in>
        <Card className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            classes={{
              title: classes.cardTitle,
              subheader: classes.cardSubheader,
            }}
            title="User"
          />
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Fade>
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( Index );
