import React, {lazy, Suspense, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingLay = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
//console.log(mount);

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {

const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn ={() => setIsSignedIn(true)}/>
            </Route>
            <Route path="/" component={MarketingLay}/>
          </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
