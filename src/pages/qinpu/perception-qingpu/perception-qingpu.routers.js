import PerceptionQingpuModel from 'bundle-loader?lazy!./perception-qingpu';

let PerceptionQingpuRoutes = [
    {
        path: '/qinpu/perception-qingpu',
        component: PerceptionQingpuModel
    }
]
PerceptionQingpuRoutes=PerceptionQingpuRoutes.concat();

export default PerceptionQingpuRoutes;