import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Notifications from "views/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboards",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Gestão de usuários",
    icon: "pe-7s-id",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Gestão de turmas",
    icon: "pe-7s-users",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Login",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  }
];

export default dashboardRoutes;
