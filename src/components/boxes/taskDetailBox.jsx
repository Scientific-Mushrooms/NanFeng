import React from 'react';

import Grid from '@material-ui/core/Grid';

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import Button from '../CustomButtons/Button'
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import { taskDetailBoxHide, dataForTaskChartSet } from '../../redux/actions/action';
import { BaseComponent } from '../BaseComponent';

const mapStateToProps = state => ({
    taskDetailBox: state.modalReducer.taskDetailBox,
    dataForTaskChart: state.projectReducer.dataForTaskChart,
    task: state.taskReducer.task,
})

class TaskDetailBox extends BaseComponent {

    onClickTestButton = () => {
        this.updateTaskType(this.props.task.taskId, "pending", this.props.dispatch)
    }

    onClickCancelButton = () => {
        this.props.dispatch(taskDetailBoxHide())
    }

    onClickAcceptButton = () => {
        this.updateTaskType(this.props.task.taskId, "progressing", this.props.dispatch)
    }

    onClickSubmitButton = () => {
        this.updateTaskType(this.props.task.taskId, "finished", this.props.dispatch)
    }

    renderButton = () => {

        if (this.props.task === null) {
            return null;
        }

        if (this.props.task.type === "pending" || this.props.task.type === "bugs") {
            return (
                <Button style={styles.button} color='primary' onClick={this.onClickAcceptButton}>Accpet</Button>
            )
        }

        if (this.props.task.type === "progressing") {
            return (
                <Button style={styles.button} color='primary' onClick={this.onClickSubmitButton}>Submit</Button>
            )
        }
        
        return (
            <Button style={styles.button} color='primary' onClick={this.onClickAcceptButton}>Test</Button>
        )
    }
 
    render() {
        return (
            <Modal
                open={this.props.taskDetailBox}
                style={styles.modalContainer}
                disableAutoFocus={true}
                onBackdropClick={() => this.props.dispatch(taskDetailBoxHide())}
                >
                <Grid style={styles.container} xs={5}>
                    <Card>
                        <CardHeader color="warning">
                            <div>title:</div>
                            <div style={styles.cardTitleWhite}>{this.props.task === null ? "" : this.props.task.title}</div>
                        </CardHeader>
                        <CardBody>
                            <Grid xs={12}>
                                <div>content:</div>
                                <div style={styles.contentContainer}>
                                    {this.props.task === null ? "" : this.props.task.content}
                                </div>
                            </Grid>
                            <Grid xs={12}>
                                <div>level:</div>
                                <div style={styles.contentContainer}>
                                    {this.props.task === null ? "" : this.props.task.level}
                                </div>
                            </Grid>

                            <Grid xs={12}>
                                <Button 
                                     style={styles.button} 
                                     color='primary'
                                     onClick={this.onClickCancelButton}
                                     >Cancel</Button>
                                {this.renderButton()}
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
        height: '400px',
        width: '400px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField: {
        marginLeft: '10px',
        marginRight: '10px',
    },

    button: {
        width: '40%',
        marginTop: '10px'
    },

    modalContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '100px',
    },

    contentContainer: {
        width: '100%',
        height: '100px'
    }
};


export default connect(mapStateToProps)(TaskDetailBox);