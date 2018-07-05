/* eslint-disable */
import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import Sidebar from "../../components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "../../routes/dashboard.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import Grid from "@material-ui/core/Grid";
import Header from '../../components/Header/Header';

const switchRoutes = (
    <Switch>
        {dashboardRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class App extends Component {

    render() {
        const { classes, ...rest } = this.props;
        return (
            <Grid container>
                <Grid xs={3}>
                    <Sidebar routes={dashboardRoutes} {...rest}/>
                </Grid>
                <Grid xs={9}>
                    <Grid xs={9}>
                        <Header routes={dashboardRoutes}  {...rest}/>
                    </Grid>
                    <Grid xs={12}>
                        <div className={classes.container}>{switchRoutes}</div>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const styles = {

    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainPanel: {

        overflow: "auto",
        position: "relative",
        float: "right",

        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch"
    },
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100vh - 123px)"
    },
    map: {
        marginTop: "70px"
    }
};

export default withStyles(dashboardStyle)(App);
