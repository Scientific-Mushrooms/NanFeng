import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles"; 
import Card from '@material-ui/core/Card';
import TableBody from '@material-ui/core/TableBody';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


function CustomTable(props){
  const {classes} = props;


  return (
    <div className={classes.table}>
      <TableHead >
        <TableRow >
          {props.tableHead.map((prop, key) => {
            return (
              <TableCell
                key={key}
                padding="none"
                className={classes.tableHead}>
              {prop}
              </TableCell>
              );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.tableData.map((prop, key) => {

          let rank =  
          { fontFamily: "'Montserrat', sans-serif",
          fontSize:"1.1em",
          textAlign:"center"}
          let ranking ={
            backgroundColor:"#696969",
            color:"white", 
            width:"30%", 
            margin:"0 auto",
            boxShadow:"none"};

          if(key<3){
            ranking = rankStyle[key];
          }

          return (
            <TableRow key={key}>
              <TableCell className={classes.tableCell} padding="none"  key={key}>
                  <Card style={ranking}>{key + 1}</Card>
              </TableCell>
              <TableCell className={classes.tableCell} padding="none"  key={key}>
                {prop.name}
              </TableCell>
              <TableCell className={classes.tableCell} padding="none" key={key}>
                {prop.contribution}
              </TableCell>
            </TableRow>
            );
        })}

      </TableBody>
    </div>
    );
}


const rankStyle =[
{ 
  backgroundColor:"red", 
  width:"30%", 
  margin:"0 auto",
  backgroundColor:"#fdfd96",
  fontWeight:"700",
  boxShadow:"none"},
{ 
  backgroundColor:"red", 
  width:"30%", 
  margin:"0 auto",
  backgroundColor:" #f0f0f0",
  fontWeight:"700",
  boxShadow:"none"},
{ 
  backgroundColor:"red", 
  width:"30%", 
  margin:"0 auto",
  backgroundColor:" #cc9966",
  fontWeight:"700",
  boxShadow:"none"}

];


const styles = {
  table:{
    width:"100%",
    display:"table",
    textAlign:"center",
    tableLayout:"fixed",
    borderCollapse:"collapse"

  },
  tableHead:{
    fontFamily: "'Montserrat', sans-serif",
    fontSize:"1.2em",
    fontWeight:"700",
    textAlign:"center",
    backgroundColor:"yellow"
  },
  tableCell: { 
    fontFamily: "'Montserrat', sans-serif",
    fontSize:"1.1em",
    textAlign:"center"}
  

};

export default withStyles(styles) (CustomTable);
