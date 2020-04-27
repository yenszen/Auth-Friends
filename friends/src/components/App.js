import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import FriendsList from "./FriendsList";
import Logout from "./Logout";

const App = () => {
  return (
    <Router>
      <div className="ui container">
        <div className="ui top attached tabular menu">
          <Link className="item" to="/login">
            Login
          </Link>
          <Link className="item" to="/protected">
            Friends List
          </Link>
          <div className="right menu">
            <div className="item">
              <Logout />
            </div>
          </div>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
