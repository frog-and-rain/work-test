import React from 'react';
import {
  Grid, TableView, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import InputText from 'App/components/InputText';
import { toastr } from "react-redux-toastr";
import Action from './Action';
import Box from 'App/components/Box';

const generateRows = (user, editing, setFirstName, setLastName) => {
  if (!Array.isArray(user)) {
    return null;
  }
  return user.map(item => (editing ? {
    ...item,
    firstName: <InputText value={item.firstName} onChange={setFirstName} info={item} />,
    lastName: <InputText value={item.lastName} onChange={setLastName} info={item} />
  } : item));
};

const validate = (data) => {
  const itemFail = data.find(item => !item.firstName || !item.lastName);

  if (itemFail) {
    if (!itemFail.firstName) {
      return `First name can't be blank`;
    }
    if (!itemFail.lastName) {
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
      users: props.users,
    };

    this.onEditing = this.onEditing.bind(this);
    this.closeEditing = this.closeEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
  }

  setFirstName(data) {
    const user = this.state.users.find(item => item.id === data.id);
    user.firstName = data.value;
    const newUsers = this.state.users.map(item => (item.id === data.id ? user : item));
    this.setState({ users: newUsers });
  }

  setLastName(data) {
    const user = this.state.users.find(item => item.id === data.id);
    user.lastName = data.value;
    const newUsers = this.state.users.map(item => (item.id === data.id ? user : item));
    this.setState({ users: newUsers });
  }

  onEditing() {
    this.current = this.state.users.map(item => ({...item}));
    this.setState({ editing: true });
  }

  closeEditing() {
    this.setState({ users: this.current, editing: false });
  }

  handleUpdate() {
    const { updateInfo } = this.props;
    const message = validate(this.state.users);
    if (message) {
      toastr.error('Error', message);
    } else {
      updateInfo(this.state.users);
      this.setState({ editing: false });
    }
  }

  render() {
    const rows = generateRows(this.state.users, this.state.editing, this.setFirstName, this.setLastName);
    const ActionRight = (
      <Action
        handleUpdate={this.handleUpdate} onEditing={this.onEditing}
        closeEditing={this.closeEditing} editing={this.state.editing}
      />
    );
    return (
      <Box title="Profile" action={ActionRight}>
        <Grid
          rows={rows}
          columns={[
            { name: 'firstName', title: 'First name' },
            { name: 'lastName', title: 'Last Name' },
            { name: 'role', title: 'Role' },
            { name: 'emailAddress', title: 'Email address' },
          ]}>
          <TableView />
          <TableHeaderRow />
        </Grid>
      </Box>
    );
  }
}

export default TableInfo;