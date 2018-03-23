import StatisticalModel from 'bundle-loader?lazy!./statistical-analysis';

let StatisticalRoutes = [
    {
        path: '/page/qinpu/statistical-analysis',
        component: StatisticalModel
    }
]
StatisticalRoutes=StatisticalRoutes.concat();

export default StatisticalRoutes;