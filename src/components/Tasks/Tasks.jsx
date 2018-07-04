import React, {Component} from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";




class Tasks extends Component {

    renderRow = (task) => {
        return (
            <Button style={styles.button}>
                <Grid container>

                    <Grid xs={1}>
                        {task.key}
                    </Grid>

                    <Grid xs={1}>
                        {task.status}
                    </Grid>

                    <Grid xs={8}>
                        {task.title}
                    </Grid>

                    <Grid xs={2}>
                        <Tooltip
                            title="Edit Task"
                            placement="top"
                            style={styles.tooltip}
                        >
                            <IconButton
                                aria-label="Edit"
                                style={styles.tableActionButton}
                            >
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title="Remove"
                            placement="top"
                            style={styles.tooltip}
                            >
                            <IconButton
                                aria-label="Close"
                                style={styles.tableActionButton}
                                >
                                <Close />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Button>
        )
    }

    render() { 
        return (
            <Grid xs={12}>
                {this.props.tasks.map(this.renderRow)}
            </Grid>
        );
    }
}

const styles = {
    
    button: {
        width: '100%'
    },

    table: {
        marginBottom: "0",
        overflow: "visible"
    },

    tableRow: {
        position: "relative",
    },
    tableActions: {
        display: "flex",
        border: "none",
        padding: "12px 8px !important",
        verticalAlign: "middle"
    },
    tableCell: {
        padding: "8px",
        verticalAlign: "middle",
        
        lineHeight: "1.42857143",
        fontSize: "14px"
    },
    tableActionButton: {
        width: "27px",
        height: "27px"
    },
    tableActionButtonIcon: {
        width: "17px",
        height: "17px"
    },
    edit: {
        backgroundColor: "transparent",
        boxShadow: "none"
    },
    close: {
        backgroundColor: "transparent",
        boxShadow: "none"
    }
}
export default Tasks;
