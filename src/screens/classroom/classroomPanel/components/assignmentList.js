import React, {Component} from 'react';
import { Row, Col, Card, } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseComponent } from '../../../../components/BaseComponent';
import {Avatar} from '../../../../components'
import { Button } from '@material-ui/core';


class AssignmentList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classroomId: this.props.classroomId,
            assignments: [],
        };
    }

    componentWillMount = () => {
        this.fetchAssignments(this.state.classroomId)
    }

    renderAssignment = (assignment, index) => {

        var onClick = () => {
            this.props.history.push("/assignmentPanel/" + assignment.assignmentId)
        }

        return (
            <Row>
                <Button fullWidth onClick={onClick}>
                    <Col span={4}>{assignment.name}</Col>
                    <Col span={4}>{assignment.type}</Col>
                    <Col span={4}>{assignment.status}</Col>
                    <Col span={4}>{assignment.deadline}</Col>
                </Button>
            </Row>
        )
    }

    renderTitle = () => {
        return (
            <Row type='flex' justify='center'>
                <Col span={4}>Name</Col>
                <Col span={4}>Type</Col>
                <Col span={4}>Status</Col>
                <Col span={4}>Deadline</Col>
            </Row>
        )
    }

    fetchAssignments = (classroomId) => {

        let form = new FormData()
        form.append("classroomId", classroomId)
  

        var successAction = (result) => {
            console.log(result)
            this.setState({assignments: result.detail})
        }

        this.newPost("/api/assignment/classroomIdToAllAssignments", form, successAction)

    }

    render() {

        if (this.props.classroomId === null) {
            return null;
        }

        return (
            <Row>
                {this.renderTitle()}
                {this.state.assignments.map(this.renderAssignment)}
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

export default withRouter(AssignmentList);