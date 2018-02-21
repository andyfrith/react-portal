import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
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
    username: '',
    password: '',
    showPassword: false,
    usernameValid: true,
    passwordValid: true,
  };

  onSubmit = ( e ) => {
    e.preventDefault();

    const isUsernameValid = this.state.username;
    const isPasswordValid = this.state.password;

    if ( isUsernameValid && isPasswordValid ) {
      this.setState( {
        usernameValid: isUsernameValid,
        passwordValid: isPasswordValid,
        username: '',
        password: '',
      } );
    } else {
      this.setState( {
        usernameValid: isUsernameValid,
        passwordValid: isPasswordValid,
      } );
    }
  };

  onChange = ( e ) => {
    this.setState( {
      [ e.target.name ]: e.target.value,
      [ `${ e.target.name }Valid` ]: e.target.value,
    } );
  };

  onMouseDownPassword = ( e ) => {
    e.preventDefault();
  };

  onClickShowPasssword = () => {
    this.setState( { showPassword: !this.state.showPassword } );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={e => this.onChange( e )}
          />
          <FormHelperText
            id="username-helper-text"
            error={!this.state.usernameValid}
          >
            {this.state.usernameValid ? '' : 'Username is missing'}
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} required>
          <InputLabel htmlFor="username">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={e => this.onChange( e )}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={e => this.onClickShowPasssword( e )}
                  onMouseDown={e => this.onMouseDownPassword( e )}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            id="password-helper-text"
            error={!this.state.passwordValid}
          >
            {this.state.passwordValid ? '' : 'Password is missing'}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <Button
            disabled={!this.state.usernameValid || !this.state.passwordValid}
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={e => this.onSubmit( e )}
          >
            Login
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
