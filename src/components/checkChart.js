import React, { Component } from 'react';


import CustomTabs from "./CustomTabs/CustomTabs.jsx";
import Tasks from "./Tasks/Tasks.jsx";

var bugs = [
    { title: 'Sign contract for "What are conference organizers afraid of?"', status: "A"},
    { title: 'Sign contract for "What are conference organizers afraid of?"', status: "A" },
];



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
                                checkedIndexes={[0, 3]}
                                tasksIndexes={[0, 1, 2, 3]}
                                tasks={bugs}
                            />
                        )
                    },
                    {
                        tabName: "Progressing",
                        tabIcon: "build",
                        tabContent: (
                            <Tasks
                                checkedIndexes={[0]}
                                tasksIndexes={[0, 1]}
                                tasks={bugs}
                            />
                        )
                    },
                    {
                        tabName: "Finished",
                        tabIcon: "check-circle",
                        tabContent: (
                            <Tasks
                                checkedIndexes={[1]}
                                tasksIndexes={[0, 1, 2]}
                                tasks={bugs}
                            />
                        )
                    },
                    {
                        tabName: "Bugs",
                        tabIcon: "error",
                        tabContent: (
                            <Tasks
                                checkedIndexes={[1]}
                                tasksIndexes={[0, 1, 2]}
                                tasks={bugs}
                            />
                        )
                    }
                ]}
            />
        );
    }
}


export default CheckChart;