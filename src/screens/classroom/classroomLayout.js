import React, {Component} from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {classroomRoutes} from '../../routes/routes';
import { Row, Col,Button,Layout,Breadcrumb,Divider,Menu,Icon} from 'antd';
import ClassroomList from './instructorPanel/components/classroomList';
import AssignmentList from './instructorPanel/components/assignmentList';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export class ClassroomLayout extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            avatarUrl: null,
            classrooms: [],
        };
    }

    componentWillMount=()=>{

        var instructorId = sessionStorage.getItem('instructorId');

        if (instructorId === null) {
            this.props.history.push("/home")
            return;
        }

        this.fetchClassrooms(instructorId);
    }

    fetchClassrooms = (instructorId) => {
        let form = new FormData();
        form.append("instructorId", instructorId);

        var successAction = (result) => {
            this.setState({classrooms: result.detail});
            this.pushNotification("success", "successfully fetch classrooms", this.props.dispatch);
        }

        this.newPost('/api/classroom/instructorIdToAllClassrooms', form, successAction);

    }

    createRoutes = (routes) => {
        return (
            routes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })
        )
    };

    renderCard = (classroom, index) => {

        var goToClassroom = (classroomId) => () => {
            this.props.history.push('/classroom/classroomPanel/' + classroomId);
        }

        return (
            <Menu.Item  onClick={goToClassroom(classroom.classroomId)}>
                <div>
                    <Row style={styles.classroomTitle}>{classroom.name}</Row>
                </div>
            </Menu.Item>
        )
    }

    render() {
        return (
            <Row justify='center' type='flex'>
                <Col span={24}>
                    <Layout style={{ padding: '0 0', background: '#fff' }}>
                        <Sider  width={230} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%'}}>
                                <Menu.Item onClick={() => { this.props.history.push('/classroom/classroomCreate') }}>
                                    <Icon type="plus" />新建课堂
                                </Menu.Item>
                                <SubMenu key="sub1" title={<span><Icon type="switcher" />课堂列表</span>}>
                                    {this.state.classrooms.map(this.renderCard)}
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

const styles = {

    button:{
        height:'40px',
        weight:'180px',
    }

}




