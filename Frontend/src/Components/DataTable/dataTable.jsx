import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './dataTable.css';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(
        'Frozen yoghurt',
        159,
        6.0,
        24,
        4.0
    ),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class dataTable extends Component {

    state = {
        loading: true,
        content: []
    };

    async componentDidMount() {
        const url = "https://coronavirus.m.pipedream.net/csse_covid_19_data/csse_covid_19_daily_reports";
        const response = await fetch(url);
        var data = await response.json();
        var Names = [];
        var uniqueData = [];
        for(let i = 0; i < data.rawData.length; i++){
            //console.log("Matching? :" + data.rawData[i]["Country/Region"].toString());
            //console.log(Names.indexOf("China"));
            //console.log(Names.indexOf(data.rawData[i]["Country/Region"]));
            if(Names.indexOf(data.rawData[i]["Country/Region"]) === -1)
            {
                //console.log("Not Matched:" + data.rawData[i]["Country/Region"]);
                Names.push(data.rawData[i]["Country/Region"]);
                uniqueData.push(data.rawData[i]);
            }
            else {
                console.log(uniqueData[0]);
                for(var j=0; j<=uniqueData.length-1; j++) {
                    console.log("uniqueData[j][\"Country/Region\"]",uniqueData[j]["Country/Region"]);
                    console.log("data.rawData[i][\"Country/Region\"]", data.rawData[i]["Country/Region"]);
                    if(uniqueData[j]["Country/Region"] === data.rawData[i]["Country/Region"]) {
                      console.log("matched");
                        uniqueData[j].Confirmed = parseInt(uniqueData[j].Confirmed) + parseInt(data.rawData[i].Confirmed);
                        uniqueData[j].Recovered = parseInt(uniqueData[j].Recovered) + parseInt(data.rawData[i].Recovered);
                        uniqueData[j].Deaths = parseInt(uniqueData[j].Deaths) + parseInt(data.rawData[i].Deaths);
                    }
                }
            }
        }
        //var obj = JSON.parse(data);

        // var newObj = {};
        // for(let i in data['rawData']){
        //     var item = data['rawData'][i];
        //     if(newObj[item["Country/Region"]] === undefined){
        //         newObj[item["Country/Region"]] = 0;
        //     }
        //     newObj[item["Country/Region"]] += item["Confirmed"];
        // }
        //
        // var result = {};
        // result.rawData = [];
        // for(let i in newObj){
        //     result.rawData.push({'Country/Region':i,'Confirmed ':newObj[i]});
        // }
        // console.log(result);
        console.log(uniqueData);
        this.setState({ content: uniqueData, loading: false });
    }




    render() {

        if (this.state.loading) return <div>Loading...</div>;
        if (this.state.loading) return <div>didn't get the Data</div>;
        console.log(this.state.content[1]["Country/Region"]);
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
                                <TableCell align="right">Last Updated</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.content.map(row => (
                                <TableRow key={row["Country/Region"]}>
                                    <TableCell component="th" scope="row">
                                        {row["Country/Region"]}
                                    </TableCell>
                                    <TableCell align="right">{row["Confirmed"]}</TableCell>
                                    <TableCell id={"deaths"} align="right">{row["Deaths"]}</TableCell>
                                    <TableCell id={"recovered"} align="right">{row["Recovered"]}</TableCell>
                                    <TableCell align="right">{row["Last Update"]}</TableCell>
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
