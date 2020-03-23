import React, {Component} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import './App.css';
import DataContainer from "./Components/SummaryData/DataContainers";
import DataTable from "./Components/DataTable/dataTable";
import Footer from './Components/Footer/footer';

//Pages
import LandingPage from "./Pages";
import IndiaStats from "./Pages/IndiaStats";
import UsaStats from "./Pages/UsaStats";


class App extends Component {

  render() {
    return (
        <Router>
            <Switch>
            <Route exact path={"/"} component={LandingPage}/>
            <Route exact path={"/stats/india"} component={IndiaStats}/>
            <Route exact path={"/stats/usa"} component={UsaStats}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
