import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";
import Button from './CustomButtons/Button'
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import { taskDetailBoxHide, dataForTaskChartSet } from '../redux/actions/action';

const mapStateToProps = state => ({
    taskDetailBox: state.modalReducer.taskDetailBox,
    taskDetailData: state.modalReducer.taskDetailData,
    dataForTaskChart: state.projectReducer.dataForTaskChart
})

class TaskDetailBox extends Component {



    onClickCancelButton = () => {
        this.props.dispatch(taskDetailBoxHide())
    }

    onClickAcceptButton = () => {
        this.updateType(this.props.taskDetailData.taskId, "progressing")
    }

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    updateType = (taskId, type) => {
        let form = new FormData();
        form.append("taskId", taskId);
        form.append("type", type);

        this.post('/api/task/updateTypeByTaskId', form).then((result) => {
            if (result.status == 'fail') {
                alert(result.description);
            } else {
                this.props.dispatch(taskDetailBoxHide())
            }
        })
        this.fetchDataForTaskChartByType("392988bc-72e1-468f-8679-d6fc9948fe2f")
    }

    fetchDataForTaskChartByType = (projectId) => {
        let form = new FormData();
        form.append("projectId", projectId);

        this.post('/api/task/dataForTaskChart', form).then((result) => {
            if (result.status == 'fail') {
                alert(result.description);
            } else {
                this.props.dispatch(dataForTaskChartSet(result.detail))
            }
        })
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
                            <h4 style={styles.cardTitleWhite}>{this.props.taskDetailData.title}</h4>
                        </CardHeader>
                        <CardBody>
                            <Grid xs={12}>
                                <div style={styles.contentContainer}>
                                    {this.props.taskDetailData.content}
                                </div>
                            </Grid>

                            <Grid xs={12}>
                                <Button 
                                     style={styles.button} 
                                     color='primary'
                                     onClick={this.onClickCancelButton}
                                     >Cancel</Button>
                                <Button style={styles.button} color='primary' onClick={this.onClickAcceptButton}>Accpet</Button>
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
        height: '300px'
    }
};


export default connect(mapStateToProps)(TaskDetailBox);