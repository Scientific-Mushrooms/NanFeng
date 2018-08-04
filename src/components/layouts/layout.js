import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";


import dashboardRoutes from "../../routes/routes";

import Header from './header';
import Notification from '../layouts/notification';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { Row, Col} from 'antd';

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
            <Row>

                <Row className={classes.headerContainer}>
                    <Header />
                </Row>

                <Row className={classes.bodyContainer}>
                    <Switch>
                        {this.createRoutes(this.flatWrapper(dashboardRoutes))}
                    </Switch>
                </Row>

                <Notification/>

            </Row>
        );
    }
}

const styles = theme => ({

    bodyContainer: {
        backgroundColor: theme.palette.base
    },
});

export default withStyles(styles)(Layout);
