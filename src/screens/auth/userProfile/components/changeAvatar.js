import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Icon, Card } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';


class ChangeAvatar extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            instructor: null,
            userId: null,
        };
    }


    render() {
        return (
            <Card style={styles.container}>
                <Grid  item xs={8}>

                        <Grid justify='center' container xs={8}>
                            <Button style={styles.button} >
                                <Typography variant='button' >Change Password</Typography>
                            </Button>
                        </Grid>

                </Grid>
            </Card>
        );
    }
}


const styles = {

    container: {
        marginBottom: '20px'
    },

    button: {
        marginTop: '10px',
        borderRadius: "20px",
        width: "50%",
    },

};


const mapStateToProps = state => ({
    user: state.userReducer.user
})


export default connect(mapStateToProps)(ChangeAvatar);