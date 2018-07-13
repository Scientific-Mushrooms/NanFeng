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
                component: connect(mapStateToProps)(Screens.SignIn)
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
        path: "/dashboard",
        sidebarName: "Dashboard",
        icon: "dashboard",
        component: connect(mapStateToProps)(Screens.Dashboard)
    },

    {
        path: "/admin/react-learn",
        sidebarName: "React Learn",
        icon: 'code',
        component: connect(mapStateToProps)(Screens.TaskBoard)
    },

    {
        path: "/admin/users",
        sidebarName: "Users",
        icon: 'user',
        component: Screens.UserBoard,
    },

];

export default mainRoutes;
