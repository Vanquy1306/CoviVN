import "@fontsource/roboto";
import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/vi";
import {getCountries, getHistoricalCountry, getProvinceData, getReportByCountry, getVaccineData, getNewsData} from "../../../api";
import CountryPicker from "../../functions/Statistic/CountryPicker";
import Highlight from "../../functions/Statistic/Highlight";
import Summary from "../../functions/Statistic/Summary";
import styles from "./Statistic.module.css";
import StatTable from "../../functions/Statistic/StatTable";
import ScrollTop from "../../functions/Statistic/ScrollTop";
import VaccineTable from "../../functions/Statistic/VaccineTable";
import ProvinceTable from "../../functions/Statistic/ProvinceTable"

import languages from '../../lang';


function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState("");
    const [report, setReport] = useState({});
    const [historicalCountry, setHistoricalCountry] = useState([]);
    const [lastestCountries, setLastestCountries] = useState([]);
    const [vaccineData, setVaccineData] = useState([]);
    const [provinceData, setProvinceData] = useState([]);
    const [language, setLanguage] = useState("EN");
    const [news, setNews] = useState([]);

    useEffect(() => {
        console.log("useEffect all countries call");
        getCountries().then((res) => {
            console.log("all countries data: ", res);
            // const alphabetCountries = sortBy(res.data, "Country"); // sort to alphabet order
            const destructureCountries = res.data.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
            }));
            setCountries(destructureCountries);
            // // default selection
            setSelectedCountryId("VN"); // default selection
            setLanguage("VN"); // default language
            const destructureLastestCountries = res.data.map(
                ({
                    country,
                    countryInfo: { flag },
                    cases,
                    recovered,
                    deaths,
                    todayCases,
                    todayRecovered,
                    todayDeaths,
                }) => ({
                    country,
                    flag,
                    cases,
                    recovered,
                    deaths,
                    todayCases,
                    todayRecovered,
                    todayDeaths,
                })
            );
            console.log(
                "destructureLastestCountries: ",
                destructureLastestCountries
            );
            setLastestCountries(destructureLastestCountries);
        });
        console.log("useEffect all countries done");
    }, []);

    // for new search button
    const handleCountryChange = (event, value) => {
        // if (value)
        setSelectedCountryId(value.value);
        console.log("event: ", event.target.value);
        console.log("value: ", value.value);
    };

    useEffect(() => {
        console.log("useEffect one country call");
        if (selectedCountryId) {
            // call lastest report of specific country
            getReportByCountry(selectedCountryId).then((res) => {
                console.log("getReportByCountry: ", res);
                setReport(res.data);
            });

            // call historial of specific country
            getHistoricalCountry(selectedCountryId).then((res) => {
                console.log("getHistoricalCountry: ", res.data);
                setHistoricalCountry(res.data);
            });
        }
        if (selectedCountryId === "VN") {
            // only call Vaccine data for VN
            getVaccineData().then((res) => {
                console.log("getVaccineData: ", res);
                setVaccineData(res.data);
            });
            setLanguage("VN");
            moment.locale("vi");
        } else {
            // set the others (!=VN) language is English
            setLanguage("EN");
            moment.locale("en");
        }
        if (selectedCountryId === "VN") {
            // only call Province data for VN
            getProvinceData().then((res) => {
                console.log("getProvinceData: ", res);
                setProvinceData(res.data);
            });
            setLanguage("VN");
            moment.locale("vi");
        } else {
            // set the others (!=VN) language is English
            setLanguage("EN");
            moment.locale("en");
        }
        console.log("useEffect one country done");
    }, [selectedCountryId, countries]);

    return (
        <Container className={styles.container}>
            <Typography>
                Covid-19 Statistic 
            </Typography>
                <Typography>{moment().format("LLL")}</Typography>

                {countries.length && selectedCountryId && (
                    <CountryPicker
                        selectedCountryId={selectedCountryId}
                        countries={countries}
                        handleCountryChange={handleCountryChange}
                        language={languages[language].CountryPicker}
                    />
                )}
            
            {Object.keys(report).length && (
                <Highlight
                    report={report}
                    language={languages[language].Highlight}
                />
            )}
            {Object.keys(report).length && historicalCountry.length && (
                <Summary
                    historicalCountry={historicalCountry}
                    report={report}
                    language={languages[language].Summary}
                />
            )}
                {selectedCountryId === "VN" && provinceData.length && (
                    <ProvinceTable
                        rowsData={provinceData}
                        language={languages["VN"].ProvinceTable}
                    />
            )} 

                            {selectedCountryId === "VN" && vaccineData.length && (
                    <VaccineTable
                        rowsData={vaccineData}
                        language={languages["VN"].VaccineTable}
                    />
            )}
                        {lastestCountries.length && (
                <StatTable
                rowsData={lastestCountries}
                language={languages[language].StatTable}
                />
                )}
            <ScrollTop language = {languages[language].ScrollTop}/>
        </Container>
    );
}

export default App;
