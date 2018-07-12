import AdminLayout from "../components/layouts/adminLayout/adminLayout";
import CommonLayout from "../components/layouts/commonLayout/commonLayout";

const indexRoutes = [
    { path: '/admin', component: AdminLayout }, 
    { path: '/', component: CommonLayout }
];

export default indexRoutes;
