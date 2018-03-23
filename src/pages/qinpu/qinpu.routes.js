//import PerceptionQingpuModel from 'bundle-loader?page/perception-qingpu/perception-qingpu';
import PerceptionQingpuModel from 'bundle-loader?lazy!./perception-qingpu/perception-qingpu';
import page1 from './perception-qingpu/page1/page1.routes';


let PerceptionQingpuRoutes = [
    {
        path: '/page/qinpu/perception-qingpu',
        component: PerceptionQingpuModel,
        routes:[

        ]
    }
]
PerceptionQingpuRoutes=PerceptionQingpuRoutes.concat(
    page1
);
console.log(PerceptionQingpuRoutes)

export default PerceptionQingpuRoutes;