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
      toastr.error('Error', 'please verify passwords match !');
    } else {
      // call API update password
      toastr.success('Success', 'Password has updated !');
    }
  }

  render() {
    return (
      <Box title="Change password">
        <Form form={this.state.form} setForm={this.setForm} submit={this.submit} />
      </Box>
    );
  }
}

export default UpdateForm;