import React from 'react';
import Grid from 'material-ui/Grid';
import {Provider} from "react-redux";
import { store } from 'store';
import TableInfo from './TableInfo';
import UpdateForm from './UpdateForm';
import BarInfo from './BarInfo';

const App = (props) => (
  <Provider store={store}>
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
  </Provider>
);

export default App;