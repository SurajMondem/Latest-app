import React, {Component} from 'react';
import { BrowserRouter as Router,HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';

//Pages
import LandingPage from "./Pages";
import IndiaStats from "./Pages/IndiaStats";
import UsaStats from "./Pages/UsaStats";


class App extends Component {

  render() {
    return (
        <HashRouter basename={"/"}>
            <Switch>
            <Route exact path={"/"} component={LandingPage}/>
            <Route exact path={"/stats/india"} component={IndiaStats}/>
            <Route exact path={"/stats/usa"} component={UsaStats}/>
            </Switch>
        </HashRouter>
    );
  }
}

export default App;
