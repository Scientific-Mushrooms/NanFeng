import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate} from '../../../components';
import { AssignmentInfo } from './components/assignmentInfo';

export class AssignmentPanel extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            assignmentId: this.props.match.params.assignmentId,
            assignment: null,
        };
    }

    componentWillMount = () => {
        this.fetchAssignment(this.state.assignmentId)
    }

    fetchAssignment = (assignmentId) => {

        let form = new FormData()
        form.append('assignmentId', assignmentId)

        let successAction = (result) => {
            console.log(result)
            this.setState({assignment: result.detail})
        }

        this.newPost('/api/assignment/assignmentIdToAssignment', form, successAction)
    }


    setTask = (task) => {
        this.setState({task: task})
    }

    render() {

        if (this.state.assignment === null) {
            return null
        }

        return (
            <Row type='flex' justify='center'>
                <AssignmentInfo assignment={this.state.assignment}/>
                23323
            </Row>
        );
    }
}


