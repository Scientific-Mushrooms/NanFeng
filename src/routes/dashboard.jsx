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
        navbarName: "Code Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/react-learn",
        sidebarName: "React Learn",
        navbarName: "React Learn",
        icon: Person,
        component: UserProfile
    },
    {
        path: "/react-native-learn",
        sidebarName: "React Native Learn",
        navbarName: "React Native Learn",
        icon: ContentPaste,
        component: TableList
    },
    {
        path: "/java-spring-api",
        sidebarName: "Java Spring API",
        navbarName: "Java Spring API",
        icon: Notifications,
        component: Screens.Notifications
    },

    {
        path: "/code-squad",
        sidebarName: "Code Squad",
        navbarName: "Code Squad",
        icon: Notifications,
        component: Screens.Home,
    },

 
];

export default dashboardRoutes;
