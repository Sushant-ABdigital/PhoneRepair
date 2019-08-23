import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main/Main";
import PhoneRepair from "./components/Floating/PhoneRepair";
import PhoneSelection from "./components/Floating/PhoneSelection";
import PhoneColorSelection from "./components/Floating/PhoneColorSelection";
import ZipCode from "./components/Floating/ZipCode";
import FormikForm from "./components/Floating/Address";
import NoAddress from "./components/Floating/NoAddress";
import DateIssue from "./components/Floating/DateIssue";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/phoneRepair/zip-code" component={ZipCode} />
            <Route path="/phoneRepair/address" component={FormikForm} />
            <Route path="/phoneRepair/thankyou" component={NoAddress} />
            <Route path="/phoneRepair/date-and-issue" component={DateIssue} />
            <Route path="/phoneRepair/:brand/:color" component={PhoneColorSelection} />
            <Route path="/phoneRepair/:brand" component={PhoneSelection} />
            <Route path="/phoneRepair" component={PhoneRepair} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
