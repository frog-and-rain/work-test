import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {Provider} from "react-redux";
import { store } from 'store';

import Profile from './Profile';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Profile} />
    </Router>
  </Provider>
);

export default App;