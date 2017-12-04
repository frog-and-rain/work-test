import React from 'react';

import TableInfo from './TableInfo';
import UpdateForm from './UpdateForm';
import BarInfo from './BarInfo';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Profile = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <BarInfo />
      </Grid>

      <Grid item xs={12}>
        <TableInfo />
      </Grid>

      <Grid item xs={12}>
        <UpdateForm />
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Profile);