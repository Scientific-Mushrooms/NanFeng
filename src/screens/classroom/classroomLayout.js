import React, {Component} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {classroomRoutes} from '../../routes/routes'
import { Row, Col,Button,Layout,Breadcrumb,Divider,Menu,Icon} from 'antd';
import ClassroomList from './instructorPanel/components/classroomList';
import AssignmentList from './instructorPanel/components/assignmentList';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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
            <Row justify='center' type='flex'>
                <Col span={22}>
                    <Layout style={{ padding: '0 0', background: '#fff' }}>
                        <Sider  width={250} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', backgroundColor:'#eff5f6'}}>
                                <SubMenu key="sub1" title={<span><Icon type="switcher" />课堂列表</span>}>
                                    <ClassroomList/>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="book" />作业列表</span>}>
                                    <AssignmentList/>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                {this.createRoutes(classroomRoutes)}
                            </Switch>
                        </Content>
                    </Layout>
                </Col>
            </Row>
        );
    }
}


