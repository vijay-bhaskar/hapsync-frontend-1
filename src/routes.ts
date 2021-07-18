import CreateEvent from './Events/CreateEvents/index';
import Home from './Home/home';
import RouteType from './route-type';
import Activities from './Suggestions/Activities';

const routes: RouteType[] = [
    {
        path: '/suggestions/eventTypes',
        component: CreateEvent,
    },
    {
        path: '/suggestions/events/:id/activities',
        component: Activities,
    },
    {
        path: '/',
        component: Home,
    },
];

export default routes;
