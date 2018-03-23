import PerceptionQingpuModel from 'pages/perception-qingpu/perception-qingpu';
import page1 from './perception-qingpu/page1/page1.routes';

// import maintenanceRecommend from './maintenance-recommend/maintenance-recommend';
// import maintenanceCycle from './maintenance-cycle/maintenance-cycle';
// import maintenanceFeedback from './maintenance-feedback/maintenance-feedback';
// import maintenanceHome from './maintenance-home/maintenance-home';
// import maintenanceConfig from './maintenance-config/maintenance-config';
// import maintenanceOtherConfig from './maintenance-other-recommend/maintenance-other-recommend';

let PerceptionQingpuRoutes = [
    {
        path: '/perception-qingpu',
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