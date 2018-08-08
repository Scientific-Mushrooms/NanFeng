import React, {Component} from 'react';
import { Row, Col, Button, Card, Avatar} from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseComponent } from '../../../../components/BaseComponent';

const classrooms = [{
    name: 'Starcraft',
    code: 'GTX1080',
    maxStudentNum: 50,
    currentStudentNum: 30,
}]

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
        console.log(classroom)
        return (
            <Col span={4}>
                <Card style={styles.cardContainer}>
                    <Avatar shape="square" size={200} icon="user" />
                    <Row >{classroom.name}</Row>
                    <Row >{classroom.code}</Row>
                    <Row >{classroom.currentStudentNum}/{classroom.currentStudentNum}</Row>
                </Card>
            </Col>
        )
    }

    render() {
        return (
            <Row>
                <Card>
                    <Row align='bottom' type='flex'>
                        <Col span={8} align='bottom'>Name</Col>
                        <Col span={8}></Col>
                        <Col span={8} align='bottom'>
                            <Button type='primary' icon='plus-square' size={20} onClick={() => {this.props.history.push('/classroomCreate')}}>Create</Button>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.classrooms.map(this.renderCard)}
                    </Row>
                </Card>
            </Row>
        );
    }
}

const styles = {

    cardContainer: {
        borderRadius: '5px',
    }
}


const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})

export default connect(mapStateToProps)(withRouter(ClassroomList));