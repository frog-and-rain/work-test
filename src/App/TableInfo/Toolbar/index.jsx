import T from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

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

const ToolbarProfile = props => {
  const { classes, onEditing, editing, handleUpdate, closeEditing } = props;

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

ToolbarProfile.propTypes = {
  classes: T.object.isRequired,
  onEditing: T.func.isRequired,
  closeEditing: T.func.isRequired,
  handleUpdate: T.func.isRequired,
  editing: T.bool.isRequired,
};

export default withStyles(toolbarStyles)(ToolbarProfile);
