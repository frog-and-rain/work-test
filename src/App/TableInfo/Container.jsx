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
  const { classes, onEditing, editing, handleUpdate } = props;

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
            <BlockButton onClick={onEditing}>
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
  constructor(props, context) {
    super(props, context);

    this.state = {
      editing: false,
    };

    this.onEditing = this.onEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  onEditing() {
    this.setState({ editing: !this.state.editing });
  }

  handleUpdate() {
    console.log(this.props.updateInfo);
  }

  render() {
    const { classes, users } = this.props;

    return (
      <Paper className={classes.root}>
        <TableInfoToolbar handleUpdate={this.handleUpdate} onEditing={this.onEditing} editing={this.state.editing} />

        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableInfoHead />
            <TableBody>
              {users.map(n => {
                return (
                  <TableRow
                    tabIndex={-1}
                    key={n.emailAddress}
                  >
                    <TableCell>
                      {this.state.editing ? (
                        <InputText type='text' value={n.firstName} />
                      ) : (
                        n.firstName
                      )}
                    </TableCell>
                    <TableCell>
                      {this.state.editing ? (
                        <InputText type='text' value={n.lastName} />
                      ) : (
                        n.lastName
                      )}
                    </TableCell>
                    <TableCell>{n.role}</TableCell>
                    <TableCell>{n.emailAddress}</TableCell>
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