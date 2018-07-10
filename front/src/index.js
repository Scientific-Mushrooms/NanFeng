import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index.jsx";
import { Provider } from 'react-redux';
import store from './redux/store';

const hist = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
