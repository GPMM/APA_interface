import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import Icons from "views/Icons.js";
import SignUp from "views/SignUp.js";
import SignIn from "views/SignIn.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Turmas",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/",
    component: SignIn,
    layout: "/signIn",
  },
  {
    path: "/",
    component: SignUp,
    layout: "/signUp",
  },
];

export default dashboardRoutes;
