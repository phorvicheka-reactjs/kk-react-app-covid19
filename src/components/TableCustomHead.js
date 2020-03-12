import React from "react";
import PropTypes from "prop-types";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    tableCustomHead__tableCell: {
        fontWeight: "bold",
        fontSize: "large"
    }
});

const TableCustomHead = ({ arrayDataGroupByCountryOrRegion }) => {
    const classes = useStyles();
    return (
        <TableHead>
            <TableRow>
                {arrayDataGroupByCountryOrRegion.length !== 0
                    ? Object.keys(arrayDataGroupByCountryOrRegion[0]).map(
                          (value, index) => {
                              return <TableCell padding="checkbox" classes={{root: classes.tableCustomHead__tableCell}} key={index}>{value}</TableCell>;
                          }
                      )
                    : null}
            </TableRow>
        </TableHead>
    );
};

TableCustomHead.propTypes = {
    arrayDataGroupByCountryOrRegion: PropTypes.array.isRequired
};

export default TableCustomHead;
