import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
// import Header from '../header';
import Login from '../login/';
import Users from '../users';
import withRoot from '../../withRoot';
import ProtectedRoute from './ProtectedRoute';

const styles = theme => ( {
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
} );

function App( { classes, isAuthenticated } ) {
  return (
    <div className={classes.root}>
      {/* <Header /> */}
      <ProtectedRoute
        path="/users"
        exact
        component={Users}
        isAuthenticated={isAuthenticated}
      />
      <Route path="/login" exact component={Login} />
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withRoot( withStyles( styles, { withTheme: true } )( App ) );
