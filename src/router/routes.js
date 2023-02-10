import Dashboard from "../pages/Dashboard";
import Posts from "../pages/Posts";
import Settings from "../pages/Settings";


const publicRouter = [
    {
        path:'/',
        element: Dashboard
    },
    {
        path:'/post-management',
        element: Posts
    },
    {
        path: '/settings',
        element: Settings
    }
]
export {publicRouter}