import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

//Components
import DataContainer from "../Components/SummaryData/DataContainers";
import DataTable from "../Components/DataTable/dataTable";
import Footer from "../Components/Footer/footer";
import {Link} from "react-router-dom";

//CSS
import "./index.css";

const LandingPage = () => {
    return(
        <div className={"main"} style={{width: "100%", height: "100%", backgroundColor: "white"}} >
            <Grid container justify={"center"} style={{display: "flex", position: "relative"}}>
                 <Grid item xs={12} container spacing={0} justify={"center"}>
                     <Grid item xs={12} style={{backgroundColor: "#212529"}}>
                         <Paper style={{ padding: "15px",width: "100%", textAlign: "left",backgroundColor: "#212529", color: "white", margin: "0", boxShadow: "3px 3px 9px rgba(0,0,0,0.3)"}}>
                             <Typography variant={"h5"} style={{display: "inline-block"}}> Corona Virus (Covid-19) Outbreak of World </Typography>
                             <div style={{display: "inline-block"}}>
                             </div>
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
                     <div className={"button-container"}>
                         <div className={"button-title-container"}>
                             <div className={"button-title"}>STATE WISE DATA AVAILABLE</div>
                         </div>
                         <div className={"button-groups"}>
                             <div className={"button"}>
                                 <Link to={"/stats/india"}> INDIA </Link>
                             </div>
                         </div>
                         <div className={"button-groups"}>
                             <div className={"button"}>
                                 <Link to={"/stats/usa"}> USA </Link>
                             </div>
                         </div>
                     </div>
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
                <Footer/>
            </div>
        </div>
    )
};

export default LandingPage;

