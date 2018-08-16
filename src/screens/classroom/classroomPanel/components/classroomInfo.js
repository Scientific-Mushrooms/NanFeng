import React, {Component} from 'react';
import { Row, Col, Card} from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseComponent } from '../../../../components/BaseComponent';
import {Avatar} from '../../../../components'

class ClassroomInfo extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            avatarUrl: null,
            classroom: this.props.classroom,
        };
    }




    render() {

        if (this.props.classroom === null) {
            return null;
        }

        var classroom = this.props.classroom;

        return (
            <div style={styles.cardContainer}>
                <Row>
                    <Col offset={1} span={4}>
                        <Avatar shape="square" size={100} src={this.getImagePath(classroom.avatarId)} />
                    </Col>
                    <Col span={6}>
                        <Row style={styles.classroomTitle}>{classroom.name}</Row>
                        <Row style={styles.text}>{classroom.code}</Row>
                        <Row style={styles.text}>{classroom.currentStudentNum}/{classroom.currentStudentNum}</Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

const styles = {

    cardContainer: {
        borderRadius: '5px',
        height:'120px',
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

export default ClassroomInfo;
