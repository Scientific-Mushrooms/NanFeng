import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography} from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { set_instructor } from '../../../../redux/actions/action';
import { Row, Col, Card} from 'antd';

class InstructorVerification extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            update: false,
            realName: null,
            code: null,
        };
    }

    create = () => {

        let form = new FormData();
        form.append("userId", this.props.user.userId);
        form.append("code", this.state.code);
        form.append("realName", this.state.realName);

        var successAction = (result) => {
            this.props.dispatch(set_instructor(result.detail));
            this.pushNotification("success", "successfully create instructor! ");
        }

        this.newPost('/api/instructor/create', form, successAction);
    }

    submit = () => {
        let form = new FormData();
        form.append("instructorId", this.props.instructor.instructorId);
        form.append("code", this.state.code);
        form.append("realName", this.state.realName);

        var successAction = (result) => {
            this.props.dispatch(set_instructor(result.detail))
            this.setState({ update: false })
            this.pushNotification("success", "successfully fetch instructor info", this.props.dispatch);
        }

        this.newPost('/api/instructor/updateByInstructorId', form, successAction);
    }

    update = () => {
        this.setState({update: true})
    }

   
    render() {

        if (this.props.instructor === null) {
            return (
                <Card>
                    <Row type='flex' justify='center'>
                        <Col xs={8}>
                            <Typography style={styles.typography}>您的姓名:</Typography>
                        </Col>
                        <Col xs={16}>
                            <FormControl type="text" value={this.state.realName} onChange={this.handleChange("realName")} />
                        </Col>
                    </Row>

                    <Row type='flex' justify='center'>
                        <Col xs={8}>
                            <Typography style={styles.typography}>学工号:</Typography>
                        </Col>
                        <Col xs={16}>
                            <FormControl type="text" value={this.state.code} onChange={this.handleChange("code")} />
                        </Col>
                    </Row>

                    <Row type='flex' justify='center'>
                        <Button mini style={styles.button} variant="outlined" onClick={this.create} >
                            <Typography variant='button' style={styles.buttonText}>提交</Typography>
                        </Button>
                    </Row>

                </Card>
            )
        }

        if (this.state.update) {
            return (
                <Card>
                    <Row type='flex' justify='center'>
                        <Col span={8}>
                            <Typography style={styles.typography}>真实姓名:</Typography>
                        </Col>
                        <Col span={16}>
                            <FormControl type="text" value={this.state.realName} onChange={this.handleChange("realName")} />
                        </Col>
                    </Row>

                    <Row type='flex' justify='center'>
                        <Col span={8}>
                            <Typography style={styles.typography}>学工号:</Typography>
                        </Col>
                        <Col xs={16}>
                            <FormControl type="text" value={this.state.code} onChange={this.handleChange("code")} />
                        </Col>
                    </Row>

                    <Row type='flex' justify='center'>
                        <Button mini style={styles.button} variant="outlined" onClick={this.submit} >
                            <Typography variant='button' style={styles.buttonText}>提交</Typography>
                        </Button>
                    </Row>

                </Card>

            )
        }

        return (
            <Card>
                <Row type='flex' justify='center'>
                    <Typography style={styles.name}>{this.props.instructor.realName}</Typography>
                </Row>

                <Row type='flex' justify='center'>
                    <Typography style={styles.code}>{this.props.instructor.code}</Typography>
                </Row>

                <Row type='flex' justify='center'>
                    <Typography style={styles.instructor}>Verified Instructor</Typography>
                </Row>

                <Row type='flex' justify='center'>
                    <Button
                        mini
                        style={styles.button}
                        variant="outlined"
                        onClick={this.update} >
                        <Typography variant='button' style={styles.buttonText}>更新</Typography>
                    </Button>
                </Row>
            </Card>
        );
    }
}


const styles = {

    button: {
        marginTop:'20px',
        marginBottom:'10px',
        borderRadius: "5px",
        borderWidth:"1.2px",
        borderColor:"#60CDEE",
        width: "40%",
        height:'40px',
    },

    buttonText:{
        fontSize:'12px',
        color:'#60CDEE'
    },

    container: {
        marginTop:'10px',
        marginBottom: '10px',
    },

    typography: {
        fontSize: '130%'
    },

    name:{
        fontSize:'130%',
        color:'#404040',
    },

    code:{
        fontSize:'130%',
    },

    instructor:{
        fontSize:'130%',
        color:'#5DB95D',
    }

};


const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})


export default connect(mapStateToProps)(InstructorVerification);
