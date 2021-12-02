import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        width: 300,
        position: "relative",
        borderRadius: 50,
    },
    search: {
        position: "absolute",
        right: 10,
        opacity: 0.7
    },
    input: {

        width: 300,
        margin: "10px 0",
        backgroundColor: "white",
    },
});

export default function CountrySelector({ selectedCountryId, handleCountryChange, countries, language }) {
    console.log("CountrySelector render");
    console.log("language: ", language);
    const styles = useStyles();
    const hardcodeDefaultValue = {
        name: "Vietnam",
        value: "VN",
    };

    return (
        <div className={styles.container}>
            <SearchIcon className={styles.search} />
            <Autocomplete
                className={styles.input}
                defaultValue = {hardcodeDefaultValue}
                id="combo-box-demo"
                includeInputInList
                blurOnSelect
                clearOnBlur
                freeSolo
                disableClearable
                clearOnEscape
                selectOnFocus
                fullWidth
                options={countries}
                getOptionLabel={(option) => (option ? option.name : "")}
                onChange={handleCountryChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        value={params}
                        label={language.label}
                        variant="outlined"
                        size="small"
                    />
                )}
            />
        </div>
    );
}

CountrySelector.defaultProps = {
    countries: [],
}