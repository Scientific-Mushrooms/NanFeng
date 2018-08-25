import React from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon,LinearProgress, withStyles} from '@material-ui/core';
import _ from 'lodash';
import { Card } from 'antd';

const lite=['全部','文学院', '历史学院', '法学院', '哲学系', '新闻传播学院', '政府管理学院', '信息管理学院', '社会学院', '商学院','外国语学院', '海外教育学院', '马克思主义学院', '大学外语教学部','*社会科学试验班', '*文科试验班（人文艺术传播类）'
]
const engi=['全部','现代工程与应用科学学院','电子科学与工程学院','工程管理学院','软件学院','*工科试验班'
]
export default class CourseCard extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            courseComments: [],
            totalCommentNum: 0,
            usefulNum: 0,
            easyNum: 0,
            enjoy: 0,
        };

    }

    componentWillMount = () => {
        var {courseComments} = this.props;
        var totalCommentNum = this.props.courseComments.length;
        var usefulNum = _.filter(courseComments, { useful: true }).length;
        var easyNum = _.filter(courseComments, { easy: true }).length;
        var enjoyNum = _.filter(courseComments, { enjoy: true }).length;
        this.setState({
            totalCommentNum: totalCommentNum, 
            usefulNum: usefulNum, 
            easyNum: easyNum, 
            enjoyNum: enjoyNum
        })
  
    }

    renderCourseItem = (title, value) => {
        return (
            <Grid xs={12} style={styles.courseInfoContainer} container>
                <Grid xs={3}>
                    <Typography style={styles.item}>{title}</Typography>
                </Grid>
                <Grid xs={5}>
                    <Typography style={styles.value}>{value}</Typography>
                </Grid>
            </Grid>
        )
    }

    
    renderIcon(str){
        if(engi.indexOf(str)!=-1)
            return  <img 
            src={require('../src/engi.png')} 
            alt='Engineering' 
            style={styles.courseAvatar}/>
        else if (lite.indexOf(str)!=-1)
            return <img  
            src={require('../src/lite.png')} 
            alt='Literature' 
            style={styles.courseAvatar}/>
        else if(str=="")
            return <img 
            src={require('../src/public.png')}
            alt="Public"
            style={styles.courseAvatar}/>
        else 
            return <img 
            src={require('../src/sci.png')} 
            alt='Science' 
            style={styles.courseAvatar}/>
    }

    renderRating = (title, total, positive) => {

        var num = (positive / total).toFixed(2) * 100;

        if (total === 0) {
            positive = 100;
            total = 100;
            num = 100
        }
        positive = 100 * positive / total;

        return (
            <Grid xs={12} style={styles.ratingContainer} container>
                <Grid xs={2} container justify='center'>
                    <Typography style={styles.ratingTitle}>{title}</Typography>
                </Grid>
                <Grid xs={6}>
                    <LinearProgress color="primary" variant="buffer" value={positive} valueBuffer={100} style={styles.rating} />
                </Grid>
                <Grid xs={2} alignItems='center' container>
                    <Typography style={styles.ratingNum}>{num} %</Typography>
                </Grid>
                <Grid xs={2} alignItems='center' container>
                    <Typography style={styles.ratingTotalNum}>{total / 100} 个评分</Typography>
                </Grid>
            </Grid>
        )
    }
    
    handleFaculty(course){
        if(course.faculty==""&&(course.type=="公选"||course.type=="就业"))
            return "公选、就业课暂无院系信息"
        else
            return course.faculty
    }

    render() {

        const {code, name, credit, avatarId, faculty, type} = this.props.course;
        const {totalCommentNum, usefulNum, easyNum, enjoyNum} = this.state;

        return (
            <Card style={styles.container}>
                <Grid container style={styles.courseInfoContainer}>

                    <Grid xs={8} container style={styles.leftContainer} justify='center'>
                        <Grid xs={11} container>
                            <Grid xs={12} style={styles.padding}/>
                            <Grid xs={12} style={styles.courseAvatarContainer} container>
                                {this.renderIcon(faculty)}
                            </Grid>
                            <Grid xs={12} style={styles.titleContainer} container>
                                <Typography style={styles.title}>{name}</Typography>
                            </Grid>
                            {this.renderRating("实用度", totalCommentNum * 100, usefulNum * 100)}
                            {this.renderRating("难易度", totalCommentNum * 100, usefulNum * 100)}
                            {this.renderRating("推荐度", totalCommentNum * 100, usefulNum * 100)}
                            <Grid xs={12} style={styles.padding} />
                        </Grid>
                    </Grid>

                    <Grid xs={4} container style={styles.rightContainer}>
                        <Grid xs={12} style={styles.padding} />
                        {this.renderCourseItem("编号:", code)}
                        {this.renderCourseItem("类型:", type)}
                        {this.renderCourseItem("学分:", credit)}
                        {this.renderCourseItem("授课院系:", this.handleFaculty(this.props.course))}
                        <Grid xs={12} style={styles.padding} /> 
                    </Grid>

                </Grid>
            </Card>
        );
    }
}

const styles = {

    container: {
        marginBottom: '10px',
    },

    leftContainer: {
        backgroundColor: '#f5f5f5',
    },

    padding: {
        height: '40px'
    },

    courseContainer: {
        width: '100%',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseAvatarContainer: {
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseName: {
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '30px',
    },

    courseAvatar: {
        width: '130px',
        height: '130px',
        borderRadius: '5px',
    },

    ratingContainer: {
        justifyContent: 'center',
        height: '20px',
        marginBottom: '10px'
    },

    rating: {
        height: '100%',
        borderRadius: '3px',
        marginLeft: '10px'
    },

    courseInfoContainer: {
        justifyContent: 'center',
    },

    courseInfo:{
        fontSize: '15px',
        textAlign: 'center',
        marginTop: '30px',
    },

    userAvatar: {
        height: '40px',
        width: '40px',
    },

    courseItem: {
        textAlign: 'center'
    },

    title: {
        color: '#666666',
        fontSize: '30px'
    },

    titleContainer: {
        marginTop: '20px',
        marginBottom: '20px',
        justifyContent: 'center'
    },

    textContainer: {
        alignItems: 'center'
    },

    ratingTitle: {
        color: '#666666',
        fontSize: '12px'
    },

    ratingNum: {
        color: '#666666',
        fontSize: '15px',
        marginLeft: '10px'
    },

    ratingTotalNum: {
        color: '#999999',
        fontSize: '12px',
    },

    value: {
        color: '#666666',
        fontSize: '20px'
    },

    item: {
        color: '#999999',
        fontSize: '20px'
    },

}
