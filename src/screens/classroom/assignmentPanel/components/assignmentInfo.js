import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate} from '../../../../components';



export class AssignmentInfo extends BaseComponent {

    renderQuestion = () => {
        
        let {type, name} = this.props.assignment
        let {topic} = this.props.discussion

        if (type === 'discussion') {
            return (
                <Row>
                    <Row>Name: {name}</Row>
                    <Row>Type: {type}</Row>
                    <Row>Topic: {topic}</Row>
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
                {this.renderQuestion()}
            </Row>
        );
    }
}

