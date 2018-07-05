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
        component: connect(mapStateToProps)(Screens.ReactLearn)
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
        path: "/code-squad",
        sidebarName: "Code Squad",
        icon: 'code',
        component: Screens.CodeSquad,
    },

];

export default dashboardRoutes;
