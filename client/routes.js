import AppRoot from './app-root.jsx';
import Home from './home.jsx';
import List from './list.jsx';
import NotFound from './notfound.jsx';
import ListToUsers from './listtousers.jsx'
const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/list',
        component: ListToUsers
      },
      { path: '/users',
        component: List
      },
      {
        path: '*',
       component: NotFound
      }
    ]
  }
];

export default routes;