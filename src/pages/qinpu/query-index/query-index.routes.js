import QueryIndexModel from 'bundle-loader?lazy!./query-index';

let QueryIndexRoutes = [
    {
        path: '/page/qinpu/query-index',
        component: QueryIndexModel
    }
]
QueryIndexRoutes=QueryIndexRoutes.concat();

export default QueryIndexRoutes;