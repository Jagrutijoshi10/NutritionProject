import System from "../src/page/system"
import NavBar from "./common/navBar";
import HomePage from './components/homePage';

const ROUTES = [
    {
        path: ["/", '/login'],
        component: System,
        exact: true
    },
    {
        path: "/register",
        component: System,
        exact: true
    },
    {
        path: "/homePage",
        component: HomePage,
        exact: true
    },
    {
        path: "/navBar",
        component: NavBar,
        exact: true
    }
]


export default ROUTES