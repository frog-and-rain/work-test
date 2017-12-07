import React from 'react';
import { toastr } from "react-redux-toastr";
import Box from 'App/components/Box';
import Form from './Form';


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
      this.setState({ error: 'please verify passwords match !'});
    } else {
      // call API update password
      console.log(this.state.form);
      toastr.success('Success', 'Password has updated !');
    }
  }

  render() {
    return (
      <Box title="Change password">
        <Form error={this.state.error} form={this.state.form} setForm={this.setForm} submit={this.submit} />
      </Box>
    );
  }
}

export default UpdateForm;