import React, {Component} from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Close from "@material-ui/icons/Close";




class Tasks extends Component {

    renderRow = (task) => {
        return (
            <Button style={styles.button}>
                <Grid container>

                    <Grid xs={1}>
                        {task.taskKey}
                    </Grid>

                    <Grid xs={1}>
                        {task.creatorId}
                    </Grid>

                    <Grid xs={8}>
                        {task.title}
                    </Grid>

                    <Grid xs={1}>
                        {task.level}
                    </Grid>

                    <Grid xs={1}>
                        {task.date}
                    </Grid>

                    {/* <Grid xs={1}>
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
                    </Grid> */}

                </Grid>
            </Button>
        )
    }

    render() { 
        if (this.props.tasks != null) {
            return (
                <Grid xs={12}>
                    {this.props.tasks.map(this.renderRow)}
                </Grid>
            );
        } else {
            return (
                <Grid xs={12}>
                </Grid>
            );
        }
    }
}

const styles = {
    
    button: {
        width: '100%'
    },

    tableActions: {
        display: "flex",
        border: "none",
        padding: "12px 8px !important",
        verticalAlign: "middle"
    },

    tableActionButton: {
        width: "27px",
        height: "27px"
    },
    tableActionButtonIcon: {
        width: "17px",
        height: "17px"
    },

    close: {
        backgroundColor: "transparent",
        boxShadow: "none"
    }
}
export default Tasks;
