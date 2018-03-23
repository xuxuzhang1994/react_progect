//import PerceptionQingpuModel from 'bundle-loader?page/perception-qingpu/perception-qingpu';
import PerceptionQingpuModel from 'bundle-loader?lazy!./perception-qingpu/perception-qingpu';
import WaringModel from 'bundle-loader?lazy!./warning/warning';
import page1 from './perception-qingpu/page1/page1.routes';
import WaringRoute from './warning/warning.routes';
import ManCarRoutes from './man-car-control/man-car.routes';
import QueryIndexRoutes from './query-index/query-index.routes';
import StatisticalRoutes from './statistical-analysis/statisical-analysis.routes';


let PerceptionQingpuRoutes = [
    {
        path: '/page/qinpu/perception-qingpu',
        component: PerceptionQingpuModel,
        routes:[

        ]
    }
]
PerceptionQingpuRoutes=PerceptionQingpuRoutes.concat(
    page1,
    WaringRoute,
    ManCarRoutes,
    QueryIndexRoutes,
    StatisticalRoutes
);
console.log(PerceptionQingpuRoutes)

export default PerceptionQingpuRoutes;