//import PerceptionQingpuModel from 'bundle-loader?page/perception-qingpu/perception-qingpu';
import PerceptionQingpuModel from 'bundle-loader?lazy!./perception-qingpu/perception-qingpu';
import WaringModel from 'bundle-loader?lazy!./warning/warning';
import page1 from './perception-qingpu/page1/page1.routes';
import WaringRoute from './warning/warning.routes';


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
    WaringRoute
);
console.log(PerceptionQingpuRoutes)

export default PerceptionQingpuRoutes;