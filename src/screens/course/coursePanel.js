import React, { Component } from "react";
import { Divider, Grid, Button } from '@material-ui/core';


export class CoursePanel extends Component {

    onClickCourseList = () => {
        this.props.history.push({ pathname: '/courseList' })
    }

    render() {
        return (
            <Grid style={styles.container} container>

                <Grid xs={10}>
                    <Button onClick={this.onClickCourseList}>Course List</Button>
                    <Button>My course</Button>
                    <Button>dsafdsf</Button>
                </Grid>


            </Grid>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center'
    }
}
