import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Table from './table';
import styles from './styles';

function Index( props ) {
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
          title="Users"
        />
        <CardContent>
          <Table />
        </CardContent>
      </Card>
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( Index );
