import React, { Component } from "react";
import { Grid, Button, Icon, Typography} from '@material-ui/core';
import {courseRoutes} from '../../routes/routes'
import AddIcon from '@material-ui/icons/Add';

export class CoursePanel extends Component {

    onClickMyCourse= () =>{
        this.props.history.push({ pathname: '/myCourse' })
    }

    onClickCourseDetail= () =>{
        this.props.history.push({ pathname: '/courseDetail' })
    }

    onClickCourseList = () => {
        this.props.history.push({ pathname: '/courseList' })
    }
    
    onClickCourseCreate= () =>{
        this.props.history.push({ pathname: '/courseCreate' })
    }

    renderButton = (route, index) => {

        const onClick = () => {
            this.props.history.push({ pathname: route.path })
        }

        return (
            <Grid style={styles.btnContainer} xs={2}>
                <Button style={styles.button} onClick={onClick}>
                    <Icon>{route.icon}</Icon>
                    <Typography variant='button'style={{fontSize:'150%'}}>{route.name}</Typography>
                </Button>
                
            </Grid>
        )

    }

    render() {
        return (
            <Grid style={styles.container} alignItems='center' container>
                <Grid style={styles.btnContainer} xs={2}>
                    <Button 
                    style={{borderRadius:"10px",width:"100%"}}
                    size="large"
                    variant="fab"
                    onClick={this.onClickMyCourse}>
                        <Icon style={{fontSize:'250%'}}> assignment_ind </Icon>
                        <Typography variant='button'style={{fontSize:'200%'}}>My Course</Typography>
                    </Button>
                </Grid>
                <Grid style={styles.btnContainer} xs={2}>
                    <Button 
                    style={{borderRadius:"10px",width:"100%"}}
                    size="large"
                    variant="fab" 
                    onClick={this.onClickCourseList}>
                        <Icon style={{fontSize:'250%'}}> assignment </Icon>
                        <Typography variant='button'style={{fontSize:'200%'}}>Course List</Typography>
                    </Button>
                </Grid>
                <Grid style={styles.btnContainer} xs={2}>
                    <Button 
                    style={{borderRadius:"10px",width:"100%"}}
                    size="large"
                    variant="fab" 
                    onClick={this.onClickCourseDetail}>
                        <Typography variant='button'style={{fontSize:'200%'}}>Course Detail</Typography>
                        <Icon style={{fontSize:'250%'}}> edit_icon </Icon>
                    </Button>
                </Grid>
                <Grid style={styles.btnContainer} xs={2}>
                    <Button 
                    style={{borderRadius:"10px",width:"100%"}}
                    size="large"
                    color="secondary"
                    variant="fab" 
                    onClick={this.onClickCourseCreate}>
                        <Typography variant='button'style={{fontSize:'200%'}}>Course Create</Typography>
                        <AddIcon  style={{fontSize:'250%'}}/>
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center'
    },

    btnContainer:{
        marginRight:"30px",
        marginLeft:"30px",
    },

    button:{
        borderRadius: "20px",
        background: "#fff",
        width:"100%",
        paddingTop:"15%",
        paddingBottom:"15%"
    },

}
