import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row, Col} from 'antd';

class ChangePassword extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            instructor: null,
            userId: null,


            realName: null,
            instructorCode: null,
            studentCode: null,
        };
    }

    renderPassInput = (name, variable) => {
        return (
            <Row style={styles.inputContainer}>
                <Col span={6}>
                <Typography style={styles.typography}>{name} :</Typography>
                </Col>
                <Col span={18}>
                    <FormControl type="password" onChange={this.handleChange(variable)} />
                </Col>
            </Row>
        )
    }

    renderPassWarning = () => {
        if (this.state.passChange == true && this.state.reNewPass != this.state.newPass)
            return (
                <Row align='middle' span={8}>
                    <Icon style={{ color: 'red' }}>warning</Icon>
                    <Typography style={styles.warning}>Repassword Wrong</Typography>
                </Row>
            )
    }

    changePass = () => {
        if (this.state.oldPass == null || this.state.newPass == null || this.state.reNewPass == null) {
            this.pushNotification("danger", "Please enter the Password", this.props.dispatch);
        } else if (this.state.newPass != this.state.reNewPass) {
            this.pushNotification("danger", "Please enter the right Repassword", this.props.dispatch);
        } else {
            //post here
        }
    }

    renderVarifyIdentity = () => {
        return (
            <Row style={styles.inputContainer} span={16}>
                <Typography style={styles.typography}>用户名:</Typography>
                <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
            </Row>
        )
    }

    render() {
        return (
            <div>
                <Typography variant='display2'>修改密码</Typography>
                <Divider/>
                <div style={{height:'25px'}}></div>
                    {this.renderPassInput("输入原密码", "oldPass")}
                    {this.renderPassInput("输入新密码", "newPass")}
                    <Row style={styles.inputContainer}>
                        <Col span={6}>
                    <Typography style={styles.typography}>再次输入密码:</Typography>
                        </Col>
                    <Col span={18}>
                        <FormControl type="password" onChange={this.handleChange("reNewPass")} />
                    </Col>
                    {this.renderPassWarning()}
                </Row>
                <Row justify='center' type='flex'>
                    <Button
                        mini
                        variant="outlined"
                        style={styles.button}
                        onClick={this.changePass}>
                        <Typography variant='button' style={styles.buttonText}>提交修改</Typography>
                    </Button>
                </Row>
            </div>
        );
    }
}


const styles = {


    button: {
        marginTop: '20px',
        marginBottom:'20px',
        borderRadius: "5px",
        borderWidth:"1.2px",
        borderColor:"#60CDEE",
        width: "20%",
        height:'40px',
    },

    buttonText:{
        fontSize:'12px',
        color:'#60CDEE'
    },

    typography: {
        fontSize: '130%'
    },

    warning: {
        color: "red",
        fontSize: '130%'
    },

    container: {
        marginTop: '20px',
        marginLeft:'20px',
    },

    inputContainer: {
        marginTop: '20px',
        marginLeft:'20px',
    },

    input: {
        borderRadius: '6px'
    },

    textContainer: {
        justifyContent: 'flex-end'
    },

    introContainer: {
        height:'80px',
    },

};


const mapStateToProps = state => ({
    user: state.identityReducer.user
})


export default connect(mapStateToProps)(ChangePassword);
