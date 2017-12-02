import React from 'react';
import T from 'prop-types';
import Table from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Toolbar from './Toolbar';
import Header from './Header';
import Body from './Body';

const styles = theme => ({
  root: {
    width: '100%',
  },
  table: {
    width: '100%',
  },
  tableWrapper: {
    overflowX: 'auto',
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

    return (
      <Paper className={classes.root}>
        <Toolbar
          handleUpdate={this.handleUpdate}
          onEditing={this.onEditing}
          closeEditing={this.closeEditing}
          editing={this.state.editing}
        />

        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <Header />
            <Body
              users={this.state.users} editing={this.state.editing}
              setFirstName={this.setFirstName} setLastName={this.setLastName}
            />
          </Table>
        </div>
      </Paper>
    );
  }
}

TableInfo.propTypes = {
  classes: T.object.isRequired,
  users: T.array.isRequired,
};

export default withStyles(styles)(TableInfo);