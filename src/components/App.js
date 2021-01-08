import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./completedpages/MainPage";
import User from "./completedpages/User";
import SignUp from "./completedpages/SignUpAndIn";
import CreateNewItem from "./completedpages/CreateNewItem";
import NotificationPage from "./completedpages/ NotificationPage";
import ApplicantPage from "./completedpages/ApplicantPage";
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
        <Route path="/item/:id" exact component={User} />
        {/* The id for Notification and Applicant is user ID. The ID above is Item ID} */}
        <Route path="/notifications" exact component={NotificationPage} />
        <Route path="/applicants" exact component={ApplicantPage} />
      </Switch>
    </Router>
  );
};

export default App;
