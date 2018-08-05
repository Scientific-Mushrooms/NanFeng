import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { update } from '../../../../redux/actions/action';
import { connect } from 'react-redux';




class PersonalInformation extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            email: null,
            nickName: null,
        };
    }

    componentWillMount = () => {
        if (this.props.user !== null) {
            this.setState({
                userId: this.props.user.userId,
                email: this.props.user.email,
                nickName: this.props.user.nickName,
            })
        }
    }

    renderChooseAvatar = () => {

        var onChange = (avatar) => {
            this.setState({
                infoChange: true,
                avatar: this.state.avatar.concat(avatar)
            });
        }

        return (
            <Grid container>
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

    save = () => {

        let form = new FormData();
        form.append("userId", this.state.userId);
        form.append("nickName", this.state.nickName);
        form.append("email", this.state.email);

        this.post('/api/user/update', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.props.dispatch(update(result.detail))
                this.pushNotification("success", "successfully update info", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    
    render() {
        return (
            <Grid style={styles.container} direction='column' container xs={8}>

                <Typography variant='display2'>Personal Information</Typography>
                <Divider/>
                <Grid container style={styles.container}>
                    <Grid xs={3}>
                        <Typography style={styles.typography}>Nick Name :</Typography>
                    </Grid>
                    <Grid xs={8}>
                        <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
                    </Grid>
                </Grid>

                <Grid container style={styles.container}>
                    <Grid xs={3}>
                        <Typography style={styles.typography}>Email :</Typography>
                    </Grid>
                    <Grid xs={8}>
                        <FormControl type="text" value={this.state.email} onChange={this.handleChange("email")} />
                    </Grid>
                </Grid>

                {/* {this.renderChooseAvatar()} */}

                <Grid justify='center' container xs={12}>
                    <Button
                        mini
                        style={styles.button}
                        variant="outlined"
                        onClick={this.save} >
                        <Typography variant='button' style={styles.buttonText}>Save</Typography>
                    </Button>
                </Grid>

            </Grid>
        );
    }
}


const styles = {


    button: {
        marginTop: '10px',
        marginBottom:'20px',
        borderRadius: "5px",
        borderWidth:"1.2px",
        borderColor:"#60CDEE",
        width: "30%",
    },

    buttonText:{
        fontSize:'12px',
        color:'#60CDEE'
    },

    typography: {
        fontSize: '130%'
    },

    warning: {
        color: "red",
        fontSize: '130%'
    },

    container: {
        marginTop: '20px',
        marginLeft:'20px',
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
    },

};

const mapStateToProps = state => ({
    user: state.identityReducer.user
})

export default connect(mapStateToProps)(PersonalInformation);
