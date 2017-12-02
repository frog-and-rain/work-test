import T from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import Field from 'App/components/Field';
import Paper from 'material-ui/Paper';

const ButtonSubmit = styled.button`
  margin: 25px 0;
  width: 100px;
  background-color: #23c6c8;
  color: #FFFFFF;
  float: right;
  border-radius: 3px;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  white-space: normal !important;
  max-width: 100%;
  &:hover {
    background-color: #21b9bb;
  }
`;

const Error = styled.p`
  color: palevioletred;
  margin-top: 12px;
`;

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '25px 0',
  },
  form: {
    display: 'block',
    width: '33.33%',
    margin: '0 15px',
  },
  h3: {
    color: '#676a6c',
  }
};

const initialForm = {
  oldPassword: '',
  newPassword: '',
  cofPassword: '',
};

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { ...initialForm },
      error: '',
    };

    this.setForm = Object
      .keys(initialForm)
      .reduce((prev, key) => ({
        ...prev,
        [key]: this.setFormWKey.bind(this, key),
      }), {});

    this.submit = this.submit.bind(this);
  }

  setFormWKey(key, data) {
    const nextForm = { ...this.state.form, [key]: data.value };
    this.setState({ form: nextForm });
  }

  submit(e) {
    e.preventDefault();

    if (this.state.form.newPassword !== this.state.form.cofPassword) {
      this.setState({ error: 'new password not same !' });
    } else {
      // call API update password
      this.setState({ error: '' });
      console.log(this.state.form);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <h3 className={classes.h3}>Change password</h3>
        <form className={classes.form}>
          <Field
            vertical title="Old password" type="password"
            value={this.state.form.oldPassword} onChange={this.setForm.oldPassword}
          />
          <Field
            vertical title="New password" type="password"
            value={this.state.form.newPassword} onChange={this.setForm.newPassword}
          />
          <Field
            vertical title="Confirm password" type="password"
            value={this.state.form.cofPassword} onChange={this.setForm.cofPassword}
          />
          {this.state.error ? <Error>{this.state.error}</Error> : null}
          <ButtonSubmit onClick={this.submit}>Submit</ButtonSubmit>
        </form>
      </Paper>
    );
  }
}

UpdateForm.propTypes = {
  classes: T.object.isRequired,
};

export default withStyles(styles)(UpdateForm);