import React from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Grid, Button, CircularProgress, Card } from '@material-ui/core';
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

                this.setState({ courses: result.detail, loading: false })
                this.pushNotification("success", "successfully fetch courses", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    
    renderCourses = (course, index) => {

        let onClick = () => {
            this.props.history.push({ pathname: '/courseDetail', courseId: course.courseId })
        }

        return (
            <Grid container style={styles.courseContainer} xs={12}>
                <Button style={styles.card} onClick={onClick} style={styles.button}>
            
					
					<Grid xs={1} style={styles.courseItem}>
                        <Icon>star</Icon>
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

                
                </Button>
            </Grid>
        )
    }

    renderSearchBar = () => {
        return (
            <Grid container style={styles.searchBarContainer}>
                <Grid xs={1}>
                    <FormControl className={this.props.formControl}>
                        <InputLabel htmlFor="age-simple">Class</InputLabel>
                        <Select value={this.state.age} onChange={this.handleChange}>
                            <MenuItem value="">None</MenuItem>
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
            <Grid container justify='center'>

                <Grid xs={9}>
                    <Card>
                        
                        {this.renderSearchBar()}

                        {this.state.courses.map(this.renderCourses)}

                    </Card>
                </Grid>

            </Grid>
        );
    }
}

const styles = {

    courseContainer: {
        height: '80px',
    },

    courseItem: {
        textAlign: 'center'
    },

    button: {
        width: '100%'
    },

    searchBarContainer: {
        marginTop: '30px',
        marginBottom: '30px',
    }
}
