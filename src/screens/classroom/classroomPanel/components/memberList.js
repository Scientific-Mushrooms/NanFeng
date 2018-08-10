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
            classroom: this.props.classroom,
        };
    }

    render() {

        if (this.props.classroom === null) {
            return null;
        }

        return (
            <Row>
                <Col span={4}>
                    
                </Col>
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