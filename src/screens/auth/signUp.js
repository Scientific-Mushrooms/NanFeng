import React, { Component } from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Button } from '@material-ui/core';

import Grid from "@material-ui/core/Grid";


export class SignUp extends BaseComponent {

    goBack = () => {
        this.props.history.goBack();
    }
    
    render() {
        return (
            <Grid container>
                <Button onClick={this.goBack}>Go Back</Button>
                <div>this is sign up</div>
            </Grid>
        );
    }
}


