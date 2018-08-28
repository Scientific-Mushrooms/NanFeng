import React, { Component } from "react";
import {
    ExpansionPanel, 
    ExpansionPanelSummary,
    ExpansionPanelDetails, 
    Typography, 
    Icon,
    Grid,
} from '@material-ui/core';


export default class CourseIntroduction extends Component {


    render() {

        var {introduction} = this.props.course;

        return (
            <ExpansionPanel style={styles.card}>

                <ExpansionPanelSummary style={{width:'25%'}} expandIcon={<Icon style={{fontSize:40,color:"#66ccff",}}>expand_more_icon</Icon>} >
                    <Grid xs={11} container>
                        <Grid style={styles.headerContainer}>
                            <Typography style={styles.title}>课程简介</Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <Typography style={styles.content}>{introduction}</Typography>
                </ExpansionPanelDetails>

            </ExpansionPanel>
        );
    }
}


const styles = {
    headerContainer: {
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: '50px',
        borderLeftWidth: '3px',
        borderLeftColor: '#66ccff',
        borderLeftStyle: 'solid'
    },

    card: {
        marginBottom: '10px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: '#666666',
        fontSize: '35px',
        marginLeft: '10px'
    },

    content: {
        color: '#666666',
        fontSize: '20px',
        marginLeft:40,
        marginRight:40,
    }

}
