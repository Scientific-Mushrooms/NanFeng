import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { login } from '../../redux/actions/action';
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from '../../components/CustomButtons/Button'
import { BaseComponent } from '../../components/BaseComponent';


export class SignUp extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            email: '',
            password: '',
            repassword:'',
        };
    }

    goBack = () => {
        this.props.history.goBack();
    }

    signIn = () => {
        this.props.history.push({ pathname: "/signin" })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    signUp = () =>{

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

            this.post('/api/user/create', form).then((result) => {

                if (!result) {
                    this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);

                } else if (result.status === 'fail') {
                        this.pushNotification("danger",result.description,this.props.dispatch);

                } else if (result.status === 'success') {

                    this.props.dispatch(login(result.detail));
                    this.props.history.push('home')
                    this.pushNotification("normal","Regist Succeeded",this.props.dispatch);
                    
                } else {
                    this.pushNotification("danger", "unknown error", this.props.dispatch);
                }
                
            })
        }
    }

    render() {
        return (
            <Grid direction='row' alignItems='center' container>
                {this._renderLeftPanel()}
                {this._renderLoginPanel()}
            </Grid>
        );
    }

    _renderLeftPanel(){
        return(
            <Grid sm={6} justify='center'  container>
                <div>sth here</div>
            </Grid>
        );

    }

    _renderLoginPanel(){
        return(
            <Grid  sm={6} justify='center' container>
                <Card>
                <CardBody>
                    <Grid>
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
                        <Grid>
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
                        <Grid>
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
                        <Grid >
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
                            onClick={this.signIn}
                            >Already A Member</Button>
                        </Grid>
                </CardBody>
                </Card>
                <Button style={{width:"100%"}} onClick={this.goBack}>Go Back</Button>
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
       fontFamily: 'Righteous',
        margin:'0px'
    },

    avatar:{
      width: 100,
      height: 100,
      border: "5px solid yellow",
    },

    cardHead:{
      display: "flex",
      justifyContent: "center",
    }
};
