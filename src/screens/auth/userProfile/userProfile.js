import React, {Component} from "react";
import { BaseComponent } from '../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Card} from '@material-ui/core';


import { update } from '../../../redux/actions/action';


import PersonalInformation from './components/personalInformation';
import InstructorVerification from './components/instructorVerification';
import { FormControl } from 'react-bootstrap';
import ChangePassword from './components/changePassword';
import ChangeAvatar from './components/changeAvatar';
import StudentVerification from './components/studentVerification';

export class UserProfile extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {       
            verified: false,

            passChange:false,
            oldPass:null,
            newPass: null,
            reNewPass:null,
        };
        if (this.props.user === null) {
            this.props.history.push("/home");
        }
    }


    render(){
        return (
            <Grid container spacing={16}>

                <Grid xs={7} item>
                    <Card>


                        <Grid container >
                            <Typography variant='display3' style={styles.header}>Your Profile</Typography>
                        </Grid>

                        <PersonalInformation/>

                        <ChangePassword/>

                    </Card>
                </Grid>

                <Grid xs={5} item>

                    <ChangeAvatar />

                    <InstructorVerification />

                    <StudentVerification/>

                </Grid>

            </Grid>
        );
    }

}


const styles = {

    header:{
      marginLeft:'20px',
        color:'#57bad8',
    },

};
