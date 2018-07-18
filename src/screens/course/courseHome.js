import React, { Component } from "react";
import { Grid, Button, Icon, Typography } from '@material-ui/core';
import { courseRoutes } from '../../routes/routes'

export class CourseHome extends Component {

    onClickCourseList = () => {
        this.props.history.push({ pathname: '/courseList' })
    }

    renderButton = (route, index) => {

        const onClick = () => {
            this.props.history.push({ pathname: route.path })
        }

        return (
            <Grid xs={2}>
                <Button style={styles.button} onClick={onClick}>
                    <Icon>{route.icon}</Icon>
                    <Typography>{route.name}</Typography>
                </Button>
            </Grid>
        )

    }

    render() {
        return (
            <Grid style={styles.container} container>
                {courseRoutes.map(this.renderButton)}
            </Grid>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center'
    },

    button: {
        borderRadius: "6px",
        background: "#fff",
        width: "100%",
        marginRight: "30px",
        marginLeft: "30px",
        paddingTop: "15%",
        paddingBottom: "15%"
    },

    title: {
        color: "black",
        fontSize: "19px",
        alignItems: "center",
        textAlign: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "700",
        display: "inline-block",
        alignItems: 'center'
    },

}
