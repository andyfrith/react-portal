import React from 'react';
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

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Login />
    </div>
  );
}

export default withRoot( withStyles( styles, { withTheme: true } )( App ) );
