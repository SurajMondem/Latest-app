import React, {Component} from "react";
import {Paper, Typography, Grid} from "@material-ui/core";
import './DataContainers.css';

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
        if (this.state.loading) return <div>Loading...</div>;
        if (this.state.loading) return <div>didn't get the Data</div>;

        console.log(this.state.content.global);
        return (
            <React.Fragment>
                {/*GLOBAL DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"}>GLOBAL</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"confirmed"}>
                                {this.state.content.global.confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"recovered"}>
                                {this.state.content.global.recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"deaths"}>
                                {this.state.content.global.deaths}
                            </div>
                        </div>
                    </div>
                </div>
                {/*CHINA DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"}>CHINA</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"confirmed"}>
                                {this.state.content.china.confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"recovered"}>
                                {this.state.content.china.recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"deaths"}>
                                {this.state.content.china.deaths}
                            </div>
                        </div>
                    </div>
                </div>
                {/*NON-CHINA DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"}>NON-CHINA</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"confirmed"}>
                                {this.state.content.nonChina.confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"recovered"}>
                                {this.state.content.nonChina.recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"deaths"}>
                                {this.state.content.nonChina.deaths}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default DataContainers;