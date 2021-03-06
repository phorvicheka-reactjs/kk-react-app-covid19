import React from "react";
import PropTypes from "prop-types";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { COLUMN_NAME_COUNTRY_OR_REGION } from "../classes/csse_covid_19_daily_reports";
import { utilsCountries } from "./../utils/utilsCountries";

const TableCustomBody = ({ arrayDataGroupByCountryOrRegion }) => {
    return (
        <TableBody>
            {arrayDataGroupByCountryOrRegion.length !== 0
                ? arrayDataGroupByCountryOrRegion.map((value, index) => {
                      const row = [];
                      for (const index of Object.keys(value)) {
                          row.push(
                              <TableCell
                                  padding="checkbox"
                                  className="tableCustomBody__tableCell"
                                  align="left"
                                  key={index}
                              >
                                  {index === COLUMN_NAME_COUNTRY_OR_REGION ? (
                                      <div>
                                          {utilsCountries.abbr(
                                              value[index]
                                          ) && (
                                              <img
                                                  alt={value[index]}
                                                  src={`https://www.countryflags.io/${utilsCountries.abbr(
                                                      value[index]
                                                  )}/shiny/24.png`}
                                              />
                                          )}
                                          {value[index]}
                                      </div>
                                  ) : (
                                      value[index]
                                  )}
                              </TableCell>
                          );
                      }
                      return (
                          <TableRow hover key={index}>
                              {row}
                          </TableRow>
                      );
                  })
                : null}
        </TableBody>
    );
};

TableCustomBody.propTypes = {
    arrayDataGroupByCountryOrRegion: PropTypes.array.isRequired
};

export default TableCustomBody;
