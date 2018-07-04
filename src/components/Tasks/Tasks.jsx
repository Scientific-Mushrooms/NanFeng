import React, {Component} from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";



import tasksStyle from "../../assets/jss/material-dashboard-react/components/tasksStyle.jsx";

class Tasks extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid xs={12}>
                {this.props.tasks.map(task => (
                    
                        <Button style={styles.button}>
                            <TableRow className={classes.tableRow}>
                      
                                <TableCell className={classes.tableCell}>
                                    {task.status}
                                </TableCell>
                   
                      
                                <TableCell className={classes.tableCell}>
                                    {task.title}
                                </TableCell>
                  
                                <TableCell className={classes.tableActions}>
                                    <Tooltip
                                        id="tooltip-top"
                                        title="Edit Task"
                                        placement="top"
                                        classes={{ tooltip: classes.tooltip }}
                                        >
                                    <IconButton
                                        aria-label="Edit"
                                        className={classes.tableActionButton}
                                        >
                                    <Edit
                                        className={
                                            classes.tableActionButtonIcon + " " + classes.edit
                                        }
                                        />
                                    </IconButton>
                                    </Tooltip>
                                    <Tooltip
                                        id="tooltip-top-start"
                                        title="Remove"
                                        placement="top"
                                        classes={{ tooltip: classes.tooltip }}
                                        >
                                    <IconButton
                                        aria-label="Close"
                                        className={classes.tableActionButton}
                                        >
                                    <Close
                                        className={
                                            classes.tableActionButtonIcon + " " + classes.close
                                        }
                                        />
                                    </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        </Button>
            
                ))}
            </Grid>
        );
    }
}

const styles = {
    
    button: {
        width: '100%'
    }
}
export default withStyles(tasksStyle)(Tasks);
