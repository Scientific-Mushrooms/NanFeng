import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";
import Button from './CustomButtons/Button'
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import { taskDetailBoxHide } from '../redux/actions/action';

const mapStateToProps = state => ({
    taskDetailBox: state.modalReducer.taskDetailBox,
    taskDetailData: state.modalReducer.taskDetailData,
})

class TaskDetailBox extends Component {

    render() {
        return (
            <Modal
                open={this.props.taskDetailBox}
                style={styles.modalContainer}
                disableAutoFocus={true}
                onBackdropClick={() => this.props.dispatch(taskDetailBoxHide())}
                >
                <Grid style={styles.container} xs={3}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 style={styles.cardTitleWhite}>{this.props.taskDetailData.title}</h4>
                        </CardHeader>
                        <CardBody>
                  
                            <Grid xs={12}>
                                <Button
                                    size="large"
                                    style={styles.button}
                                    color='primary'
                                    onChange
                                    // onClick={this._login}
                                >LOGIN</Button>
                            </Grid>
                            <Grid xs={12}>
                                <Button size="large" style={styles.button} color='primary'>SIGN UP</Button>
                            </Grid>
                        </CardBody>
                    </Card>
                </Grid>
            </Modal>
        );
    }
}


const styles = {

    container: {
        width: '400px',
        height: '400px',
        marginTop: '100px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField: {
        marginLeft: '10px',
        marginRight: '10px',
    },

    button: {
        width: '100%',
        marginTop: '10px'
    },

    modalContainer: {
        textAlign: 'center',
        justifyContent: 'center',
    }
};


export default connect(mapStateToProps)(TaskDetailBox);