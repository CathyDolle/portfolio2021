import Home from './pages/HomePage';
import Menu from './pages/Menu';
import About from './pages/About';
import Archives from './pages/Archives';
import Works from './pages/Works';

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
        path: "/Works",
        name: "Works",
        component: Works,
    },
    {
        path: "/About",
        name: "About",
        component: About,
    },
    {
        path: "/Archives",
        name: "Archives",
        component: Archives,
    }
]

export default routes;