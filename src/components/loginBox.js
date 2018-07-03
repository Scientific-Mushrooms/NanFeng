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

const mapStateToProps = state => ({
    user: state.userReducer.info,
    loginbox: state.modalReducer.loginbox,
})

class LoginBox extends Component {

    state = {
        username: '',
        password: '',
    };

    _handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    _login = () => {

        if (this.account == '' || this.password == '') {
            alert('can not be empty');

        } else {
            let form = new FormData();
            form.append("email", this.state.username);
            form.append("password", this.state.password);

            this.post('/api/user/login', form).then((result) => {
                if (result.status == 'fail') {
                    alert(result.description);
                } else {
                    alert("success")
                    this.props.dispatch(login(result.detail));
                    this.props.dispatch(loginBoxHide)
                }
            })
        }
    };

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    render() {
        return (
            <Modal 
                open={this.props.loginbox} 
                style={styles.modalContainer} 
                disableAutoFocus={true} 
                onBackdropClick={() => this.props.dispatch(loginBoxHide)}
                >
                <Grid style={styles.container} xs={3}>
            <Card>
                <CardHeader color="warning">
                    <h4 style={styles.cardTitleWhite}>Squad Member Stats</h4>
                </CardHeader>
                <CardBody>
                    <Grid xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            style={styles.textField}
                            value={this.state.name}
                            onChange={this._handleChange('username')}
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
                                onChange={this._handleChange('password')}
                                margin="normal"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button 
                                size="large" 
                                style={styles.button} 
                                color='primary'
                                onChange
                                onClick={this._login}
                                >LOGIN</Button>
                        </Grid>
                        <Grid xs={12}>
                            <Button size="large" style={styles.button} color='primary'>SIGN UP</Button>
                        </Grid>
                </CardBody>
            </Card>
                </Grid>
            </Modal>
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
    }
};


export default connect(mapStateToProps)(LoginBox);