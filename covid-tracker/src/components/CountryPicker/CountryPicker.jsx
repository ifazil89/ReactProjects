import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState({});
    useEffect(() => {
        const fetchApiCountries = async () => {
            setCountries(await fetchCountries());
        };
        fetchApiCountries();
        //console.log(countries);
    }, []);
    // console.log(countries);

    return countries.length ? (
        <FormControl className={styles.formControl}>
            <NativeSelect
                onChange={(e) => {
                    console.log("targetvalue: " + e.target.value);
                    handleCountryChange(e.target.value);
                }}
            >
                <option value="global">Global</option>
                {countries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    ) : null;
};

export default CountryPicker;
