import React, {Component} from "react";
import { connect } from 'react-redux';

import { taskDetailBoxShow, taskDetailDataSet, dataForTaskChartSet } from '../../redux/actions/action';

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const mapStateToProps = state => ({
    taskDetailBox: state.modalReducer.taskDetailBox,
    taskDetailData: state.modalReducer.taskDetailData,
    dataForTaskChart: state.projectReducer.dataForTaskChart
})

var moment = require('moment');

class Tasks extends Component {

    renderTaskBox = (task) => {
        this.props.dispatch(taskDetailDataSet(task))
        this.props.dispatch(taskDetailBoxShow());
    }


    

    renderRow = (task) => {
        return (
            <Button style={styles.button} onClick={this.renderTaskBox.bind(this, task)}>
                <Grid container>

                    <Grid xs={1} style={styles.text}>
                        {task.taskKey}
                    </Grid>

                    <Grid xs={1} style={styles.text}>
                        {task.ownerName}
                    </Grid>

                    <Grid xs={7} style={styles.text}>
                        {task.title}
                    </Grid>

                    <Grid xs={1}>
                        {task.level}
                    </Grid>

                    <Grid xs={2}>
                        {moment(task.date).fromNow()}
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
    },

    text: {
        textAlign: 'left'
    }
}
export default connect(mapStateToProps)(Tasks);
