import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import '../src/styles/style.css';
import { isAuthenticated } from "./services/auth";
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Home = React.lazy(() => import("./pages/Home"));

const loading = () => <div className={"empty"}></div>;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" exact={true} component={SignIn} />
          <Route path="/login" exact={true} component={SignIn} />
          <PrivateRoute path="/home" exact={true} component={Home} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}
