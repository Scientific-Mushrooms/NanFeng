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

                <Grid xs={12} style={styles.headerContainer} container>
                    <Header />
                </Grid>

                <Grid  container style={styles.bodyContainer}>
                    <Grid xs={10}>
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

    headerContainer: {

    },

    bodyContainer: {
        justifyContent: 'center',
        paddingTop: '40px',
        backgroundColor: '#fff'
    },
};

export default Layout;
