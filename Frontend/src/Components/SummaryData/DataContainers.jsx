import React, {Component} from "react";
import './DataContainers.css';
import CircularProgress from "@material-ui/core/CircularProgress";

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
        const urlCountries = "https://api.coronatracker.com/v3/stats/worldometer/country";
        const response2 = await fetch(urlCountries);
        var data2 = await response2.json();

        const countrydata = [];
        if(data2) {
            for (let i = 0; i < data2.length; i++) {
                if (data2[i].countryCode === "CN" ||
                    data2[i].countryCode === "US" ||
                    data2[i].countryCode === "IN" ||
                    data2[i].countryCode === "IT") {
                    countrydata.push(data2[i]);
                }
            }
            console.log('PASS!!!');
            console.log(countrydata);
            this.setState({global: data, country: countrydata, loading: false});
        }
    }

    render() {
        if (this.state.loading) return <CircularProgress color="secondary" />;
        if (this.state.loading) return <CircularProgress color="secondary" />;

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
                            <div className={"data"}>
                                {this.state.global.confirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container-global"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#00b894"}}>
                                {this.state.global.recovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container-global"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#d63031"}}>
                                {this.state.global.deaths}
                            </div>
                        </div>
                    </div>
                </div>
                {/*USA DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"} style={{textTransform: "uppercase"}}>{this.state.country[0].country}</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"}>Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"}>
                                {this.state.country[0].totalConfirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#00b894"}}>
                                {this.state.country[0].totalRecovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#d63031"}}>
                                {this.state.country[0].totalDeaths}
                            </div>
                        </div>
                    </div>
                </div>
                {/*INDIA DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"} style={{textTransform: "uppercase"}}>{this.state.country[3].country}</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"}>Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"}>
                                {this.state.country[3].totalConfirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#00b894"}}>
                                {this.state.country[3].totalRecovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#d63031"}}>
                                {this.state.country[3].totalDeaths}
                            </div>
                        </div>
                    </div>
                </div>
                {/*CHINA DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"} style={{textTransform: "uppercase"}}>{this.state.country[1].country}</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"}>
                                {this.state.country[1].totalConfirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#00b894"}}>
                                {this.state.country[1].totalRecovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#d63031"}}>
                                {this.state.country[1].totalDeaths}
                            </div>
                        </div>
                    </div>
                </div>
                {/*ITALY DATA*/}
                <div className={"box-container"}>
                    <div className={"title-container"}>
                        <div className={"title"} style={{textTransform: "uppercase"}}>{this.state.country[2].country}</div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Confirmed</div>
                        <div className={"data-box"}>
                            <div className={"data"}>
                                {this.state.country[2].totalConfirmed}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Recovered</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#00b894"}}>
                                {this.state.country[2].totalRecovered}
                            </div>
                        </div>
                    </div>
                    <div className={"data-container"}>
                        <div className={"data-title"} >Deaths</div>
                        <div className={"data-box"}>
                            <div className={"data"} style={{color: "#d63031"}}>
                                {this.state.country[2].totalDeaths}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DataContainers;