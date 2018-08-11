import React, {Component} from 'react';
import {Row, Col, Card, AutoComplete, Button} from 'antd'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseComponent } from '../../../../components/BaseComponent';
import {Avatar} from '../../../../components'
const Option = AutoComplete.Option;



class AddStudent extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classroom: null,
            realNameDataSource: [],
        };
    }

    fetchRealNameDataSource = (realName) => {

        let form = new FormData();
        form.append('realName', realName);

        var successAction = (result) => {
            console.log(result)
            this.setState({realNameDataSource: result.detail});
        }

        this.newPost('/api/student/searchByRealName', form, successAction);

    }

    realNameOnChange = (value) => {
        this.fetchRealNameDataSource(value);
    }

    renderRealNameDataSource = (student, index) => {
        return (
            <Option key={student.code} text={"2"} onClick={() => {console.log("2333")}}>
                <a target="_blank" rel="noopener noreferrer">
                    {student.realName}
                </a>
                <span className="global-search-item-count">约 个结果</span>
            </Option>
        )
    }

    onSelect = (value) => {
        console.log(value)
    }




    render() {

        if (this.props.classroom === null) {
            return null;
        }

        var classroom = this.props.classroom;

        return (
            <Row>
                <AutoComplete onSelect={this.onSelect} dataSource={this.state.realNameDataSource.map(this.renderRealNameDataSource)} onChange={this.realNameOnChange}/>
                <Button type='default'>Add</Button>
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

export default AddStudent;