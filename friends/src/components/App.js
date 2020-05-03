import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import FriendsList from "./FriendsList";
import PrivateRoute from "./PrivateRoute";
// import UpdateForm from "./UpdateForm";

const App = () => {
  return (
    <Router>
      <div>
        <nav
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Link to="/">Login</Link>
          <Link to="/protected">Friends List</Link>
        </nav>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={FriendsList} />
        {/* <Route path="/update-form/:id" component={UpdateForm} /> */}
      </div>
    </Router>
  );
};

export default App;
