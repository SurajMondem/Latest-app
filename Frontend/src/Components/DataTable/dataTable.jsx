import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from "@material-ui/core/CircularProgress";

import './dataTable.css';


class dataTable extends Component {

    state = {
        loading: true,
        content: [],
        daily: []
    };

    async componentDidMount() {
        //COUNTRY DATA
        const url = "https://api.coronatracker.com/v3/stats/worldometer/country";
        const response = await fetch(url);
        let data = await response.json();
        let uniqueData = [];

        console.log(data);

        for(let i = 0; i < data.length; i++) {
            let date = data[i].lastUpdated.split("T")[0];
            let time = data[i].lastUpdated.split("T")[1];
            data[i].dateAsOf = date;
            data[i].timeAsOf = time.substring(0,5);
            uniqueData.push(data[i]);
        }

        console.log("CHECKED!!");
        console.log(uniqueData);

        this.setState({content: uniqueData, loading: false });
    }

    render() {

        if (this.state.loading) return <CircularProgress color="secondary" />;
        if (this.state.loading) return <CircularProgress color="secondary" />;
        return (
            <div className={"datatable-table"}>
                <p className={"Time-container"} style={{fontWeight: "900", fontFamily: "Roboto", color: "#00b894"}}> LAST UPDATED: {this.state.content[0].dateAsOf} {this.state.content[0].timeAsOf} </p>
                <TableContainer className={"datatable"} component={Paper}>
                    <Table aria-label="simple table" style={{minWidth: "650"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell align="center">Total Cases</TableCell>
                                <TableCell align="center">New Cases</TableCell>
                                <TableCell align="center">Total Deaths</TableCell>
                                <TableCell align="center">New Deaths</TableCell>
                                <TableCell align="center">Total Recovered</TableCell>
                                <TableCell align="center">Active Cases</TableCell>
                                <TableCell align="center">Total Critical</TableCell>
                                <TableCell align="center">Mortality Rate</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.content.map(row => (
                                <TableRow key={row.country}>
                                    <TableCell component="th" scope="row">
                                        {row.country}
                                    </TableCell>
                                    <TableCell align="center">{row["totalConfirmed"]}</TableCell>
                                    <TableCell id={"nconfirmed"} align="center">{row["dailyConfirmed"] !== 0 ? "+"+row["dailyConfirmed"] : row["dailyConfirmed"]}</TableCell>
                                    <TableCell align="center" style={{fontWeight: "600" ,color: "#d63031"}}>{row["totalDeaths"]}</TableCell>
                                    <TableCell id={"ndeaths"} align="center">{row["dailyDeaths"] !== 0 ? "+"+row["dailyDeaths"] : row["dailyDeaths"]}</TableCell>
                                    <TableCell id={"nrecovered"} align="center">{row["totalRecovered"]}</TableCell>
                                    <TableCell align="center">{row["activeCases"]}</TableCell>
                                    <TableCell align="center" style={{fontWeight: "900"}}>{row["totalCritical"]}</TableCell>
                                    <TableCell align="center" style={{fontWeight: "900", color: "#d63031"}}>
                                        {(Math.round(((row["totalDeaths"]/row["totalConfirmed"])*100) * 100) / 100).toFixed(2)+"%"}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    };
}
export default dataTable;
