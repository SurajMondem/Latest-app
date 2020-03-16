import React, {Component} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

import Api from './api/covidapi';
import './App.css';
import DataContainer from "./Components/DataContainers";

class App extends Component {

  render() {

    return (
        <Grid justify={"center"} container spacing={3}>
          <Grid item xs={11}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>Search Bar</Paper>
              </Grid>
              <Grid item xs={12} container direction={"row"} justify={"center"} alignItems={"center"} spacing={9}>
                <DataContainer />
              </Grid>
              <Grid item xs={4}>

              </Grid>
              <Grid item xs={4}>

              </Grid>
            </Grid>

          </Grid>
        </Grid>
    );
  }
}

export default App;
