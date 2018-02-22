import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Header from '../header';
import Login from '../login/';
import Users from '../users';
import withRoot from '../../withRoot';
import ProtectedRoute from './ProtectedRoute';

const styles = theme => ( {
  root: {
    textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
} );

function App( { classes, isAuthenticated } ) {
  return (
    <div className={classes.root}>
      <Header />
      <ProtectedRoute
        path="/"
        exact
        component={Users}
        isAuthenticated={isAuthenticated}
      />
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

const mapStateToProps = state => ( {
  isAuthenticated: state.authentication.isAuthenticated,
} );

export default withRoot( withStyles( styles, { withTheme: true } )( connect( mapStateToProps )( App ) ) );
