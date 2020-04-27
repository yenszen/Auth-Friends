import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import FriendsList from "./FriendsList";

const App = () => {
  return (
    <Router>
      <div className="ui container">
        <div className="ui secondary pointing menu">
          <Link className="item" to="/login">
            Login
          </Link>
          <Link className="item" to="/protected">
            Friends List
          </Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
