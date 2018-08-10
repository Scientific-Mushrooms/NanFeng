import React, {Component} from 'react';
import { Row, Col, Card} from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseComponent } from '../../../../components/BaseComponent';
import {Avatar} from '../../../../components'
import { Button } from '@material-ui/core';

class ClassroomList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            avatarUrl: null,
            classrooms: [],
        };
    }

    componentWillMount = () => {

        var instructorId = sessionStorage.getItem('instructorId');

        if (instructorId === null) {
            this.props.history.push("/home")
            return;
        }

        this.fetchClassrooms(instructorId);

    }

    fetchClassrooms = (instructorId) => {
        let form = new FormData();
        form.append("instructorId", instructorId);

        this.post('/api/classroom/instructorIdToAllClassrooms', form).then((result) => {
            console.log(result)

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);
                return;
            }

            if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);
                return;
            }

            if (result.status === 'success') {

                this.setState({classrooms: result.detail});
                this.pushNotification("success", "successfully fetch classrooms", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    renderCard = (classroom, index) => {

        var goToClassroom = (classroomId) => () => {
            this.props.history.push('/classroomPanel/' + classroomId);
        }

        return (
           
            <Col span={4}>
                <Button  style={styles.test} onClick={goToClassroom(classroom.classroomId)}>
                    <Card style={styles.cardContainer} bordered={false}>
                     
                        <Avatar shape="square" size={100} src={this.getImagePath(classroom.avatarId)} />
                        <Row style={styles.classroomTitle}>{classroom.name}</Row>
                        <Row style={styles.text}>{classroom.code}</Row>
                        <Row style={styles.text}>{classroom.currentStudentNum}/{classroom.currentStudentNum}</Row>
                    
                    </Card>
                </Button>
            </Col>
        )
    }

    render() {
        return (
            <Row>
                {this.state.classrooms.map(this.renderCard)}
            </Row>
        );
    }
}

const styles = {

    cardContainer: {
        borderRadius: '5px',
    },

    text: {
        textAlign: 'center'
    },

    classroomTitle: {
        textAlign: 'center',
        fontSize: '20px'
    },

    test: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    }
}


const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})

export default connect(mapStateToProps)(withRouter(ClassroomList));