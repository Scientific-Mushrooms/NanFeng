import React, { Component } from 'react';


import CustomTabs from "./CustomTabs/CustomTabs.jsx";
import Tasks from "./Tasks/Tasks.jsx";

class CheckChart extends Component {

    render() {
        return (
            <CustomTabs
                headerColor="primary"
                tabs={[
                    {
                        tabName: "Pending",
                        tabIcon: "extension",
                        tabContent: (
                            <Tasks
                                tasks={this.props.data.pending}
                                />
                        )
                    },
                    {
                        tabName: "Progressing",
                        tabIcon: "build",
                        tabContent: (
                            <Tasks
                                tasks={this.props.data.progressing}
                                />
                        )
                    },
                    {
                        tabName: "Finished",
                        tabIcon: "check-circle",
                        tabContent: (
                            <Tasks
                                tasks={this.props.data.finished}
                                />
                        )
                    },
                    {
                        tabName: "Bugs",
                        tabIcon: "error",
                        tabContent: (
                            <Tasks
                                tasks={this.props.data.bugs}
                                />
                        )
                    }
                ]}
            />
        );
    }
}


export default CheckChart;