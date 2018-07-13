import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import dashboardRoutes from "../../routes/routes";
import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import Grid from "@material-ui/core/Grid";
import Header from './header';


class App extends Component {
    constructor(props){
        super(props);
    }

    flatWrapper = (routes) => {
        var newRoutes = new Array();
        this.flat(routes, newRoutes);
        return newRoutes;
    }

    flat = (routes, newRoutes) => {
        routes.map((prop, key) => {
            if (prop.children !== undefined) {
                this.flat(prop.children, newRoutes)
            }
            newRoutes.push(prop);
        })
    }

    createRoutes = (routes) => {
        return (
            routes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })
            
        )
    };

    render() {

        return (
            <Grid container>
            
                <Header /> 
                     
                <Grid container style={styles.bottomContainer}>
                    <Grid  xs={11} >
                        <Switch>
                            {this.createRoutes(this.flatWrapper(dashboardRoutes))}
                        </Switch>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

const styles = {
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