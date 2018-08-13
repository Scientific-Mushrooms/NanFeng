import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate} from '../../../../components';



export class AssignmentInfo extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            assignment: null,
        };
    }

    render() {

        if (this.props.assignment === null) {
            return null
        }

        return (
            <Row type='flex' justify='center'>
                111111
            </Row>
        );
    }
}

