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
    constructor(props){
        super(props);
        this.state={openDrawer: false};
        this.handleDrawer= this.handleDrawer.bind(this);

    }

     handleDrawer = () => {
        this.setState({ openDrawer: !this.state.openDrawer });
    };

    render() {
        const { classes, ...rest } = this.props;
        let marLeft = this.state.openDrawer? "300px": "0px"; 

        return (
            <Grid container>
                <Grid xs={3}>
                    <Sidebar open = {this.state.openDrawer}   routes={dashboardRoutes} {...rest}/>
                </Grid>
                <Grid style= {{marginLeft: marLeft, transition: "margin 0.2s ease-out" }} container>
                    <Grid item  xs={9}  zeroMinWidth>
                        <Header handleDrawer = {this.handleDrawer}  routes={dashboardRoutes}  {...rest}/> 
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
