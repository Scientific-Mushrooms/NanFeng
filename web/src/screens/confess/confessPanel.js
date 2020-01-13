import { Menu, Icon, Button,List } from 'antd';
import React, {Component} from 'react';
import "antd/dist/antd.css";
import Grid from "@material-ui/core/Grid";
import {ListItem} from "../../components/View3";

const SubMenu = Menu.SubMenu;

export class ConfessPanel extends Component{
    state = {
        collapsed: false,
        tag:"all",
      }
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() {
        return (
            <Grid direction='row' xs={12} container>
                <Grid direction='column' item xs={2} container>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16,width:'20%' }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                    <Menu
                        style={{borderWidth:0}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" style={{width:'60%'}} onClick={(e)=>{this.view3.setTag("all")}}>
                            <Icon type="usergroup-add" />
                            <span>全部动态</span>
                        </Menu.Item>
                        <Menu.Item key="2" style={{width:'60%'}} onClick={(e)=>{this.view3.setTag("失物招领");}}>
                            <Icon type="bulb" />
                            <span>失物招领</span>
                        </Menu.Item>
                        <Menu.Item key="3" style={{width:'60%'}} onClick={(e)=>{this.view3.setTag("一吐为快")}}>
                            <Icon type="message"/>
                            <span>一吐为快</span>
                        </Menu.Item>
                    </Menu>
                </Grid>
                <Grid item xs={10}>
                    <ListItem onRef={(ref) => {this.view3 = ref}}/>
                </Grid>
            </Grid>
        );
    }
}


