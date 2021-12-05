import React, { useState } from "react";
import Main from "./components/main/Main";
import UserMng from "./components/management/UserMng";
import Payments from "./components/management/Payments";
import Feedback from "./components/management/Feedback";
import PaymentReq from "./components/pendings/PaymentReq";
import CounselorReq from "./components/pendings/CounselorReq";
import AssessmentForm from "./components/management/AssessmentForm";
import DyslexiaTest from "./components/management/DyslexiaTest";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/profile/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/dashboard" component={Main} />
          <Route exact path="/appointment" component={AssessmentForm} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/userMng" component={UserMng} />
          <Route exact path="/dyslexiatest" component={DyslexiaTest} />
          <Route exact path="/counselorReq" component={CounselorReq} />
          <Route exact path="/payReq" component={PaymentReq} />
          <Route exact path="/feedback" component={Feedback} />
        </Switch>
      </Router>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;
