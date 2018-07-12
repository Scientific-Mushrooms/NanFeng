import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";




import dashboardRoutes from "../../../routes/dashboard.jsx";

import dashboardStyle from "../../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import Grid from "@material-ui/core/Grid";
import Header from '../Header';
import Sidebar from "./adminSidebar";

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

        return (
            <Grid justify="flex-end" container>
                <Header handleDrawer={this.handleDrawer} routes={dashboardRoutes}  /> 

            
                     
                <Grid container style={styles.bottomContainer}>
                    <Grid item  xs={11} >
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
    },

    bottomContainer: {
        justifyContent: 'center'
    }
};

export default withStyles(dashboardStyle)(App);
