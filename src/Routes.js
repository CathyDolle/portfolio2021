import Home from './pages/HomePage';
import Menu from './pages/Menu';

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: Home,
    },
    {
        path: "/Menu",
        name: "Menu",
        component: Menu,
    }
]

export default routes;