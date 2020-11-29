import Home from './pages/HomePage';
import Menu from './pages/Menu';
import About from './pages/About';

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
    },
    {
        path: "/About",
        name: "About",
        component: About,
    }
]

export default routes;