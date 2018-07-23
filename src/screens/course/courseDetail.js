import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress} from '@material-ui/core';
import ProfessorCard from './components/professorCard';
import CourseComments from './components/courseComments';
import CourseIntroduction from './components/courseIntroduction';
import CourseCard from './components/courseCard';
import { container } from '../../assets/jss/material-dashboard-react';



export class CourseDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.location.courseId,
        };
    }

    render() {
        return (
            <Grid container spacing={16}>

                <Grid xs={9} item>

                    <CourseCard courseId="2333"/>

                    <CourseIntroduction courseId="2333"/>

                    <CourseComments courseId="GIGFI-HFSIHI"/>

                </Grid>

                <Grid xs={3} item>

                    <Card>
                        <Button>Create Section</Button>
                    </Card>
                    
                    <ProfessorCard professorId="FGIHISHIG"/>

                </Grid>

            </Grid>
        );
    }
}

const styles = {


}
