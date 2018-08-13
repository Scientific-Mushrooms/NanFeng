import React from 'react';
import {Row, Col, Card, AutoComplete, Button} from 'antd'
import { BaseComponent } from '../../../../components/BaseComponent';
import { withRouter } from 'react-router-dom';


class AddAssignment extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedStudentId: null,
            realNameDataSource: [],
        };
    }

    onClickCreate = () => {
        this.props.history.push("/assignmentCreate/" + this.props.classroomId);
    }

    render() {

        return (
            <Row>
                <Button type='primary' onClick={this.onClickCreate}>New Assignment</Button>
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

export default withRouter(AddAssignment);