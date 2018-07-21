import React, {Component} from "react";
import { BaseComponent } from '../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Input, TextField, Popover} from '@material-ui/core';

import { FormControl} from 'react-bootstrap';

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

    componentWillMount(){
        //get info from server
        //once done
        this.state.infoLoaded=false
    }

    _handleChange = (variable) => {
        if(this.state.infoLoaded==true)
            if(this.state.infoChange==false&&(variable=='email'||variable=='name'))
                this.setState({infoChange:true})
        this.handleChange(variable)
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
                    {this.renderTextInput("Old Password","oldPass")}
                    {this.renderTextInput("New Password","newPass")}
                    {this.renderTextInput("Confirm New Password","reNewPass")}
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
}


const styles = {

    
    button:{
        borderRadius: "20px",
        width:"50%",
    },

    typography:{
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