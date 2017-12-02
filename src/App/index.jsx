import React from 'react';
import T from 'prop-types';
import Grid from 'material-ui/Grid';
import {Provider} from "react-redux";
import { store } from 'store';
import TableInfo from './TableInfo';
import UpdateForm from './UpdateForm';
import BarInfo from './BarInfo';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
});

const App = ({ classes }) => (
  <Provider store={store}>
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
  </Provider>
);

App.propTypes = {
  classes: T.object.isRequired,
};

export default withStyles(styles)(App);