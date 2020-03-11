import React from "react";
import PropTypes from "prop-types";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableCustomHead = ({ arrayDataGroupByCountryOrRegion}) => {
    return (
        <TableHead>
            <TableRow>
                {arrayDataGroupByCountryOrRegion.length !== 0
                    ? Object.keys(arrayDataGroupByCountryOrRegion[0]).map(
                          (value, index) => {
                              return <TableCell key={index}>{value}</TableCell>;
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
