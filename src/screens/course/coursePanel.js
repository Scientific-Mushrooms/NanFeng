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

        if(route.name!='Course Create')//handle course create separately
            return (
            <Grid 
            style={styles.btnContainer} 
            alignItems='center' 
            justify='center' xs={2}>
                <Button 
                style={styles.button}
                size="large"
                variant="fab"
                onClick={this.onClick}>
                    <Icon style={styles.icon}> {route.icon} </Icon>
                    <Typography variant='button'style={{fontSize:'150%'}}>{route.name}</Typography>
                </Button>
            </Grid>
            )
    }

    renderCreateCourse= () => {
        //if(this.props.user.role=='teacher')
        return(
            <Grid 
            style={styles.btnContainer} 
            justify='center' 
            alignItems='center' xs={2}>
                <Button 
                style={styles.button}
                size="large"
                color="secondary"
                variant="fab" 
                onClick={this.onClickCourseCreate}>
                    <AddIcon  style={styles.icon}/>
                    <Typography variant='button'style={{fontSize:'150%'}}>Course Create</Typography>
                </Button>
            </Grid> 
        )
    }

    render() {
        return (
            <Grid style={styles.container} alignItems='center' container>
                {courseRoutes.map(this.renderButton)}
                {this.renderCreateCourse()}
            </Grid>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center'
    },

    icon:{
        fontSize:'300%',
        marginLeft:"5px",
        marginRight:"5px"
    },

    btnContainer:{
        marginRight:"30px",
        marginLeft:"30px",
    },

    button:{
        borderRadius: "20px",
        width:"100%",
    },

}
