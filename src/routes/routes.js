import * as Screens from "../screens";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



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

const mainRoutes = [

    {
        path: "/home",
        sidebarName: "Home",
        icon: 'home',
        component: connect(mapStateToProps)(Screens.Home),
        children: [

            {
                path: "/signin",
                sidebarName: "Dashboard",
                icon: "dashboard",
                component: withRouter(connect(mapStateToProps)(Screens.SignIn))
            },

            {
                path: "/signup",
                sidebarName: "Dashboard",
                icon: "dashboard",
                component: connect(mapStateToProps)(Screens.SignUp)
            },
        ]
    },

    {
        path: "/adminPanel",
        sidebarName: "admin",
        icon: 'user',
        component: Screens.AdminPanel,
        children: [
            {
                path: "/userBoard",
                sidebarName: "User Board",
                icon: 'code',
                component: connect(mapStateToProps)(Screens.UserBoard)
            },
        ]
    },

    {
        path: "/squadPanel",
        sidebarName: "Squad",
        icon: "dashboard",
        component: connect(mapStateToProps)(Screens.SquadPanel),
        children: [
            {
                path: "/taskBoard",
                sidebarName: "TaskBoard",
                icon: 'code',
                component: connect(mapStateToProps)(Screens.TaskBoard)
            },
        ]
    },

    {
        path: "/coursePanel",
        sidebarName: "Course",
        icon: "dashboard",
        component: connect(mapStateToProps)(Screens.CoursePanel),
    },

];

export default mainRoutes;
