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
                        <Icon> warning </Icon>
                        <p>Course List</p>
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Button style={styles.button}>
                        <Icon> warning </Icon>
                        <p>My Course</p>
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Button style={styles.button}>
                        <Icon> warning </Icon>
                        <p>asdfdsa</p>
                    </Button>
                </GridItem>
            </Grid>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center',
        alignItems: 'center'
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
        paddingBottom:"80%",
    }
}
