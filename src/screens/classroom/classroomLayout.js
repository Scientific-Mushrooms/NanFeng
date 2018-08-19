import React, {Component} from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import {classroomRoutes} from '../../routes/routes'
import { Row, Col} from 'antd';

export class ClassroomLayout extends Component {
    

    createRoutes = (routes) => {
        return (
            routes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })
        )
    };

    render() {
        return (
            <Row>
                <Row> dsfnlksdngndfslkgnsdlkfngklsdnlgkndfsglkdfsnlknk</Row>
                <Row>
                    <Switch>
                        {this.createRoutes(classroomRoutes)}
                    </Switch>
                </Row>

            </Row>
        );
    }
}


