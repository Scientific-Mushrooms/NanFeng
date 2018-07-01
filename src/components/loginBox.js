import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';


import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";


import withStyles from "@material-ui/core/styles/withStyles";
import Button from './CustomButtons/Button'


class LoginBox extends Component {

    state = {
        name: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <Grid style={styles.container} xs={3}>
            <Card>
                <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Squad Member Stats</h4>
                </CardHeader>
                <CardBody>
                    <Grid xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            className={styles.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            fullWidth={true}
                        />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                id="password-input"
                                label="Password"
                                className={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button size="large" style={styles.button} color='primary'>LOGIN</Button>
                        </Grid>
                        <Grid xs={12}>
                            <Button size="large" style={styles.button} color='primary'>SIGN UP</Button>
                        </Grid>
                </CardBody>
            </Card>
            </Grid>

        );
    }
}


const styles = {

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
    }
};

const dashboardStyle = {
    successText: {
        color: "#4caf50"
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    stats: {
        color: "#999999",
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px"
        }
    },

    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem"
    },
    cardCategory: {
        color: "#999999",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: "#3C4858",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

export default withStyles(dashboardStyle)(LoginBox);