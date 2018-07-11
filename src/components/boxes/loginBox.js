import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import Button from '../CustomButtons/Button'
import { login } from '../../redux/actions/action';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import { loginBoxHide } from '../../redux/actions/action'
import { BaseComponent } from '../BaseComponent';


const mapStateToProps = state => ({
    loginbox: state.modalReducer.loginbox,
})

class LoginBox extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            register: false,
            email: '',
            password: '',
            repassword: '',
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    signUp=()=>{
        if (this.state.email === '' ) {
            this.pushNotification("danger","Username Can't Be Empty",this.props.dispatch);
        } else if(this.state.password === ''){
            this.pushNotification("danger","Password Can't Be Empty",this.props.dispatch);
        }else if (this.state.password !== this.state.repassword) {
            this.pushNotification("danger","Wrong Repassword",this.props.dispatch);
        } else {
            let form = new FormData();
            form.append("email", this.state.email);
            form.append("password", this.state.password);

            this.post('/api/security/signup', form).then((result) => {
                if (!result) {
                    this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);
                } else {
                    if (result.status === 'fail') {
                        this.pushNotification("danger",result.description,this.props.dispatch);
                    } else {
                        this.props.dispatch(login(result.detail));
                        this.props.dispatch(loginBoxHide)
                        this.pushNotification("normal","Sign Up Succeeded",this.props.dispatch);
                    }
                }
            })
        }
    }

    login = () => {
        if (this.state.email === '' ) {
            this.pushNotification("danger","Username Can't Be Empty",this.props.dispatch);
        } else if(this.state.password === ''){
            this.pushNotification("danger","Password Can't Be Empty",this.props.dispatch);
        } else {
            let form = new FormData();
            form.append("email", this.state.email);
            form.append("password", this.state.password);

            this.post('/api/security/login', form).then((result) => {
                if (!result){
                    this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);
                }else{
                    if (result.status === 'fail') {
                        this.pushNotification("danger",result.description,this.props.dispatch);
                    } else {
                        this.props.dispatch(login(result.detail));
                        this.props.dispatch(loginBoxHide)
                        this.pushNotification("normal","Login Succeeded",this.props.dispatch);
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
                    <h2 style={styles.cardTitleWhite}>Login In</h2>
                </CardHeader>
                <CardBody>
                    <Grid xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            style={styles.textField}
                            value={this.state.name}
                            onChange={this.handleChange('email')}
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
                                onClick={this.login}
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
                    <h2 style={styles.cardTitleWhite}>Be A New Member</h2>
                </CardHeader>
                <CardBody>
                    <Grid xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            style={styles.textField}
                            value={this.state.name}
                            onChange={this.handleChange('email')}
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
                                onChange={this.handleChange('repassword')}
                                margin="small"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button 
                                size="large" 
                                style={styles.button} 
                                color='primary'
                                onClick={this.signUp}
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