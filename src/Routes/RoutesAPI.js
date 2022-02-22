import Layout from '../Layouts/Layout';
import Store from '../Pages/Store/Store';

const ListRoutes = [{
        path: '',
        component: Layout,
        exact: true,
        name: "Home",
        child: [{
            path: '',
            component: Store,
            exact: true,
            name: "Store",
            child: [

            ]
        }]
    }

]

export { ListRoutes }