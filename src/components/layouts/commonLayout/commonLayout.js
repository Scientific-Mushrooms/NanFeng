import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import dashboardRoutes from "../../../routes/dashboard.jsx";

import Grid from "@material-ui/core/Grid";
import Header from '../Header';


class CommonLayout extends Component {

    render() {

        return (
            <div style={styles.container}>

                <Header/>
                
                <Grid item xs={12} >
                    <Switch>
                        {dashboardRoutes.map((prop, key) => {
                            return <Route path={prop.path} component={prop.component} key={key} />;
                        })}
                    </Switch>
                </Grid>
            </div>
        );
    }
}

const styles = {
    contaianer: {
        width: '100%',
        hieght: '100%'
    }
}


export default CommonLayout;
