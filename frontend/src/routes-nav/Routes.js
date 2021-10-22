import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "../main/Main";
import Cart from "../cart/Cart";

const Routes = () => {
  return (
    // <div>
    //     <h1>Routes: Show contens depends on Route name</h1>
    // </div>

    <div className="pt-5">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>

        {/* <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route> */}

        {/* <PrivateRoute exact path="/">
            <CompanyList />
          </PrivateRoute>

          <PrivateRoute exact path="/jobs">
            <JobList />
          </PrivateRoute>

          <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <ProfileForm />
          </PrivateRoute> */}

        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
};

export default Routes;
