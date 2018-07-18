import React, { Component } from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Input, TextField, Popover} from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import InfiniteCalendar from 'react-infinite-calendar';
import { FormControl, FormGroup, ControlLabel, HelpBlock, DropdownButton, MenuItem, InputGroup} from 'react-bootstrap';
import 'react-infinite-calendar/styles.css';
export class CourseCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    onClickCreate = () => {
        alert(this.state.startDate);
    }

    handleDate = (date) => {
        this.setState({startDate: date})
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

    

    renderDateInput = (name, variable) => {
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

    render() {
        return (
            <Grid justify='center' container>

                <Grid xs={12} style={styles.headerContainer}>
                    <Typography variant='display2'>New Course</Typography>
                </Grid>

                <Grid xs={4} container>
                    {this.renderTextInput("Code", "code")}
                    {this.renderTextInput("Name", "name")}
                    {this.renderTextInput("Location", "location")}
                    {this.renderTextInput("Professor", "professorName")}
                    {this.renderTextInput("Credit", "credit")}
                    {this.renderTextInput("Avatar", "avatar")}
                </Grid>

                <Grid xs={8} contaienr>
                    <Button variant="contained" onClick={this.handleClick}>
                        Open Popover
                    </Button>
                    <Popover
                        open={Boolean(this.state.anchorEl)}
                        anchorEl={this.state.anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Typography>The content of the Popover.</Typography>
                        <InfiniteCalendar
                            displayOptions={{
                                showHeader: false,
                                shouldHeaderAnimate: false,
                                showTodayHelper: false,
                            }}
                            onSelect={this.handleDate}
                        />
                    </Popover>

                    {this.renderTextInput("Start Date", "avatar")}
                    {this.renderTextInput("End Date", "avatar")}
                    {this.renderTextInput("Introduction", "introduction")}
                   
               


                    <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title="Action">
                        <MenuItem key="1">Item
                        </MenuItem>
                    </DropdownButton>

                    
 
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
    }


};

