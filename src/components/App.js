import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./completedpages/MainPage";
import User from "./completedpages/User";
import SignUp from "./completedpages/SignUpAndIn";
import CreateNewItem from "./completedpages/CreateNewItem";
import NewItem from "./completedpages/MainPage";
import NotificationPage from "./completedpages/ NotificationPage";
import Gallery from "./Gallery";
import FrontPage from "./FrontPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/main" exact component={MainPage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignUp} />
        <Route path="/create" exact component={CreateNewItem} />
        <Route path="/item2" exact component={User} />
        <Route path="/item3" exact component={NewItem} />
        <Route path="/notifications" exact component={NotificationPage} />
        <Route path="/gallery" exact component={Gallery} />
      </Switch>
    </Router>
  );
};

export default App;
