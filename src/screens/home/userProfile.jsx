import React, {Component} from "react";
import { BaseComponent } from '../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover} from '@material-ui/core';

import { FormControl} from 'react-bootstrap';
import notification from "../../components/layouts/notification";

export class UserProfile extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            infoLoaded:false,
            infoChange:false,
            email: null,
            name: null,
            avatar: [],
            passChange:false,
            oldPass:null,
            newPass: null,
            reNewPass:null,
        };
    }

    componentDidMount(){
        //get info from server
        //once done
        this.setState({infoLoaded:true})
    }

    _handleChange = variable => event => {
        if(this.state.infoLoaded==true){
            if(this.state.infoChange==false&&(variable=='email'||variable=='name'))
                this.setState({infoChange:true})
            if(this.state.passChange==false&&(variable=='oldPass'||variable=='newPass'||variable=='reNewPass'))
                this.setState({passChange:true})
        }
        this.setState({
            [variable]: event.target.value,
        });
    }

    renderChooseAvatar = () => {
        var onChange = (avatar) => {
            this.setState({
                infoChange:true,
                avatar: this.state.avatar.concat(avatar)
            });     
        } 

        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>Avatar: </Typography>
                <ImageUploader
                    withIcon={false}
                    withLabel={false}
                    withPreview={true}
                    buttonText='Choose images'
                    onChange={onChange}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={5242880}
                    singleImage={true}
                />
            </Grid>
        )
    }

    renderTextInput = (name, variable) => {
        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>{name} :</Typography>
                <FormControl type="text" onChange={this._handleChange(variable)} />
            </Grid>
        )
    }

    renderPassInput=(name, variable) => {
        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>{name} :</Typography>
                <FormControl  type="password" onChange={this._handleChange(variable)} />
            </Grid>
        )
    }

    renderPassWarning= () => {
        if(this.state.passChange==true&&this.state.reNewPass!=this.state.newPass)
            return(
                 <Grid direction='row' alignItems='center' xs={4} container>
                    <Icon style={{color:'red'}}>warning</Icon>
                    <Typography style={styles.warning}>Repassword Wrong</Typography>
                </Grid>
            )
    }

    render(){
        return (
            <Grid alignItems='center' direction='column' container>
                <Grid container xs={8}>
                    <Typography variant='display3'>Your Profile</Typography>
                </Grid>
                <Grid style={styles.container}direction='column' container xs={8}>
                    <Typography variant='display2'>Info Settings</Typography>
                    <Divider/>
                    {this.renderTextInput("Nickname","name")}
                    {this.renderTextInput("Email","email")}
                    {this.renderChooseAvatar()}
                    <Grid justify='center' container xs={8}>
                        <Button  
                        mini
                        style={styles.button}
                        variant='fab'
                        disabled={!this.state.infoChange} 
                        onClick={this.changeInfo}
                        >
                            <Typography variant='button'style={{fontSize:'50%'}}>Save Info</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid style={styles.container} direction='column' container xs={8}>
                    <Typography variant='display2'>Security Settings</Typography>
                    <Divider/>
                    {this.renderPassInput("Old Password","oldPass")}
                    {this.renderPassInput("New Password","newPass")}
                    <Grid style={styles.inputContainer}direction='row' container xs={12}>
                        <Typography style={styles.typography}>Confirm New Password :</Typography>
                        <Grid direction='row' container>
                            <Grid xs={8}>
                                <FormControl  type="password" onChange={this._handleChange("reNewPass")} />
                            </Grid>
                            {this.renderPassWarning()}
                        </Grid>
                    </Grid>
                    <Grid justify='center' container xs={8}>
                        <Button  
                        mini
                        style={styles.button}
                        variant='fab'
                        disabled={!this.state.passChange} 
                        onClick={this.changePass}
                        >
                            <Typography variant='button'style={{fontSize:'50%'}}>Change Password</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    changePass= () => {
        this.pushNotification("danger", this.state.newPass, this.props.dispatch);
    }
}


const styles = {

    
    button:{
        borderRadius: "20px",
        width:"50%",
    },

    typography:{
        fontSize:'130%'
    },

    warning:{
        color:"red",
        fontSize:'130%'
    },

    container:{
        marginTop:'20px',
        marginBottom:'20px'
    },

    inputContainer: {
        marginBottom: '5px'
    },

    input: {
        borderRadius: '6px'
    },

    textContainer: {
        justifyContent: 'flex-end'
    },

    introContainer: {
        height: '80px'
    }


};