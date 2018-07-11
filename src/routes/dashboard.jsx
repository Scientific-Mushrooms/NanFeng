import * as Screens from "../screens";
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    user: state.userReducer.info,
    loginbox: state.modalReducer.loginbox,
    dataForTaskChart: state.projectReducer.dataForTaskChart,
    
    pending: state.projectReducer.pending,
    progressing: state.projectReducer.progressing,
    finished: state.projectReducer.finished,
    bugs: state.projectReducer.bugs,

    squad: state.squadReducer.squad,

    rankChart: state.chartReducer.rankChart,
})

const dashboardRoutes = [

    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        icon: "dashboard",
        component: connect(mapStateToProps)(Screens.Dashboard)
    },

    {
        path: "/react-learn",
        sidebarName: "React Learn",
        icon: 'code',
        component: connect(mapStateToProps)(Screens.TaskBoard)
    },

    {
        path: "/react-native-learn",
        sidebarName: "React Native Learn",
        icon: 'code',
        component: Screens.ReactNativeLearn
    },

    {
        path: "/java-spring-api",
        sidebarName: "Java Spring API",
        icon: 'code',
        component: Screens.JavaSpring
    },

    {
        path: "/users",
        sidebarName: "Users",
        icon: 'user',
        component: Screens.UserBoard,
    },

];

export default dashboardRoutes;
