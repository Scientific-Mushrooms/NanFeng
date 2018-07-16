import React, { Component } from "react";
import { Divider, Grid, Button ,Icon} from '@material-ui/core';
import GridItem from "../../components/Grid/GridItem.jsx";


export class CoursePanel extends Component {

    onClickCourseList = () => {
        this.props.history.push({ pathname: '/courseList' })
    }

    render() {
        return (
            <Grid style={styles.container} container>
                <GridItem xs={12} sm={6} md={3}>
                    <Button style={styles.button} onClick={this.onClickCourseList}>
                        <div style={styles.title}>
                            <Icon style={{fontSize:"600%"}}> assignment </Icon>
                            <p>Course List</p></div>
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Button style={styles.button}>
                        <div style={styles.title}>
                        <Icon style={{fontSize:"600%"}}> assignment_ind </Icon>
                        <p>My Course</p></div>
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Button style={styles.button}>
                        <div style={styles.title}>
                        <Icon style={{fontSize:"600%"}}> warning </Icon>
                            <p>asdfdsa</p></div>
                    </Button>
                </GridItem>
            </Grid>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center'
    },
    button:{
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width:"100%",
        marginRight:"30px",
        marginLeft:"30px",
        paddingTop:"15%",
        paddingBottom:"15%"

    },
    title: {
        color: "black",
        fontSize: "19px",
        alignItems:"center",
        textAlign: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:"700",
        display: "inline-block",
        alignItems: 'center'
    },
}
