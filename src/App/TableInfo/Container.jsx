import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import InputText from 'App/components/InputText';

const columnData = [
  { id: 'firstName', numeric: false, disablePadding: false, label: 'First name' },
  { id: 'lastName', numeric: false, disablePadding: false, label: 'Last name' },
  { id: 'role', numeric: false, disablePadding: false, label: 'Role' },
  { id: 'emailAddress', numeric: false, disablePadding: false, label: 'Email address' },
];

const TableInfoHead  = () => (
  <TableHead>
    <TableRow>
      {columnData.map(column => {
        return (
          <TableCell
            key={column.id}
            numeric={column.numeric}
            padding={column.disablePadding ? 'none' : 'default'}
          >
            {column.label}
          </TableCell>
        );
      }, this)}
    </TableRow>
  </TableHead>
);


const toolbarStyles = theme => ({
  root: {
    borderColor: '#e7eaec',
    borderWidth: '3px 0 0',
    color: 'inherit',
    marginBottom: 0,
    padding: '14px 15px 7px',
    minHeight: '48px',
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '10px',
  },
  title: {
    flex: '0 0 auto',
  },
});

let TableInfoToolbar = props => {
  const { classes, onEditing, editing, handleUpdate, closeEditing } = props;

  const ButtonIcon = styled.button`
    font-size: 13px;
    padding: 1px 5px;
    border: 1px solid;
    border-radius: 3px;
    margin-right: 6px;
    background-color: #ffffff;
    transition: all 0.5s;
    display: flex;
    flex-direction: row;
    alight-item: center;
    justify-content: center;
    cursor: pointer;
  `;

  const BlockButton = ButtonIcon.extend`
    color: darkorange;
    border-color: darkorange;
    
    &:hover {
      background-color: darkorange;
      color: #ffffff;
    }
  `;

  const SaveButton = ButtonIcon.extend`
    color: mediumseagreen;
    border-color: mediumseagreen;
    
    &:hover {
      background-color: mediumseagreen;
      color: #ffffff;
    }
  `;

  const EditButton = ButtonIcon.extend`
    color: royalblue;
    border-color: royalblue;
    
    &:hover {
      background-color: royalblue;
      color: #ffffff; 
    }
  `;

  return (
    <Toolbar
      className={classes.root}
    >
      <Typography type="title" color="inherit" className={classes.flex}>
        Profile
      </Typography>

      <div className={classes.spacer} />
      {
        !editing ? (
          <div className={classes.actions}>
            <EditButton onClick={onEditing}>
              Edit
            </EditButton>
          </div>
        ) : (
          <div className={classes.actions}>
            <BlockButton onClick={closeEditing}>
              Cancel
            </BlockButton>

            <SaveButton onClick={handleUpdate}>
              Save
            </SaveButton>

          </div>
        )
      }
    </Toolbar>
  );
};

TableInfoToolbar.propTypes = {
  classes: T.object.isRequired,
  onEditing: T.func.isRequired,
  closeEditing: T.func.isRequired,
  handleUpdate: T.func.isRequired,
  editing: T.bool.isRequired,
};

TableInfoToolbar = withStyles(toolbarStyles)(TableInfoToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
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
        <TableInfoToolbar
          handleUpdate={this.handleUpdate}
          onEditing={this.onEditing}
          closeEditing={this.closeEditing}
          editing={this.state.editing}
        />

        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableInfoHead />
            <TableBody>
              {this.state.users.map(item => {
                return (
                  <TableRow
                    tabIndex={-1}
                    key={item.emailAddress}
                  >
                    <TableCell>
                      {this.state.editing ? (
                        <InputText type='text' value={item.firstName} onChange={this.setFirstName} info={item} />
                      ) : (
                        item.firstName
                      )}
                    </TableCell>
                    <TableCell>
                      {this.state.editing ? (
                        <InputText type='text' value={item.lastName} onChange={this.setLastName} info={item} />
                      ) : (
                        item.lastName
                      )}
                    </TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>{item.emailAddress}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
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