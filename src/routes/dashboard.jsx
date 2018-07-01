import * as Screens from "../screens";
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    user: state.user.info,
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
        component: Screens.ReactLearn
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
