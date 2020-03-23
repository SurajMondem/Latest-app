import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

//CSS files
import "../Components/SummaryData/DataContainers.css";
import "../App.css";
import "../Components/DataTable/dataTable.css";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Footer from "../Components/Footer/footer";



class IndiaStats extends Component{

    state = {
        loading: true,
        indiaStates: null,
        country: null
    };

    async componentDidMount() {
        //FETCH INDIA SUMMARY
        const urlindia = "https://api.coronatracker.com/v2/analytics/country";
        const response2 = await fetch(urlindia);
        var data2 = await response2.json();

        const countrydata = [];
        //console.log("REACHED!!");
        if (data2) {
            for (let i = 0; i < data2.length; i++) {
                if (data2[i].countryCode.toString() === "IN")
                {
                    countrydata.push(data2[i]);
                }
            }
        }
        console.log(countrydata);

        //INDIAN STATES DATA
        const url = "https://api.rootnet.in/covid19-in/stats/latest";
        const response = await fetch(url);
        let data = await response.json();
        let uniqueData = [];
        console.log(data.data.regional);

        this.setState({indiaStates: data, country: countrydata, loading: false});

    }




    render() {
        if (this.state.loading) return <CircularProgress style={{position: "fixed", top: "50%", left:"50%" }} color="secondary" />;
        if (this.state.loading) return <CircularProgress style={{position: "fixed", top: "50%", left:"50%" }} color="secondary" />;

        return(
            <div className={"main"} style={{width: "100%", height: "100%", backgroundColor: "white"}} >
                <Grid container justify={"center"} style={{display: "flex", position: "relative"}}>
                    <Grid item xs={12} container spacing={0} justify={"center"}>
                        <Grid item xs={12} style={{backgroundColor: "#212529"}}>
                            <Paper style={{ padding: "15px",width: "100%", textAlign: "left",backgroundColor: "#212529", color: "white", margin: "0", boxShadow: "3px 3px 9px rgba(0,0,0,0.3)"}}>
                                <Typography variant={"h5"} style={{display: "inline-block"}}> Corona Virus (Covid-19) Outbreak of India </Typography>
                                <Link to={"/"} style={{display: "inline-block", float: "right"}}> HOME </Link>
                            </Paper>
                        </Grid>
                        <Grid container item xs={10} justify={"center"} style={{margin: "20px", textAlign: "center", backgroundColor: "white"}} >
                            {/*INDIA DATA*/}
                            <div className={"box-container-global"}>
                               <div className={"title-container-global"}>
                                   <div className={"title"}>INDIA</div>
                               </div>
                               <div className={"data-container-global"}>
                                   <div className={"data-title"}>Confirmed</div>
                                   <div className={"data-box"}>
                                       <div className={"data"} id={"confirmed"}>
                                           {this.state.country[0].confirmed}
                                       </div>
                                   </div>
                               </div>
                               <div className={"data-container"}>
                                   <div className={"data-title"} >Recovered</div>
                                   <div className={"data-box"}>
                                       <div className={"data"} id={"recovered"}>
                                           {this.state.country[0].recovered}
                                       </div>
                                   </div>
                               </div>
                               <div className={"data-container"}>
                                   <div className={"data-title"} >Deaths</div>
                                   <div className={"data-box"}>
                                       <div className={"data"} id={"deaths"}>
                                           {this.state.country[0].deaths}
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={"datatable-title"}>
                    <h2 className={"datatable-header"}>
                        Confirmed Cases and Deaths by Country, Territory
                    </h2>
                </div>
                <div className={"datatable-container"}>
                    <div className={"datatable-table"}>
                        <TableContainer className={"datatable"} component={Paper}>
                            <Table aria-label="simple table" style={{minWidth: "650"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>States/Union Territory</TableCell>
                                        <TableCell align="center">Confirmed Indian</TableCell>
                                        <TableCell align="left">Foreign</TableCell>
                                        <TableCell align="center">Recovered</TableCell>
                                        <TableCell align="center">Deaths</TableCell>
                                        <TableCell align="center">Active</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.indiaStates.data.regional.map(row => (
                                        <TableRow key={row.loc}>
                                            <TableCell component="th" scope="row">
                                                {row.loc}
                                            </TableCell>
                                            <TableCell align="center">{row["confirmedCasesIndian"]}</TableCell>
                                            <TableCell align="left">{row["confirmedCasesForeign"]}</TableCell>
                                            <TableCell id={"recovered"} align="center">{row["discharged"]}</TableCell>
                                            <TableCell id={"deaths"} align="center">{row["deaths"]}</TableCell>
                                            <TableCell id={"new-recovered"} align="center">
                                                {
                                                    (row["confirmedCasesIndian"]+row["confirmedCasesForeign"]) - (row["discharged"] + row["deaths"])
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className={"footer"}>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default IndiaStats;