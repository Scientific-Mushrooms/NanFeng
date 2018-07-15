import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";


import dashboardRoutes from "../../routes/routes";

import Grid from "@material-ui/core/Grid";
import Header from './header';
import Notification from '../layouts/notification';


class Layout extends Component {
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

                <Notification/>

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
        justifyContent: 'center',
        paddingTop: '20px',
        backgroundColor: '#f3f5f9',
    }
};

export default Layout;
