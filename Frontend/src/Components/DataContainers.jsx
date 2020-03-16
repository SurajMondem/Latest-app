import React, {Component} from "react";
import {Paper, Typography, Grid} from "@material-ui/core";

class DataContainers extends Component{

    state = {
        loading: true,
        content: null
    };

    async componentDidMount() {
        const url = "https://coronavirus.m.pipedream.net/csse_covid_19_data/csse_covid_19_daily_reports";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ content: data.summaryStats, loading: false });
    }

    render() {
        var region = ["global", "china", "nonChina"];

        if (this.state.loading) return <div>Loading...</div>;
        if (this.state.loading) return <div>didn't get a person</div>;

        //console.log(content.global.confirmed);
        return (
            <React.Fragment>
                {/*Global Data*/}
                <Grid item xs={2}>
                    <Typography variant={"h5"}>Global</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px'}}>
                        <Typography variant={"subtitle1"}>Confirmed</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.global.confirmed}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px', backgroundColor: "green"}}>
                        <Typography variant={"subtitle1"}>Recovered</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.global.recovered}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px', backgroundColor: "red"} }>
                        <Typography variant={"subtitle1"}>Deaths</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.global.deaths}</Typography>
                    </Paper>
                </Grid>

                {/*China Data*/}
                <Grid item xs={2}>
                    <Typography variant={"h5"}>China</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px'}}>
                        <Typography variant={"subtitle1"}>Confirmed</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.china.confirmed}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px', backgroundColor: "green"}}>
                        <Typography variant={"subtitle1"}>Recovered</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.china.recovered}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px', backgroundColor: "red"} }>
                        <Typography variant={"subtitle1"}>Deaths</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.china.deaths}</Typography>
                    </Paper>
                </Grid>

                {/*Non-China Data*/}
                <Grid item xs={2}>
                    <Typography variant={"h5"}>Non-China</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px'}}>
                        <Typography variant={"subtitle1"}>Confirmed</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.nonChina.confirmed}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px', backgroundColor: "green"}}>
                        <Typography variant={"subtitle1"}>Recovered</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.nonChina.recovered}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={2} style={{padding: '15px', backgroundColor: "red"} }>
                        <Typography variant={"subtitle1"}>Deaths</Typography>
                        <Typography variant={"subtitle2"}>{this.state.content.nonChina.deaths}</Typography>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }
};

export default DataContainers;