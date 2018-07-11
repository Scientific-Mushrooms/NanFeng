import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";
import Button from './CustomButtons/Button'
import { login } from '../redux/actions/action';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import { loginBoxHide } from '../redux/actions/action'
import { BaseComponent } from './BaseComponent';


const mapStateToProps = state => ({
    loginbox: state.modalReducer.loginbox,
})

class LoginBox extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            register:false,
        };
    }

    state = {
        username: '',
        password: '',
        invitecode:'',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    _passwordVeri=()=>{
        //do something, @Clavier
        //验证注册时二次输入密码，你的handlechange逻辑我怕写错，你来吧
    }

    _regist=()=>{
        //do something, @Clavier
    }

    _login = () => {

        if (this.account === '' || this.password === '') {
            alert('can not be empty');

        } else {
            let form = new FormData();
            form.append("email", this.state.username);
            form.append("password", this.state.password);

            this.post('/api/user/login', form).then((result) => {
                if (!result){
                    alert("connection to server error")
                }else{
                    if (result.status === 'fail') {
                        alert(result.description);
                    } else {
                        alert("success")
                        this.props.dispatch(login(result.detail));
                        this.props.dispatch(loginBoxHide)
                    }
                }
            })
        }
    };


    render() {
        if(this.state.register){
            return (  
                <Modal 
                open={this.props.loginbox} 
                style={styles.modalContainer} 
                disableAutoFocus={true} 
                onBackdropClick={() => this.props.dispatch(loginBoxHide)}
                >
                    {this._renderRegist()}
                </Modal>
            )
        }
        else
            return(
                <Modal 
                open={this.props.loginbox} 
                style={styles.modalContainer} 
                disableAutoFocus={true} 
                onBackdropClick={() => this.props.dispatch(loginBoxHide)}
                >
                    {this._renderLogin()}
                </Modal>
            )
    }

    _renderLogin=()=>{
        return(
                <Grid style={styles.container} xs={3}>
            <Card>
                <CardHeader color="warning">
                    <h4 style={styles.cardTitleWhite}>Squad Member Stats</h4>
                    <h2 style={styles.cardTitleWhite}>Login In</h2>
                </CardHeader>
                <CardBody>
                    <Grid xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            style={styles.textField}
                            value={this.state.name}
                            onChange={this.handleChange('username')}
                            margin="normal"
                            fullWidth={true}
                        />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                id="password-input"
                                label="Password"
                                style={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handleChange('password')}
                                margin="normal"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button 
                                size="large" 
                                style={styles.button} 
                                color='primary'
                                onClick={this._login}
                                >LOGIN</Button>
                        </Grid>
                        <Grid xs={12}>
                            <Button 
                                size="large" 
                                style={styles.button} 
                                onClick={()=>this.setState({register:true})}
                                color='primary'
                                >Be A New Member</Button>
                        </Grid>
                </CardBody>
            </Card>
                </Grid>
        );
    }
    _renderRegist=()=>{
        return(
                <Grid style={styles.container} xs={3}>
            <Card>
                <CardHeader color="warning">
                    <h4 style={styles.cardTitleWhite}>Squad Member Stats</h4>
                    <h2 style={styles.cardTitleWhite}>Be A New Member</h2>
                </CardHeader>
                <CardBody>
                    <Grid xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            style={styles.textField}
                            value={this.state.name}
                            onChange={this.handleChange('username')}
                            margin="small"
                            fullWidth={true}
                        />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                id="password-input"
                                label="Password"
                                style={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handleChange('password')}
                                margin="small"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                id="password-verify"
                                label="Password Verification"
                                style={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this._passwordVeri('password')}
                                margin="small"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid xs={6}>
                            <TextField
                                id="invitation-check"
                                label="Invitation Code"
                                style={styles.textField}
                                onChange={this.handleChange('invitecode')}
                                margin="normal"
                                fullWidth={false}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button 
                                size="large" 
                                style={styles.button} 
                                color='primary'
                                onClick={this._login}
                                >Sign Up</Button>
                        </Grid>
                        <Grid xs={12}>
                            <Button 
                            size="large" 
                            style={styles.button} 
                            color='primary'
                            onClick={()=>this.setState({register:false})}
                            >Already A Member</Button>
                        </Grid>
                </CardBody>
            </Card>
                </Grid>
        );
    }
}


const styles = {

    container: {
        width: '400px',
        height: '400px',
        marginTop: '100px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField: {
        marginLeft: '10px',
        marginRight: '10px',
    },

    button: {
        width: '100%',
        marginTop: '10px'
    },

    modalContainer: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    
    cardTitleWhite:{
        margin:'0px'
    }
};

export default connect(mapStateToProps)(LoginBox);