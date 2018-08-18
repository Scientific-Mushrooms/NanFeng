import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { connect } from 'react-redux';
import {
    Divider,
    Grid,
    Button, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress
} from '@material-ui/core';

var moment = require('moment');

class CourseSections extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.courseId,

            sections: [],
        };
    }

    componentWillMount = () => {
        this.fetchSections();
    }

    fetchSections = () => {
        
        var form = new FormData();
        form.append('courseId', this.state.courseId);

        this.post('/api/section/courseIdToSections', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({sections: result.detail})
                this.pushNotification("success", "successfully fetch sections", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    renderSection = (section, index) => {
        return (
            <Grid xs={11} style={styles.sectionContainer}>
                <Button fullWidth style={styles.button}>
                    <Grid xs={2}container>
                        <Typography style={styles.sectionText}>{section.code}}</Typography>
                    </Grid>
                    <Grid xs={4}container>
                        <Typography style={styles.sectionText}>{section.enrolledStudentNum}</Typography>
                    </Grid>
                    <Grid xs={2}container>
                        <Typography style={styles.sectionText}>{section.location}</Typography>
                    </Grid>
                    <Grid xs={2}container>
                        <Typography style={styles.sectionText}>{section.time}</Typography>
                    </Grid>
                    <Grid xs={2}container>
                        <Typography style={styles.sectionText}>{section.instructorId}</Typography>
                    </Grid>
                </Button>
                <Divider middle/>
            </Grid>
        )
    }
    render() {
     
        return (
            <Card style={styles.container}>
                <Grid container style={styles.courseInfoContainer}>

                    <Grid xs={11} container>
                        <Grid style={styles.headerContainer}>
                            <Typography style={styles.title}>课程信息</Typography>
                        </Grid>
                    </Grid>

                    <Grid xs={11} style={styles.sectionContainer}>
                        <Button fullWidth style={styles.button}>
                            <Grid xs={2} container>
                                <Typography style={styles.text}>编号</Typography>
                            </Grid>
                            <Grid xs={4} container>
                                <Typography style={styles.text}>接受学生数量</Typography>
                            </Grid>
                            <Grid xs={2} container>
                                <Typography style={styles.text}>地点</Typography>
                            </Grid>
                            <Grid xs={2} container>
                                <Typography style={styles.text}>时间</Typography>
                            </Grid>
                            <Grid xs={2} container>
                                <Typography style={styles.text}>授课人Id</Typography>
                            </Grid>

                        </Button>
                        <Divider middle/>
                    </Grid>

                    {this.state.sections.map(this.renderSection)}

                    <Grid xs={12} style={styles.padding} />

                </Grid>

            </Card>
        );
    }
}

const styles = {

    container: {
        marginBottom: '10px',
    },

    padding: {
        height: '40px'
    },

    sectionContainer:{
        backgroundColor:'#FFF',
        height:'60px',
    },

    headerContainer: {
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: '20px',
        borderLeftWidth: '3px',
        borderLeftColor: '#66ccff',
        borderLeftStyle: 'solid'
    },

    title: {
        color: '#666666',
        fontSize: '35px',
        marginLeft: '10px'
    },

    courseContainer: {
        width: '100%',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseAvatarContainer: {
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseName: {
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '30px',
    },

    courseAvatar: {
        width: '100px',
        height: '100px',
        borderRadius: '5px',
    },

    ratingContainer: {
        justifyContent: 'center',
        height: '20px',
        marginBottom: '10px'
    },

    rating: {
        height: '100%',
        borderRadius: '3px',
        marginLeft: '10px'
    },

    courseInfoContainer: {
        justifyContent: 'center',
    },

    courseInfo: {
        fontSize: '15px',
        textAlign: 'center',
        marginTop: '30px',
    },

    userAvatar: {
        height: '40px',
        width: '40px',
    },

    courseItem: {
        textAlign: 'center'
    },

    text: {
        fontSize:'14px',
        fontWeight:'500',
        color:'#666666',
    },

    sectionText:{
        fontSize:'13px',
    },

    button:{
        height:'59px',
    }

}

export default connect()(CourseSections)
