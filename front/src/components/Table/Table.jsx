import React, {Component} from "react";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";



class CustomTable extends Component {
    render() {
        return (
            <div className={styles.tableResponsive}>

          
              <TableHead style={styles.tableHeader}>
              
                <TableRow>
                  {this.props.tableHead.map((prop, key) => {
                    return (
                      <TableCell
                        style={styles.tableCell}
                        key={key}
                      >
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
      

                <Table style={styles.table}>

                    {this.props.tableData.map((prop, key) => {
                            return (
                              <TableRow key={key}>
                                  <TableCell style={styles.tableCell} key={key}>
                                        {key + 1}
                                  </TableCell>
                                  <TableCell style={styles.tableCell} key={key}>
                                        {prop.name}
                                  </TableCell>
                                  <TableCell style={styles.tableCell} key={key}>
                                        {prop.contribution}
                                  </TableCell>
                              </TableRow>
                            );
                        })}

                </Table>
            </div>
        );
    }
}

const styles = {

    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse"
    },

    tableHeadCell: {
        color: "inherit",
        fontSize: "1em"
    },

    tableCell: {
        lineHeight: "1.42857143",
        padding: "12px 8px",
        verticalAlign: "middle"
    },

    tableResponsive: {
        width: "100%",
        overflowX: "auto"
    },

    TableHead: {
      width: '100%'
    }

};

export default CustomTable;
