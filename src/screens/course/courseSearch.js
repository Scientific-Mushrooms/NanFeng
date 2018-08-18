import React from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Grid, CircularProgress,Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { AutoComplete, Row, Col, Card, Select, Button} from 'antd';
import Avatar from '@material-ui/core/Avatar';

const lite=['文学院', '历史学院', '法学院', '哲学系', '新闻传播学院', '政府管理学院', '信息管理学院', '社会学院', '商学院','外国语学院', '海外教育学院', '马克思主义学院', '大学外语教学部','*社会科学试验班', '*文科试验班（人文艺术传播类）'
]
const engi=['现代工程与应用科学学院','电子科学与工程学院','工程管理学院','软件学院','*工科试验班'
]

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
        this.handleChange("name")(value)
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

        var successAction = (result) => {
            console.log(result)
            this.setState({ courses: result.detail, loading: false })
            this.pushNotification("success", "successfully fetch courses! ");
        }

        this.newPost('/api/course/search', form, successAction);
    }

    handleText(str){
        if(str.length>15){
            return str.substr(0,15)+"...";
        }else{
            return str;
        }
    } 


    renderIcon(str){
        if(engi.indexOf(str)!=-1)
            return  <img style={styles.img} src={require('./src/engi.png')} alt='Engineering'/>
        else if (lite.indexOf(str)!=-1)
            return <img style={styles.img} src={require('./src/lite.png')} alt='Literature'/>
        else 
            return <img style={styles.img} src={require('./src/sci.png')} alt='Science'/>
    }

    renderCourses = (course, index) => {

        let onClick = () => {
            this.props.history.push({ pathname: '/courseDetail/' + course.courseId, courseId: course.courseId })
        }

        return (
            <Grid justify='center' container>
                <Button  onClick={onClick} style={styles.button}>
                <Row type="flex" justify="center">
                    <Col span={3} style={styles.courseItem}>
                        {this.renderIcon(course.faculty)}
                    </Col>

                    <Col span={3} style={styles.courseItem}>
                        <Row>课程编号</Row>
                        <Row>
                            <Typography variant='body2'>
                                {course.code}
                            </Typography>
                        </Row>
                    </Col>

                    <Col span={6} style={styles.courseItem}>
                        <Row>课程名</Row>
                        <Typography variant='title'>{this.handleText(course.name)}</Typography>
                    </Col>

                    <Col span={3} >
                        <Row>类型</Row>
                        <Row>
                            <Typography  variant='body2'>  
                                {course.type}课
                            </Typography>
                        </Row>
                    </Col>
                    
                    <Col span={3} style={styles.courseItem}>
                        <Row>开课院系</Row>
                        <Row>
                            <Typography variant='body2'>
                                {course.faculty}
                            </Typography>
                        </Row>
                    </Col>
                    <Col span={3} style={styles.courseItem}>
                        <Row>学分</Row>
                        <Row>
                            <Typography variant='body2'>
                                {course.credit}
                            </Typography>
                        </Row>
                    </Col>
                </Row>
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

                <AutoComplete dataSource={this.state.dataSource} onChange={this.autoOnChange}/>

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
    img:{
        width:"45px",
        height:'45px'
    },

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
