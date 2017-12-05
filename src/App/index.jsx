import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from "react-redux";
import ReduxToastr from 'react-redux-toastr';
import { store } from 'store';

import Profile from './Profile';

const App = () => (
  <Provider store={store}>
    <div>
      <Router>
        <Route exact path="/" component={Profile} />
      </Router>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
      />
    </div>
  </Provider>
);

export default App;