import React, { Component } from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Input, TextField, Popover} from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FormControl, FormGroup, ControlLabel, HelpBlock, DropdownButton, MenuItem, InputGroup, Textarea} from 'react-bootstrap';
import 'react-infinite-calendar/styles.css';
import {moment} from 'moment';
import ImageUploader from 'react-images-upload';

export class CourseCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            code: null,
            introduction: null,
            credit: null,
            avatar: [],
        };
    }

    onClickCreate = () => {
        this.createCourse()
    }

    createCourse = () => {

        let form = new FormData();
        form.append("name", this.state.name);
        form.append("code", this.state.code);
        form.append("introduction", this.state.introduction);
        form.append("credit", this.state.credit);

        form.append('avatar', this.state.avatar[0]);

        this.post('/api/course/create', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.pushNotification("success", "233333", this.props.dispatch);
                alert(JSON.stringify(result.detail))

            } else {
                alert(JSON.stringify(result))
                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    renderTextInput = (name, variable) => {
        return (
            <Grid style={styles.inputContainer} container>
                <Grid xs={3} style={styles.textContainer} container>
                    <Typography style={styles.text}>{name} :</Typography>
                </Grid>
                <Grid xs={9} style={styles.textContinaer} container>
                    <FormControl type="text" onChange={this.handleChange(variable)} />
                </Grid>
            </Grid>
        )
    }



    // renderEndDate = () => {

    //     var handleEndDate = (date) => {
    //         this.setState({ endDate: date })
    //     }

    //     var handleClick = (event) => {
    //         this.setState({ parentEnd: event.currentTarget });
    //     };

    //     var handleClose = () => {
    //         this.setState({ parentEnd: null });
    //     };

    //     return (
    //         <Grid style={styles.inputContainer} container>
    //             <Grid xs={3} style={styles.textContainer} container>
    //                 <Typography style={styles.text}>End Date :</Typography>
    //             </Grid>
    //             <Grid xs={9} style={styles.textContinaer} container>
    //                 <Button variant="contained" onClick={handleClick}>
    //                     {JSON.stringify(this.state.endDate)}
    //                 </Button>
    //                 <Popover
    //                     open={Boolean(this.state.parentEnd)}
    //                     anchorEl={this.state.parentEnd}
    //                     onClose={handleClose}
    //                     anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    //                     transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    //                 >
    //                     <InfiniteCalendar
    //                         displayOptions={{ showHeader: false, shouldHeaderAnimate: false, showTodayHelper: false }}
    //                         onSelect={handleEndDate}
    //                     />
    //                 </Popover>
    //             </Grid>
    //         </Grid>
    //     )
    // }

    renderIntroduction = (name, variable) => {
        return (
            <Grid style={styles.inputContainer} container>
                <Grid xs={3} style={styles.textContainer} container>
                    <Typography style={styles.text}>{name} :</Typography>
                </Grid>
                <Grid xs={9} container>
                    <FormControl componentClass="textarea" onChange={this.handleChange(variable)} multilple style={styles.introContainer} rows={4}/>
                </Grid>
            </Grid>
        )
    }

    renderChooseAvatar = () => {

        var onChange = (avatar) => {
            this.setState({
                avatar: this.state.avatar.concat(avatar)
            });
            
        } 

        return (
            <Grid style={styles.inputContainer} container>
                <Grid xs={3} style={styles.textContainer} container>
                    <Typography style={styles.text}>Avatar: </Typography>
                </Grid>
                <Grid xs={9} container>
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
            </Grid>
        )
    }

    render() {
        return (
            <Grid justify='center' container>

                <Grid xs={12} style={styles.headerContainer}>
                    <Typography variant='display2'>New Course</Typography>
                </Grid>

                <Grid xs={4} container>
                    {this.renderTextInput("Code", "code")}
                    {this.renderTextInput("Name", "name")}
                    {this.renderTextInput("Credit", "credit")}

                    {this.renderChooseAvatar()}
                </Grid>

                <Grid xs={8} contaienr>
                    
                    
                    {this.renderIntroduction("Introduction", "introduction")}
                   
               


                {/* <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title="Action">
                    <MenuItem key="1">Item</MenuItem>
                </DropdownButton> */}

                    
 
                </Grid>

                <Grid xs={12}>
                    <Button onClick={this.onClickCreate}>Create Class</Button>
                </Grid>
            </Grid>
        );
    }
}


const styles = {

    headerContainer: {
        marginBottom: '20px'
    },

    inputContainer: {
        marginBottom: '20px'
    },

    input: {
        borderRadius: '6px'
    },

    textContainer: {
        justifyContent: 'flex-end'
    },

    text: {
        fontSize: '20px',
        marginRight: '10px',
    },

    test: {
        width: '300px',
        height: '400px'
    },

    introContainer: {
        height: '80px'
    }


};

