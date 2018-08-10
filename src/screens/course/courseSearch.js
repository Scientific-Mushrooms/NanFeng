import React from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Grid, CircularProgress } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import { AutoComplete, Row, Col, Card, Select, Button} from 'antd';


export class CourseSearch extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            courses: [],
            name: "",
            dataSource: [],
        };
    }

    componentWillMount = () => {
        this.search()
    }

    handleClick = name => event => {
        this.setState({
            [name]: event.currentTarget,
        });
    }

    handleClose = name => () => {
        this.setState({
            [name]: null,
        });
    };

    handleChange = name => (value) => {
        this.setState({ [name]: value })
    }

    autoOnChange = (value) => {

        this.fetchAutoComplete(value);

    }

    fetchAutoComplete = (value) => {
        var form = new FormData();
        form.append('name', value);

        var successAction = (result) => {
            this.setState({dataSource: result.detail});
            console.log("success")
        }

        this.newPost('/api/course/autoComplete', form, successAction)
    }


    search = () => {

        let form = new FormData();
        form.append('name', this.state.name);

        this.post('/api/course/search', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({ courses: result.detail, loading: false })
                this.pushNotification("success", "successfully fetch courses", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }




    renderCourses = (course, index) => {

        let onClick = () => {
            this.props.history.push({ pathname: '/courseDetail/' + course.courseId, courseId: course.courseId })
        }

        return (
            <Grid justify='center' container>
                <Button onClick={onClick} style={styles.button}>
                    <Col span={3} style={styles.courseItem}>
                        <Icon>star</Icon>
                    </Col>

                    <Col span={3} style={styles.courseItem}>
                        {course.code}
                    </Col>

                    <Col xs={6} style={styles.courseItem}>
                        {course.name}
                    </Col>

                    <Col span={12} style={styles.courseItem}>
                        {course.introduction}
                    </Col>
                </Button>
                <Grid xs={12} style={styles.padding} />
            </Grid>
        )
    }

 
   

    renderSearchBar = () => {

        const Option = Select.Option;

        return (
            <Row style={styles.searchBar}>

                <Select defaultValue="all" style={{ width: 120 }}>
                    <Option value="all">All</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>

                <Select defaultValue="all" style={{ width: 120 }}>
                    <Option value="all">All</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>

                <AutoComplete onChange={this.handleChange("name")} dataSource={this.state.dataSource} onChange={this.autoOnChange}/>

                <Button type="primary" onClick={this.search}>Search</Button>

            </Row>
        )
    }


    render() {

        if (this.state.loading) {
            return (
                <center>
                    <CircularProgress />
                </center>
            )
        }

        return (
            <Row justify='center' type='flex'>
                <Col span={20}>
                    <Card>
                        {this.renderSearchBar()}
                        {this.state.courses.map(this.renderCourses)}
                    </Card>
                </Col>
            </Row>
        );
    }
}

const styles = {

    padding: {
        height: '20px'
    },

    courseContainer: {
        width:'80%',
    },

    courseItem: {
        textAlign: 'center'
    },

    button: {
        width: '100%',
        height: '80px',
    },

    searchBarContainer: {
        marginTop: '30px',
        marginBottom: '30px',
    },

    selectButton:{
        color:'#666666',
        fontSize:'14px',
    },

    selectContainer:{
        borderBottomWidth: '2px',
        borderBottomColor: '#666666',
        borderBottomStyle: 'solid'
    },

    searchBar: {
        paddingBottom: '20px'
    }


}
