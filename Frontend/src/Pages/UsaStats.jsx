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



class UsaStats extends Component{

    state = {
        loading: true,
        UsaStates: null,
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
                if (data2[i].countryCode.toString() === "US")
                {
                    countrydata.push(data2[i]);
                }
            }
        }

        //USA STATES DATA
        const url = "https://covidtracking.com/api/states";
        const response = await fetch(url);
        let data = await response.json();
        // ADDING State names according to US CODES
        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].state.toString() === "AL")
                {
                    let StateName = "Alabama";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "AK")
                {
                    let StateName = "Alaska";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "AZ")
                {
                    let StateName = "Arizona";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "AR")
                {
                    let StateName = "Arkansas";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "CA")
                {
                    let StateName = "California";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "CO")
                {
                    let StateName = "Colorado";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "CT")
                {
                    let StateName = "Connecticut";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "DE")
                {
                    let StateName = "Delaware";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "FL")
                {
                    let StateName = "Florida";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "GA")
                {
                    let StateName = "Georgia";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "HI")
                {
                    let StateName = "Hawaii";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "ID")
                {
                    let StateName = "Idaho";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "IL")
                {
                    let StateName = "Illinois";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "IN")
                {
                    let StateName = "Indiana";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "IA")
                {
                    let StateName = "Iowa";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "KS")
                {
                    let StateName = "Kansas";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "KY")
                {
                    let StateName = "Kentucky";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "LA")
                {
                    let StateName = "Louisiana";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "ME")
                {
                    let StateName = "Maine";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MD")
                {
                    let StateName = "Maryland";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MA")
                {
                    let StateName = "Massachusetts";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MI")
                {
                    let StateName = "Michigan";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MN")
                {
                    let StateName = "Minnesota";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MS")
                {
                    let StateName = "Mississippi";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MO")
                {
                    let StateName = "Missouri";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MT")
                {
                    let StateName = "Montana";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "NE")
                {
                    let StateName = "Nebraska";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "NV")
                {
                    let StateName = "Nevada";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "NH")
                {
                    let StateName = "New Hampshire";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "NJ")
                {
                    let StateName = "New Jersey";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "NM")
                {
                    let StateName = "New Mexico";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "NY")
                {
                    let StateName = "New York";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "NC")
                {
                    let StateName = "North Carolina";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "ND")
                {
                    let StateName = "North Dakota";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "OH")
                {
                    let StateName = "Ohio";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "OK")
                {
                    let StateName = "Oklahoma";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "OR")
                {
                    let StateName = "Oregon";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "PA")
                {
                    let StateName = "Pennslyvania";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "RI")
                {
                    let StateName = "Rhode Island";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "SC")
                {
                    let StateName = "South Carolina";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "SD")
                {
                    let StateName = "South Dakota";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "TN")
                {
                    let StateName = "Tennessee";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "TX")
                {
                    let StateName = "Texas";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "UT")
                {
                    let StateName = "Utah";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "VT")
                {
                    let StateName = "Vermont";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "VA")
                {
                    let StateName = "Virginia";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "WA")
                {
                    let StateName = "Washington";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "WV")
                {
                    let StateName = "West Virginia";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "WI")
                {
                    let StateName = "Wisconsin";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "WY")
                {
                    let StateName = "Wyoming";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "DC")
                {
                    let StateName = "District of Columbia";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "AS")
                {
                    let StateName = "American Samoa";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "GU")
                {
                    let StateName = "Guam";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "MP")
                {
                    let StateName = "Northern Mariana Islands";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "PR")
                {
                    let StateName = "Puerto Rico";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "UM")
                {
                    let StateName = "United State Minor Outlying Islands";
                    data[i].StateName = StateName;
                }
                else if (data[i].state.toString() === "VI")
                {
                    let StateName = "Virgin Islands, U.S.";
                    data[i].StateName = StateName;
                }
                if(data[i].death === null)
                {
                    data[i].death = 0;
                }

            }
        }

        this.setState({UsaStates: data, country: countrydata, loading: false});

    }




    render() {
        if (this.state.loading) return <CircularProgress style={{position: "fixed", top: "50%", left:"50%" }} color="secondary" />;
        if (this.state.loading) return <CircularProgress style={{position: "fixed", top: "50%", left:"50%" }} color="secondary" />;

        return(
            <div className={"main"} style={{width: "100%", height: "100%", backgroundColor: "white"}} >
                <Grid container justify={"center"} style={{display: "flex", position: "relative"}}>
                    <Grid item xs={12} container spacing={0} justify={"center"}>
                        <Grid item xs={12} style={{backgroundColor: "#212529"}}>
                            <Paper style={{ padding: "15px",width: "100%", textAlign: "center",backgroundColor: "#212529", color: "white", margin: "0", boxShadow: "3px 3px 9px rgba(0,0,0,0.3)"}}>
                                <Typography variant={"h5"} style={{display: "inline-block"}}> Corona Virus (Covid-19) Outbreak of USA </Typography>
                                <Link to={"/"} style={{display: "inline-block", float: "right"}}> World </Link>
                            </Paper>
                        </Grid>
                        <Grid container item xs={10} justify={"center"} style={{margin: "20px", textAlign: "center", backgroundColor: "white"}} >
                            {/*USA DATA*/}
                            <div className={"box-container-global"}>
                                <div className={"title-container-global"}>
                                    <div className={"title"}>USA</div>
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
                        Confirmed Cases and Deaths by States
                    </h2>
                </div>
                <div className={"datatable-container"}>
                    <div className={"datatable-table"}>
                        <TableContainer className={"datatable"} component={Paper}>
                            <Table aria-label="simple table" style={{minWidth: "650"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>States</TableCell>
                                        <TableCell align="center">Corona Positive</TableCell>
                                        <TableCell align="center">Deaths</TableCell>
                                        <TableCell align="center">Negative</TableCell>
                                        <TableCell align="center">Total</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.UsaStates.map(row => (
                                        <TableRow key={row.StateName}>
                                            <TableCell component="th" scope="row">
                                                {row.StateName}
                                            </TableCell>
                                            <TableCell align="center">{row["positive"]}</TableCell>
                                            <TableCell id={"deaths"} align="center">{row["death"]}</TableCell>
                                            <TableCell id={"recovered"} align="center">{row["negative"]}</TableCell>
                                            <TableCell id={"new-recovered"} align="center">{row["total"]}</TableCell>
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

export default UsaStats;