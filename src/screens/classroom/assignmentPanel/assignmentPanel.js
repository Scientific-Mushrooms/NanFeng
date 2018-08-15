import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar, Card } from 'antd';
import { BaseComponent } from '../../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate} from '../../../components';
import { AssignmentInfo } from './components/assignmentInfo';
import DiscussionCard from './components/discussionCard';
import { QuizCard } from './components/quizCard';


export class AssignmentPanel extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            assignmentId: this.props.match.params.assignmentId,
            assignment: null,
            discussion: null,
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
            this.setState({assignment: result.detail, discussion: result.more})
        }

        this.newPost('/api/assignment/assignmentIdToAssignment', form, successAction)
    }


    setTask = (task) => {
        this.setState({task: task})
    }

    renderContent = () => {
        return (
            <DiscussionCard discussion={this.state.discussion}/>
        )
    }

    render() {

        if (this.state.assignment === null) {
            return null
        }

        return (
            <Row>

                <Row>
                    <Card>
                        <AssignmentInfo assignment={this.state.assignment} discussion={this.state.discussion}/>
                    </Card>
                </Row>

                <Row>
                    <Card>
                        {this.renderContent()}
                    </Card>
                </Row>

            </Row>
        );
    }
}


