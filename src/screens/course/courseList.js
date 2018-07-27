import React from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Divider, Grid, Button, CircularProgress } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SearchBar from 'material-ui-search-bar';

export class CourseList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            courses: [],
        };
    }

    componentWillMount = () => {
        this.fetchCourses()
    }

    fetchCourses = () => {

        let form = new FormData();

        this.post('/api/course/all', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({courses: result.detail})
                this.setState({loading: false})
                this.pushNotification("success", "successfully fetch courses", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    
    renderCourse = (course, index) => {

        let onClick = () => {
            this.props.history.push({ pathname: '/courseDetail', courseId: course.courseId })
        }

        return (
            <Button style={styles.card} onClick={onClick}>
                <Grid container style={styles.courseContainer}>
					
					<Grid xs={0} style={styles.courseItem}>
                        {<Icon>star</Icon>}
                    </Grid>
					
                    <Grid xs={2} style={styles.courseItem}>
                        {course.code}
                    </Grid>

                    <Grid xs={3} style={styles.courseItem}>
                        {course.name}
                    </Grid>

                    <Grid xs={6} style={styles.courseItem}>
                        {course.introduction}
                    </Grid>

                </Grid>
            </Button>
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
            <Grid container>

                <Grid xs={7}>
					<Grid container style={styles.courseItem}>
						<Grid xs={1}>
			<FormControl className={this.props.formControl}>
          <InputLabel htmlFor="age-simple">Class</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Cs</MenuItem>
            <MenuItem value={20}>Math</MenuItem>
            <MenuItem value={30}>Engineering</MenuItem>
          </Select>
        </FormControl>
						</Grid>
						
						<Grid xs={1}>
						</Grid>
						<Grid xs={5}>
							<SearchBar
							onChange={() => console.log('onChange')}
							onRequestSearch={() => console.log('onRequestSearch')}
							style={{
							margin: '0 auto',
							maxWidth: 800
							}}
							/>
						</Grid>
					</Grid>
					<Grid xs={1}>
					<p>
					</p>
					</Grid>
					<Grid xs={10}></Grid>
                    {this.state.courses.map(this.renderCourse)}
                </Grid>

                <Grid xs={1}></Grid>

                <Grid xs={4}>
                    <div style={styles.card}></div>
                    <div style={styles.card}></div>
                </Grid>

            </Grid>
        );
    }
}

const styles = {

    card: {
        width: '100%',
        borderWidth: '1.5px',
        borderColor: '#e8e8e8',
        borderStyle: 'solid',
        borderRadius: '4px',
        backgroundColor: '#fff',
        marginBottom: '20px'
    },

    courseContainer: {
        width: '100%',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseItem: {
        textAlign: 'center'
    },
}
