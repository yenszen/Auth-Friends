import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import FriendsList from "./FriendsList";
import Logout from "./Logout";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends List</Link>
          <Logout />
        </nav>
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
