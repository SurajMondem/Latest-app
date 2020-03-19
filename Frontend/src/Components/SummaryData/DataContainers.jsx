import React, {Component} from "react";
import {Paper, Typography, Grid} from "@material-ui/core";
import './DataContainers.css';

class DataContainers extends Component{

    state = {
        loading: true,
        global: null,
        country: null,
    };

    async componentDidMount() {
        // FETCH GLOBAL DATA
        const url = "https://api.coronatracker.com/v2/stats";
        const response = await fetch(url);
        const data = await response.json();
        // this.setState({ global: data, loading: false });


        // FETCH COUNTRY SUMMARY
        const urlCountries = "https://api.coronatracker.com/v2/analytics/country";
        const response2 = await fetch(urlCountries);
        var data2 = await response2.json();
        var Names = [];
        var uniqueData = [];

        const countrydata = [];
        //console.log("REACHED!!");
        if(data2) {
            for (let i = 0; i < data2.length; i++) {
                if (data2[i].countryCode.toString() === "CN" ||
                    data2[i].countryCode.toString() === "US" ||
                    data2[i].countryCode.toString() === "IN" ||
                    data2[i].countryCode.toString() === "IT") {
                    //console.log("DONE!!");
                    countrydata.push(data2[i]);
                }
            }
            console.log(countrydata);
            this.setState({global: data, country: countrydata, loading: false});
        }
    }

    async getGlobalData() {

    }


    render() {
        if (this.state.loading) return <div>Loading...</div>;
        if (this.state.loading) return <div>didn't get the Data</div>;

        console.log(this.state.global);
        return (
            <React.Fragment>
                {/*GLOBAL DATA*/}
                <div className={"box-container-global"}>
                    <div className={"title-container-global"}>
                        <div className={"title"}>GLOBAL</div>
                    </div>
                    <div className={"data-container-global"}>
                        <div className={"data-title"} >Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"confirmed"}>
                                {this.state.global.confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container-global"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"recovered"}>
                                {this.state.global.recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container-global"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"deaths"}>
                                {this.state.global.deaths}
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
                {/*ITALY DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"}>ITALY</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"confirmed"}>
                                {this.state.country[1].confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"recovered"}>
                                {this.state.country[1].recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"deaths"}>
                                {this.state.country[1].deaths}
                            </div>
                        </div>
                    </div>
                </div>
                {/*USA DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"}>USA</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"}>Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"confirmed"}>
                                {this.state.country[2].confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"recovered"}>
                                {this.state.country[2].recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"deaths"}>
                                {this.state.country[2].deaths}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"}>INDIA</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"}>Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"confirmed"}>
                                {this.state.country[3].confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"recovered"}>
                                {this.state.country[3].recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} id={"deaths"}>
                                {this.state.country[3].deaths}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DataContainers;