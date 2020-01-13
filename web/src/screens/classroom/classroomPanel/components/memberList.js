import React, {Component} from 'react';
import { Row, Col, Card, } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseComponent } from '../../../../components/BaseComponent';
import {Avatar} from '../../../../components'

class MemberList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classroomId: this.props.classroomId,
            students: [],
        };
    }

    componentWillMount = () => {
        this.fetchMembers(this.state.classroomId)
    }

    renderStudent = (student) => {
        return (
            <Col span={4}>
                <Row type='flex' justify='center'>
                    <Avatar shape='round' size={80} src={this.studentIdToImage(student.studentId)} />
                </Row>
                <Row type='flex' justify='center'>
                    {student.realName}
                </Row>
            </Col>
        )
    }

    fetchMembers = (classroomId) => {

        let form = new FormData()
        form.append("classroomId", classroomId)
        console.log(classroomId)

        var successAction = (result) => {
            console.log(result)
            this.setState({students: result.detail})
        }

        this.newPost("/api/classroomMember/classroomIdToAllStudents", form, successAction)

    }

    render() {

        if (this.props.classroomId === null) {
            return null;
        }

        return (
            <Row>
                {this.state.students.map(this.renderStudent)}
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

export default connect(mapStateToProps)(withRouter(MemberList));