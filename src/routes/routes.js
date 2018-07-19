import * as Screens from "../screens";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const mapStateToProps = state => ({
    user: state.userReducer.user,
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
        sidebarName: "Admin",
        icon: 'account_box',
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
        icon: "view_headline",
        component: withRouter(connect(mapStateToProps)(Screens.CoursePanel)),
        children: [

            {
                path: "/myCourse",
                name: "My Course",
                icon: 'code',
                component: connect(mapStateToProps)(Screens.MyCourse),
                children: [

                    {
                        path: "/courseHome",
                        name: "Course Home",
                        icon: 'code',
                        component: connect(mapStateToProps)(Screens.CourseHome)
                    },

                    {
                        path: "/courseDiscussion",
                        name: "Course Home",
                        icon: 'code',
                        component: connect(mapStateToProps)(Screens.CourseHome)
                    },

                    {
                        path: "/courseTest",
                        name: "Course Home",
                        icon: 'code',
                        component: connect(mapStateToProps)(Screens.CourseHome)
                    },

                ]
            },

            {
                path: "/courseDetail",
                name: "Course detail",
                icon: 'code',
                component: connect(mapStateToProps)(Screens.CourseDetail)
            },

            {
                path: "/courseList",
                name: "Course List",
                icon: 'code',
                component: connect(mapStateToProps)(Screens.CourseList)
            },

            {
                path: "/courseCreate",
                name: "Course Create",
                icon: 'code',
                component: connect(mapStateToProps)(Screens.CourseCreate)
            },

        ]
    },

];

export default mainRoutes;

const courseRoutes = _.find(mainRoutes, { path: '/coursePanel'}).children;
export {courseRoutes};
