import React, { Component } from "react";
import {
    ExpansionPanel, 
    ExpansionPanelSummary,
    ExpansionPanelDetails, 
    Typography, 
    Icon,
    Grid
} from '@material-ui/core';


export default class CourseIntroduction extends Component {

    renderTypo=(str)=>{
        return <Typography style={styles.content}>{str}</Typography>
    }

    render() {

        var {introduction} = this.props.course;

        return (
            <ExpansionPanel style={styles.card}>

                <ExpansionPanelSummary expandIcon={<Icon>expand_more_icon</Icon>} >
                    <Typography style={styles.title}>课程简介</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <Grid direction='column'>
                        {introduction.split("<br />").map(this.renderTypo)}
                    </Grid>
                </ExpansionPanelDetails>

            </ExpansionPanel>
        );
    }
}


const styles = {

    card: {
        marginBottom: '10px',
    },

    title: {
        color: '#666666',
        fontSize: '30px'
    },

    content: {
        color: '#666666',
        fontSize: '20px'
    }

}
