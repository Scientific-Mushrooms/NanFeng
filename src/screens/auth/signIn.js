import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { login } from '../../redux/actions/action';
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from '../../components/CustomButtons/Button'
import { BaseComponent } from '../../components/BaseComponent';


export class SignIn extends BaseComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            email: '',
            password: '',
        };
    }

    goBack = () => {
        this.props.history.goBack();
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

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
                        this.goBack();
                        //should be redirect to home here
                        this.pushNotification("normal","Login Succeeded",this.props.dispatch);
                    }
                }
            })
        }
    };

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
            <Grid direction='column' sm={6} justify='center' container style={styles.wrapper}>
                <Card>
                    <CardBody>
                        <Grid >
                            <TextField
                                id="name"
                                label="Name"
                                style={styles.textField}
                                value={this.state.name}
                                onChange={this.handleChange('email')}
                                margin="none"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid >
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
                        <Grid >
                            <Button
                                size="large"
                                style={styles.button}
                                color='primary'
                                onClick={this.login}
                                >LOGIN</Button>
                        </Grid>
                    </CardBody>
                </Card>          
                <Button style={{width:"100%"}} onClick={this.goBack}>Go Back</Button>
            </Grid>
        );
    }
}





const styles = {

    wrapper: {
        paddingBottom: '500px'
    },

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