import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";


import dashboardRoutes from "../../routes/routes";

import Grid from "@material-ui/core/Grid";
import Header from './header';
import Notification from '../layouts/notification';
import { withTheme, withStyles } from '@material-ui/core/styles';


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
        const { classes } = this.props;

        return (
            <Grid container>

                <Grid xs={12} className={classes.headerContainer} container>
                    <Header />
                </Grid>

                <Grid  container className={classes.bodyContainer}>
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

const styles = theme => ({

    headerContainer: {

    },

    bodyContainer: {
        justifyContent: 'center',
        paddingTop: '40px',
        backgroundColor: theme.palette.base
    },
});

export default withStyles(styles)(Layout);
