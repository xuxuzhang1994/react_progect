import PageModel from 'bundle-loader?lazy!./Page1';

let PerceptionQingpuRoutes = [
    {
        path: '/perception-qingpu/page1',
        component: PageModel
    }
]
PerceptionQingpuRoutes=PerceptionQingpuRoutes.concat();

export default PerceptionQingpuRoutes;