import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { createMuiTheme, withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import Table from '../components/table';
import IconLabelButtons from '../components/user/form/IconLabelButtons';

// const theme = createMuiTheme( {
//   root: {
//     textAlign: 'center',
//     paddingTop: theme.spacing.unit * 20,
//   },
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// } );

const styles = theme => ( {
  root: {
    textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
} );

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState( {
      open: false,
    } );
  };

  handleClick = () => {
    this.setState( {
      open: true,
    } );
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Table />
        <IconLabelButtons />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot( withStyles( styles )( Index ) );
