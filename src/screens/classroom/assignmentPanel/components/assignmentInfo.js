import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload,Card} from 'antd';
import { BaseComponent } from '../../../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate} from '../../../../components';
import {Avatar} from '../../../../components';


export class AssignmentInfo extends BaseComponent {

    renderQuestion = () => {
        
        let {type, name} = this.props.assignment
        let {topic} = this.props.discussion
        let {instructor}=this.props.assignment
        let avatarId = this.props.classroom;

        if (type === 'discussion') {
            return (
                <Row type='flex' justify='start'>
                    <Col offset={1} span={6}>
                        <Avatar shape="square" size={100} src={this.getImagePath(avatarId)} />
                    </Col>
                    <Col span={8}>
                        <Row style={styles.discussionTitle}>{type}: {topic}</Row>
                        <Row type='flex' justify='center'>Name: {name}</Row>
                        <Row type='flex' justify='center'>Instructor: {instructor}</Row>
                    </Col>
                </Row>
            )
        }

        if (type === 'quiz') {
            return (
                <Row>
                    <Row>Name: {name}</Row>
                    <Row>Type: {type}</Row>
                    <Row>Topic: {topic}</Row>
                </Row>
            )
        }
    }

    render() {
        const {assignment} = this.props

        if (assignment === null) {
            return null
        }

        return (
            <Row>
                <Col span={12} offset={1}>
                {this.renderQuestion()}
                </Col>
            </Row>
        );
    }
}

const styles = {

    discussionTitle: {
        textAlign: 'center',
        fontSize: '30px'
    },

}

