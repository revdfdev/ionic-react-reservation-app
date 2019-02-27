import React, { Component } from 'react';
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import { IonApp } from "@ionic/react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Login';
import './theme.css';
import withSession from "./components/withSession";

class App extends Component {
  render() {
    return (
      <IonApp>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </IonApp>
    );
  }
}

export default withSession(App);
