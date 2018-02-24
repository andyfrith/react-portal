import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Header from '../../components/header';
import Login from '../../components/login/';
import User from '../../components/user';
import Users from '../../containers/users';
import withRoot from '../../withRoot';
import ProtectedRoute from './ProtectedRoute';

const styles = theme => ( {
  root: {
    textAlign: 'center',
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
      <ProtectedRoute
        path="/user"
        exact
        component={User}
        isAuthenticated={isAuthenticated}
      />
      <Route
        path="/login"
        exact
        render={() => <Login isAuthenticated={isAuthenticated} />}
      />
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

const routedComp = withRouter( connect( mapStateToProps )( App ) );

export default withRoot( withStyles( styles, { withTheme: true } )( routedComp ) );
