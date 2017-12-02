import React from 'react';
import T from 'prop-types';
import { withStyles } from 'material-ui/styles';
import InputText from 'App/components/InputText';

const styles = {
  vertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  horizontal: {},
  title: {
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#676a6c',
  }
};

const Field = ({ classes, title, type, vertical, value, onChange }) => (
  <div className={vertical ? classes.vertical : classes.horizontal}>
    <label className={classes.title}>{title}</label>
    <InputText type={type} onChange={onChange} value={value} />
  </div>
);

Field.propTypes = {
  classes: T.object.isRequired,
  title: T.string,
  vertical: T.bool.isRequired,
  ...InputText.propTypes,
};

export default withStyles(styles)(Field);