import {
    Card,
    CardContent,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    withStyles,
} from "@material-ui/core";
import React from "react";

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableHead = withStyles((theme) => ({
    head: {

        fontSize: 16,
        fontWeight: 900,
    },
    body: {
        fontSize: 14,
    },
    "@media (max-width:550px)": {
        head: {
            fontSize: 14,
            fontWeight: 800,
        },
    },
}))(TableCell);

const useStyles = makeStyles({
    container: {
        marginTop: 30,
    },
    card: {
        marginTop: 10,
        maxHeight: 500,
        overflow: "scroll",
    },
    table: {},
    styledTableRow: {
        "&:nth-of-type(odd)": {
            backgroundColor: "rgba(224, 224, 224, 1)",
        },
    },
    nameColor: {
        color: "#e53e3e",
        fontSize: 13,
        fontWeight: "bold",
    },
    caseColor: {
        color: "#8ACA2B",
        fontSize: 13,
        fontWeight: "bold",
    },
    deathColor: {
        color: "#718096",
        fontSize: 13,
        fontWeight: "bold",
    },
 
    "@media (max-width:550px)": {
        column: {
            padding: 0,
            margin: 0,
            maxWidth: 50,
        },
    },
});


function ProvinceTable({ rowsData, language }) {
    console.log("language in ProvinceTable: ", language);
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <Typography component="h2" variant="h5">
                Số ca nhiễm theo khu vực
            </Typography>
            <Card className={styles.card}>
                <CardContent style={{ paddingTop: 0 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <StyledTableHead>
                                    {language.name}
                                </StyledTableHead>
                                {/* <StyledTableHead
                                    className={styles.column}
                                    align="right"
                                >
                                    {language.Expected}
                                </StyledTableHead> */}
                                <StyledTableHead align="right">
                                    {language.cases}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.death}
                                </StyledTableHead>
                                <StyledTableHead align="right">
                                    {language.casesToday}
                                </StyledTableHead>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsData.map(
                                ({
                                    name,
                                    death,
                                    cases,
                                    casesToday,
                                }) => (
                                    <StyledTableRow>
                                        <TableCell
                                            className={styles.column}
                                            component="th"
                                            scope="row"
                                        >
                                            {name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {cases}
                                        </TableCell>
                                        <TableCell align="right">
                                            <b>{death}</b>
                                        </TableCell>
                                        <TableCell align="right">
                                            {casesToday}
                                        </TableCell>
                                    </StyledTableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProvinceTable;