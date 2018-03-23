import ManCarModel from 'bundle-loader?lazy!./man-car-control';

let ManCarRoutes = [
    {
        path: '/page/qinpu/man-car-control',
        component: ManCarModel
    }
]
ManCarRoutes=ManCarRoutes.concat();

export default ManCarRoutes;