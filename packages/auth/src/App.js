import React from "react";
import { Switch, Route, Router } from "react-router-dom";
// not using BrowserRouter is bcz we are using menmory history in all the sub apps except container
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
}); // so that in production css random classname wont colide with others

export default ({ history, onSignIn }) => {
  // history is coming as prop
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn}/>
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
