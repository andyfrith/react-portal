import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Header from '../header';
import Login from '../login/';
import withRoot from '../../withRoot';

const styles = theme => ( {
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
} );

function App( { classes } ) {
  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <Login />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot( withStyles( styles, { withTheme: true } )( App ) );
