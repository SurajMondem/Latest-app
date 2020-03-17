import React, {Component} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import './App.css';
import DataContainer from "./Components/SummaryData/DataContainers";
import DataTable from "./Components/DataTable/dataTable";



class App extends Component {

  render() {
    return (
        <div className={"main"} style={{width: "100%", height: "100%", backgroundColor: "white"}} >
          <Grid container justify={"center"} style={{display: "flex", position: "relative"}}>
            <Grid item xs={12} container spacing={0} justify={"center"}>
              <Grid item xs={12} style={{backgroundColor: "#212529"}}>
                  <Paper style={{ padding: "15px",width: "100%", textAlign: "center",backgroundColor: "#212529", color: "white", margin: "0", boxShadow: "3px 3px 9px rgba(0,0,0,0.3)"}}>
                    <Typography variant={"h5"}> Corona Virus (Covid-19) Outbreak of World </Typography>
                  </Paper>
              </Grid>
                <div style={{width: "100%", alignContent: "center", padding: "20px"}}>
                    <Alert severity="error">
                        <AlertTitle>Slow?</AlertTitle>
                        There may be intermittent outage due to the high number
                        of users. We are giving our best to keep up with this
                        high demand. Sorry for Inconvenience.
                    </Alert>
                </div>
              <Grid container item xs={10} justify={"center"} style={{margin: "20px", textAlign: "center", backgroundColor: "white"}} >
                <DataContainer/>
              </Grid>
            </Grid>
          </Grid>
            <div className={"datatable-title"}>
                <h2 className={"datatable-header"}>
                    Confirmed Cases and Deaths by Country, Territory
                </h2>
            </div>
          <div className={"datatable-container"}>
            <DataTable/>
          </div>
          <div className={"footer"}>
            <div className={"footer-content"}>
              <div className={"footer-title"}>DISCLAIMER</div>
              <div className={"footer-data"}>
                  <a href={"coronainworld"} >coronainworld.com</a> is a privately owned website that
                is not owned or operated by any state or federal government
                agency. We have compiled these data using public information
                available in National/Local Media and Information released by
                State/Federal Agencies (CDC, DHS). Provided Information may not be
                accurate. Please refer to CDC for any official information. contact
                  us at <a href="mailto:coronainworld@gmail.com" target="_top">
                  coronainworld@gmail.com</a> for any other inquiries.
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
