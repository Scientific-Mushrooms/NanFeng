import React, { Component } from "react";
import { Divider, Grid, Button } from '@material-ui/core';

export class CourseDetail extends Component {



    render() {
        return (
            <Grid container>

                <Grid xs={7}>
                  {this.props.location.course}
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
    }
}
