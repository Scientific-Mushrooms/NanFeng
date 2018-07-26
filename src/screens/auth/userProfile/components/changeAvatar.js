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
            <Card style={styles.card}>

                <Grid xs={12} style={styles.avatarContainer} container>
                    <img src={require('../../src/nju.png')} style={styles.avatar} />
                </Grid>

                <Grid style={styles.container} justify='center' container xs={12}>
                    <Grid justify='center' container xs={8}>
                        <Button
                            mini
                            style={styles.button}
                            variant="outlined" >
                            <Typography variant='button' style={styles.buttonText}>Change Avatar</Typography>
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
        marginBottom:'10px',
        borderRadius: "5px",
        borderWidth:"1.2px",
        borderColor:"#60CDEE",
        width: "50%",
    },

    buttonText:{
        fontSize:'12px',
        color:'#60CDEE'
    },

    card:{
        marginBottom:'20px',
    },

    avatarContainer: {
        marginTop:'10px',
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center'
    },

    avatar: {
        marginTop:'10px',
        marginBottom:'10px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
    },

};


const mapStateToProps = state => ({
    user: state.userReducer.user
})


export default connect(mapStateToProps)(ChangeAvatar);
