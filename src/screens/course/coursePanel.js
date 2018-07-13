import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";


export class CoursePanel extends Component {

    render() {
        return (
            <Grid container>

                <Grid xs={7}>
                    <div style={styles.card}></div>
                    <div style={styles.card}></div>
                    <div style={styles.card}></div>
                </Grid>

                <Grid xs={1}></Grid>

                <Grid xs={4}>
                    <div style={styles.card}></div>
                    <div style={styles.card}></div>
                </Grid>

            </Grid>
        );
    }
}

const styles = {

    card: {
        height: '100px',
        width: '100%',
        borderWidth: '1.5px',
        borderColor: '#e8e8e8',
        borderStyle: 'solid',
        borderRadius: '2px',
        backgroundColor: '#fff',
        marginBottom: '20px'
    }
}
