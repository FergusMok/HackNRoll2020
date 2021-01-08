import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Titlebar";
import User from "./completedpages/User";
import SignUp from "./completedpages/SignUpAndIn";
import CreateNewItem from "./completedpages/CreateNewItem";
import NewItem from "./completedpages/MainPage";
import NotificationPage from "./completedpages/ NotificationPage";
import Gallery from "./Gallery";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={MainPage} />
        <Route path="/item" exact component={CreateNewItem} />
        <Route path="/item2" exact component={User} />
        <Route path="/item3" exact component={NewItem} />
        <Route path="/item4" exact component={NotificationPage} />
        <Route path="/gallery" exact component={Gallery} />
      </Switch>
    </Router>
  );
};

export default App;
