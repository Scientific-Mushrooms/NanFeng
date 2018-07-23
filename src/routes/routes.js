import * as Screens from "../screens";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';


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

            {
                path: "/userProfile",
                sidebarName: "Dashboard",
                icon: "dashboard",
                component: connect(mapStateToProps)(Screens.UserProfile)
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
                path: "/courseDetail",
                name: "Course detail",
                icon: 'assignment',
                component: connect(mapStateToProps)(Screens.CourseDetail),
                children: [

                    {
                        path: "/sectionCreate",
                        name: "Course Create",
                        icon: 'add',
                        component: connect(mapStateToProps)(Screens.SectionCreate)
                    },

                ]
            },

            {
                path: "/courseList",
                name: "Course List",
                icon: 'edit_icon',
                component: connect(mapStateToProps)(Screens.CourseList)
            },

            {
                path: "/courseCreate",
                name: "Course Create",
                icon: 'add',
                component: connect(mapStateToProps)(Screens.CourseCreate)
            },

        ]
    },

];

export default mainRoutes;

const courseRoutes = _.find(mainRoutes, { path: '/coursePanel'}).children;
export {courseRoutes};
