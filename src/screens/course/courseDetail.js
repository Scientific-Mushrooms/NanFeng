import React, { Component } from "react";
import { Divider, Grid, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Icon } from '@material-ui/core';

export class CourseDetail extends Component {



    render() {
        return (
            <Grid container>

                <Grid xs={7}>
                  {this.props.location.courseId}
                    <div style={styles.card}>
                        related course
                    </div>

                    <div style={styles.card}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<Icon>expand_more_icon</Icon>}>
                                <Typography>course intro: afgdasdgda</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>

                    <div style={styles.card}>
                        course comment
                    </div>
                </Grid>

                <Grid xs={1}></Grid>

                <Grid xs={4}>
                    <div style={styles.card}>
                    related course
                    </div>
                    <div style={styles.card}></div>
                </Grid>

            </Grid>
        );
    }
}

const styles = {

    card: {
        width: '100%',
        borderWidth: '1.5px',
        borderColor: '#e8e8e8',
        borderStyle: 'solid',
        borderRadius: '4px',
        backgroundColor: '#fff',
        marginBottom: '20px'
    },

    courseContainer: {
        width: '100%',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseItem: {
        textAlign: 'center'
    },

    root: {
        width: '100%',
    },

}
