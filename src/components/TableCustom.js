import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableCustomHead from "./TableCustomHead";
import TableCustomBody from "./TableCustomBody";

const useStyles = makeStyles({
    table: {
        marginTop: 20,
        minWidth: 650
    }
});

const TableCustom = ({ arrayDataGroupByCountryOrRegion }) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table
                className={classes.table}
                size="small"
                aria-label="simple table"
            >
                <TableCustomHead
                    arrayDataGroupByCountryOrRegion={
                        arrayDataGroupByCountryOrRegion
                    }
                />
                <TableCustomBody
                    arrayDataGroupByCountryOrRegion={
                        arrayDataGroupByCountryOrRegion
                    }
                />
            </Table>
        </TableContainer>
    );
};

TableCustom.propTypes = {
    arrayDataGroupByCountryOrRegion: PropTypes.array.isRequired
};

export default TableCustom;
