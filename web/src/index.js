import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index.jsx";

import { Provider } from 'react-redux';
import store from './redux/store';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './config/theme';
import 'antd/dist/antd.css';
const hist = createBrowserHistory();

var routesToRoutes = (prop, key) => {
    return <Route path={prop.path} component={prop.component} key={key} />;
}


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router history={hist}>
                <Switch>
                    {indexRoutes.map(routesToRoutes)}
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);
