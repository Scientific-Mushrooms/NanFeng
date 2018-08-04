import React, {Component} from "react";

import Grid from "@material-ui/core/Grid";
import { Row, Col, AutoComplete } from 'antd';

export class Home extends Component {

    render(){
        return (
            <Row>

                <Row style={styles.searchContainer} type='flex' justify='center'>
                    <Col span={16}>waterloo</Col>
                    <Col span={16}>
                        <AutoComplete />
                    </Col>
                    
                </Row>

             
            </Row>
        );
    }
}

const styles = {

    searchContainer: {
        height: '300px'
    },


}

