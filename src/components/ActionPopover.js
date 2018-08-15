
import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Grid} from '@material-ui/core';
import {Popover,Tooltip, Button,Anchor } from 'antd';

export class ActionPopover extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderAnchor() {
        return (
            <Anchor style={{backgroundColor: 'rgba(0,0,0,0)'}} offsetTop={600}>
                <Grid direction='column' container>
                    <Popover placement="top" content={
                        <Grid direction='column'spacing={24} container>
                            <Grid item>
                            <Tooltip placement="left" title={"发布"} block>
                                <Button type="primary" shape="circle" style={{background: '#fadb14'}}
                                        block>P</Button>
                            </Tooltip>
                            </Grid>
                            <Grid item>
                            <Tooltip placement="left" title={"消息"} block>
                                <Button type="primary" shape="circle" style={{background: '#7cb305'}}
                                        block>M</Button>
                            </Tooltip>
                            </Grid>
                            <Grid item>
                            <Tooltip placement="left" title={"设置"}  block>
                                <Button type="primary" shape="circle" style={{background: '#08979c'}}
                                        block>S</Button>
                            </Tooltip>
                            </Grid>
                        </Grid>
                    } trigger="hover" direction='column'>
                        <Button type="primary" shape="circle" >+</Button>
                    </Popover>
                </Grid>
            </Anchor>
        );
    }
    render() {
        return (
    <Grid justify='center' container>
        <Grid style={{marginTop:200}}>
            {this.renderAnchor()}
        </Grid>
    </Grid>
    );
    }
}



