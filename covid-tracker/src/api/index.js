import axios from "axios";

let url = "https://covid19.mathdro.id/api";

export const fetchApiData = async (country) => {
    try {
        let apiUrl = url;
        if (country) {
            apiUrl = `${url}/countries/${country}`;
        }
        const { data } = await axios.get(apiUrl);

        const modifiedData = {
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            lastUpdate: data.lastUpdate,
        };
        return modifiedData;
    } catch (e) {
        console.error(e);
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        //console.log(data);
        const modifiedData = data.map((d) => ({
            confirmed: d.confirmed.total,
            deaths: d.deaths.total,
            date: d.reportDate,
        }));
        return modifiedData;
    } catch (e) {
        console.error(e);
    }
};

export const fetchCountries = async () => {
    try {
        const {
            data: { countries },
        } = await axios.get(`${url}/countries`);
        const modifedData = countries.map((country) => country.name);
        //console.log(modifedData);
        return modifedData;
    } catch (e) {
        console.error(e);
    }
};
