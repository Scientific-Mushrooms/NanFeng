/* eslint-disable */
import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "../../routes/dashboard.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

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
            <div className={classes.wrapper}>

                <Sidebar routes={dashboardRoutes} {...rest}/>

                <div className={classes.mainPanel} ref="mainPanel">
                    <Header routes={dashboardRoutes}  {...rest}/>
                    <div className={classes.content}>
                        <div className={classes.container}>{switchRoutes}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(dashboardStyle)(App);
