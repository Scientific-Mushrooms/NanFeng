import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles"; 

import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";



function CustomTable(props){
      const {classes} = props;


        return (
            <div className={classes.table}>
              <TableHead >
                <TableRow  >
                  {props.tableHead.map((prop, key) => {
                    return (
                      <TableCell
                        key={key}
                        className={classes.tableHead}
                      >
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
                <TableBody>
                    {props.tableData.map((prop, key) => {
                            return (
                              <TableRow  key={key}>
                                  <TableCell className={classes.number}  key={key}>
                                        {key + 1}
                                  </TableCell>
                                  <TableCell className={classes.words}  key={key}>
                                        {prop.name}
                                  </TableCell>
                                  <TableCell className={classes.number}  key={key}>
                                        {prop.contribution}
                                  </TableCell>
                              </TableRow>
                            );
                        })}

                </TableBody>
            </div>
        );
}

function determineColor(key){
  if(key === 1){
    return "red";
  }else if(key === 2){
    return "blue";
  }else if(key === 3){
    return "green";
  }else{
    return "black";
  }
}

const styles = {
  table:{
    width:"100%",
    display:"table",
    textAlign:"center"
  },
  tableHead:{
    fontFamily: "'Montserrat', sans-serif",
    fontSize:"1.2em",
    fontWeight:"700",
    textAlign:"center"
  },
  number:{
    fontFamily: "'Montserrat', sans-serif",
    fontSize:"1.1em",
    textAlign:"center"
  },
  words:{
    fontFamily: "'Titillium Web', sans-serif",
    fontSize:"1.1em",
    textAlign:"center"
  }

};

export default withStyles(styles) (CustomTable);
