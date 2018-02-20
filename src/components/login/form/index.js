import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
} );

class LoginForm extends React.Component {
  state = {
    password: '',
    showPassword: false,
  };

  handleChange = prop => ( event ) => {
    this.setState( { [ prop ]: event.target.value } );
  };

  handleMouseDownPassword = ( event ) => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState( { showPassword: !this.state.showPassword } );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange( 'username' )}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange( 'password' )}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={this.handleClickShowPasssword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl>
          <Button variant="raised" color="primary" className={classes.button}>
            Primary
          </Button>
        </FormControl>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( LoginForm );
