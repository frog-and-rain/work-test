import React from 'react';
import T from 'prop-types';
import { withStyles } from 'material-ui/styles';
import InputText from 'App/components/InputText';

const styles = {
  vertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#676a6c',
  }
};

const Field = ({ classes, title, type, vertical }) => (
  <div className={vertical ? classes.vertical : classes.horizontal}>
    <label className={classes.title}>{title}</label>
    <InputText type={type} />
  </div>
);

Field.propTypes = {
  classes: T.object.isRequired,
  title: T.string,
  type: InputText.propTypes.type,
  vertical: T.bool.isRequired,
};

export default withStyles(styles)(Field);