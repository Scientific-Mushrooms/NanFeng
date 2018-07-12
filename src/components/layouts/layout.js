import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";




import dashboardRoutes from "../../routes/routes";

import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import Grid from "@material-ui/core/Grid";
import Header from './header';


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
        const { classes } = this.props;

        return (
<<<<<<< HEAD:src/layouts/Dashboard/Dashboard.jsx
            <Grid  justify="flex-end" container>
                    <Sidebar open = {this.state.openDrawer}   routes={dashboardRoutes} {...rest}/>
                     <Header handleDrawer = {this.handleDrawer}  routes={dashboardRoutes}  {...rest}/> 
                <Grid style= {{marginLeft: marLeft, transition: "margin 0.2s ease-out" }} container>
                    <Grid item  xs={12} >
=======
            <Grid justify="flex-end" container>
            
                <Header routes={dashboardRoutes}  /> 
                     
                <Grid container style={styles.bottomContainer}>
                    <Grid item  xs={11} >
>>>>>>> c77c0cb905aa4798afef8dd002ef6868b7a3d8c6:src/components/layouts/layout.js
                         <div className={classes.container}>{switchRoutes}</div>
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
