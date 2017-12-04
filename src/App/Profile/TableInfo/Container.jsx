import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {
  Grid, TableView, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import InputText from 'App/components/InputText';
import Toolbar from './Toolbar/index';

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

const styles = theme => ({
  root: {
    width: '100%',
  },
});

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
    updateInfo(this.state.users);
    this.setState({ editing: false });
  }

  render() {
    const { classes } = this.props;
    const rows = generateRows(this.state.users, this.state.editing, this.setFirstName, this.setLastName);
    return (
      <Paper className={classes.root}>
        <Toolbar
          handleUpdate={this.handleUpdate}
          onEditing={this.onEditing}
          closeEditing={this.closeEditing}
          editing={this.state.editing}
        />
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
      </Paper>
    );
  }
}

export default withStyles(styles)(TableInfo);