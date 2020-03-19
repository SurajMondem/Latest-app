import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './dataTable.css';


class dataTable extends Component {

    constructor(props){
        super(props);
    }

    state = {
        loading: true,
        content: []
    };

    async componentDidMount() {
        //COUNTRY DATA
        const url = "https://api.coronatracker.com/v2/analytics/country";
        const response = await fetch(url);
        let data = await response.json();
        let uniqueData = [];
        console.log(data);

        for(let i = 0; i < data.length; i++) {
            let date = data[i].dateAsOf.split("T")[0];
            let time = data[i].dateAsOf.split("T")[1];
            data[i].dateAsOf = date;
            data[i].timeAsOf = time;
            uniqueData.push(data[i]);
        }

        console.log(uniqueData);

        this.setState({content: data, loading: false });
    }


    render() {

        if (this.state.loading) return <div>Loading...</div>;
        if (this.state.loading) return <div>didn't get the Data</div>;
        console.log(this.state.content[1].countryName);
        return (
            <div className={"datatable-table"}>
                <TableContainer className={"datatable"} component={Paper}>
                    <Table aria-label="simple table" style={{minWidth: "650"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell align="right">Confirmed</TableCell>
                                <TableCell align="right">Deaths</TableCell>
                                <TableCell align="right">Recovered</TableCell>
                                <TableCell align="right">Last Updated Date</TableCell>
                                <TableCell align="right">Last Updated Time</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.content.map(row => (
                                <TableRow key={row.countryName}>
                                    <TableCell component="th" scope="row">
                                        {row.countryName}
                                    </TableCell>
                                    <TableCell align="right">{row["confirmed"]}</TableCell>
                                    <TableCell id={"deaths"} align="right">{row["deaths"]}</TableCell>
                                    <TableCell id={"recovered"} align="right">{row["recovered"]}</TableCell>
                                    <TableCell align="right">{row["dateAsOf"]}</TableCell>
                                    <TableCell align="right">{row["timeAsOf"]}</TableCell>
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
