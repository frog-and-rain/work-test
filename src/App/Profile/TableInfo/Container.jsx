import React from 'react';
import InputText from 'App/components/InputText';
import { toastr } from "react-redux-toastr";
import Action from './Action';
import Box from 'App/components/Box';
import { Container, Label, Form } from './components.styled';

const Field = ({ title, value, onChange, editing, edit }) => {
  return (
    <Container>
      <Label>{title}</Label>
      {!(editing && edit) ? value : <InputText value={value} onChange={onChange} />}
    </Container>
  );
};

const validate = (user) => {
  if (user) {
    if (!user.firstName) {
      return `First name can't be blank`;
    }
    if (!user.lastName) {
      return `Last name can't be blank`;
    }
  }
  return '';
};

class TableInfo extends React.Component {
  constructor(props) {
    super(props);
    this.current = null;
    this.state = {
      editing: false,
      user: props.user,
    };

    this.onEditing = this.onEditing.bind(this);
    this.closeEditing = this.closeEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
  }

  setFirstName(data) {
    const newUser = { ...this.state.user, firstName: data.value };
    this.setState({ user: newUser });
  }

  setLastName(data) {
    const newUser = { ...this.state.user, lastName: data.value };
    this.setState({ user: newUser });
  }

  onEditing() {
    this.current = this.state.user;
    this.setState({ editing: true });
  }

  closeEditing() {
    this.setState({ user: this.current, editing: false });
  }

  handleUpdate() {
    const { updateInfo } = this.props;
    const message = validate(this.state.user);
    if (message) {
      toastr.error('Error', message);
    } else {
      updateInfo(this.state.user);
      this.setState({ editing: false });
    }
  }

  render() {
    const ActionRight = (
      <Action
        handleUpdate={this.handleUpdate} onEditing={this.onEditing}
        closeEditing={this.closeEditing} editing={this.state.editing}
      />
    );
    return (
      <Box title="Profile" action={ActionRight}>
        <Form>
          <Field title="First name" edit editing={this.state.editing} value={this.state.user.firstName} onChange={this.setFirstName} />
          <Field title="Last name" edit editing={this.state.editing} value={this.state.user.lastName} onChange={this.setLastName} />
          <Field title="Role" editing={this.state.editing} value={this.state.user.role} />
          <Field title="Email address" editing={this.state.editing} value={this.state.user.emailAddress} />
        </Form>
      </Box>
    );
  }
}

export default TableInfo;