import React from "react";
import PropTypes from "prop-types";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
/* import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    tableCustomBody__tableCell: {
        fontWeight: "bold"
    }
}); */

const TableCustomBody = ({ arrayDataGroupByCountryOrRegion }) => {
    return (
        <TableBody>
            {arrayDataGroupByCountryOrRegion.length !== 0
                ? arrayDataGroupByCountryOrRegion.map((value, index) => {
                      const row = [];
                      for (const index of Object.keys(value)) {
                          row.push(
                              <TableCell padding="checkbox" className="tableCustomBody__tableCell" align="left" key={index}>
                                  {value[index]}
                              </TableCell>
                          );
                      }
                      return <TableRow hover key={index}>{row}</TableRow>;
                  })
                : null}
        </TableBody>
    );
};

TableCustomBody.propTypes = {
    arrayDataGroupByCountryOrRegion: PropTypes.array.isRequired
};

export default TableCustomBody;
