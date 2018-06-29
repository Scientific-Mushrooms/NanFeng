import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPaste from "@material-ui/icons/ContentPaste";
import Notifications from "@material-ui/icons/Notifications";


import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import TableList from "../views/TableList/TableList.jsx";
import * as Screens from "../views";


const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Material Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/user",
        sidebarName: "User Profile",
        navbarName: "Profile",
        icon: Person,
        component: UserProfile
    },
    {
        path: "/tasks",
        sidebarName: "Tasks",
        navbarName: "Tasks",
        icon: ContentPaste,
        component: TableList
    },
    {
        path: "/notifications",
        sidebarName: "Notifications",
        navbarName: "Notifications",
        icon: Notifications,
        component: Screens.Notifications
    },

    {
        path: "/xx",
        sidebarName: "Notifications",
        navbarName: "Notifications",
        icon: Notifications,
        component: Screens.Home,
    },

 
];

export default dashboardRoutes;
