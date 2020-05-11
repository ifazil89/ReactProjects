import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchApiData, fetchDailyData } from "./api";
import coronoImage from "./images/image.png";

class App extends Component {
    state = {
        data: {},
        country: "",
    };
    async componentDidMount() {
        const apiData = await fetchApiData();
        this.setState({ data: apiData });
        //console.log(apiData);
    }
    handleCountryChange = async (country) => {
        const apiData = await fetchApiData(country);
        this.setState({ data: apiData, country });
    };

    render() {
        return (
            <div className={styles.container}>
                <img
                    className={styles.image}
                    src={coronoImage}
                    alt="COVID-19"
                ></img>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={this.state.data} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        );
    }
}

export default App;
