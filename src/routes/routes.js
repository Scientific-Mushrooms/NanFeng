import * as Screens from "../screens";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { withTheme } from '@material-ui/core/styles';

const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})

var wrap = (component) => {
    return withTheme()(connect(mapStateToProps)(withRouter(component)))
}

const mainRoutes = [

    {
        path: "/home",
        sidebarName: "Home",
        icon: 'home',
        component: wrap(Screens.Home),
        children: [

            {
                path: "/signin",
                sidebarName: "Dashboard",
                icon: "dashboard",
                component: wrap(Screens.SignIn)
            },

            {
                path: "/signup",
                sidebarName: "Dashboard",
                icon: "dashboard",
                component: wrap(Screens.SignUp)
            },

            {
                path: "/userProfile",
                sidebarName: "Dashboard",
                icon: "dashboard",
                component: wrap(Screens.UserProfile)
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
                component: wrap(Screens.UserBoard)
            },
        ]
    },

    {
        path: "/coursePanel",
        sidebarName: "Course",
        icon: "view_headline",
        component: wrap(Screens.CoursePanel),
        children: [

            {
                path: "/courseDetail",
                name: "Course detail",
                icon: 'assignment',
                component: wrap(Screens.CourseDetail),
                children: [

                    {
                        path: "/sectionCreate",
                        name: "Course Create",
                        icon: 'add',
                        component: wrap(Screens.SectionCreate)
                    },

                ]
            },

            {
                path: "/courseSearch",
                name: "Course Search",
                icon: 'edit_icon',
                component: wrap(Screens.CourseSearch)
            },

            {
                path: "/courseCreate",
                name: "Course Create",
                icon: 'add',
                component: wrap(Screens.CourseCreate)
            },

        ]
    },

];

export default mainRoutes;

const courseRoutes = _.find(mainRoutes, { path: '/coursePanel'}).children;
export {courseRoutes};
