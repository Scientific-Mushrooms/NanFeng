import * as Screens from "../screens";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { withTheme } from '@material-ui/core/styles';
import { Form } from 'antd';



const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})

var wrap = (component) => {
    return Form.create()(withTheme()(connect(mapStateToProps)(withRouter(component))))
}

const mainRoutes = [

    {
        path: "/home",
        sidebarName: "Home",
        icon: 'home',
        component: wrap(Screens.Home),
    },

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

    {
        path: "/adminPanel",
        sidebarName: "Admin",
        icon: 'account_box',
        component: Screens.AdminPanel,
    },

    {
        path: "/userBoard",
        sidebarName: "User Board",
        icon: 'code',
        component: wrap(Screens.UserBoard)
    },

    {
        path: "/coursePanel",
        sidebarName: "Course",
        icon: "view_headline",
        component: wrap(Screens.CoursePanel),
    },

    {
        path: "/courseDetail/:courseId",
        name: "Course detail",
        icon: 'assignment',
        component: wrap(Screens.CourseDetail),
    },

    {
        path: "/sectionCreate",
        name: "Course Create",
        icon: 'add',
        component: wrap(Screens.SectionCreate)
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

    {
        path: "/classroom",
        name: "classroomCreate",
        icon: 'add',
        component: wrap(Screens.ClassroomLayout),
        children: [
            {
                path: "/classroom/classroomCreate",
                name: "classroomCreate",
                icon: 'add',
                component: wrap(Screens.ClassroomCreate)
            },
        
            {
                path: "/classroom/classroomPanel/:classroomId",
                name: "classroom",
                icon: 'add',
                component: wrap(Screens.ClassroomPanel)
            },
        
            {
                path: "classroom//assignmentCreate/:classroomId",
                name: "assignment create",
                icon: 'add',
                component: wrap(Screens.AssignmentCreate)
            },
        
            {
                path: "/classroom/assignmentPanel/:assignmentId",
                name: "assignment panel",
                icon: 'add',
                component: wrap(Screens.AssignmentPanel)
            },
        
            {
                path: "/classroom/instructorPanel",
                name: "instructor Panel",
                icon: 'add',
                component: wrap(Screens.InsturctorPanel)
            },
        ]
    },

    
    
    {
        path: "/confess",
        name: "confessPanel",
        icon: 'add',
        component: wrap(Screens.ConfessPanel)
    },

    {
        path: "/school",
        name: "schoolPanel",
        icon: 'add',
        component: wrap(Screens.SchoolPanel)
    },

];

export default mainRoutes;

const courseRoutes = _.find(mainRoutes, { path: '/coursePanel'}).children;
const classroomRoutes = _.find(mainRoutes, { path: '/classroom'}).children;
export {courseRoutes, classroomRoutes};
