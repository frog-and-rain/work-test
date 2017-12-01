import T from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import Field from 'App/components/Field';

const ButtonSubmit = styled.button`
  margin-top: 20px;
  width: 100px;
  background-color: #23c6c8;
  border-color: #23c6c8;
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
  background-image: none;
  border: 1px solid transparent;
  white-space: normal !important;
  max-width: 100%;
  &:hover {
    background-color: #21b9bb;
  }
`;

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25px',
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

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h3 className={classes.h3}>Change password</h3>
        <form className={classes.form}>
          <Field vertical title="Old password" type="password" />
          <Field vertical title="New password" type="password" />
          <Field vertical title="Confirm password" type="password" />
          <ButtonSubmit>Submit</ButtonSubmit>
        </form>
      </div>
    );
  }
}

UpdateForm.propTypes = {
  classes: T.object.isRequired,
};

export default withStyles(styles)(UpdateForm);