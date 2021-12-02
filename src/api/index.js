import axios from "axios";

// new api from disease.sh
export const getCountries = () =>
    axios.get("https://disease.sh/v3/covid-19/countries");

// new api from disease.sh
export const getReportByCountry = country => axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);

export const getHistoricalCountry = (country) =>
    axios.get(`https://api.covid19api.com/dayone/country/${country}`);

// Vaccine api
export const getVaccineData = () => axios.get('https://covidvaccineapi.herokuapp.com/');

// Province api

export const getProvinceData = () => axios.get('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST');

//VNexpress covid api
export const getNewsData = () => axios.get('https://gw.vnexpress.net/ar/get_rule_2?category_id=1004765&limit=50&page=1&data_select=title,share_url,thumbnail_url,lead,publish_time');

    