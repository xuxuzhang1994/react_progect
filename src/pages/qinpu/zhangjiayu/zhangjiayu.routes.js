
import ZhangjiayuModel from 'bundle-loader?lazy&name=zhangjiayu!./zhangjiayu';

let ZhangjiayuRoutes = [
    {
        path: '/qinpu/zhangjiayu',
        component: ZhangjiayuModel
    }
]
ZhangjiayuRoutes=ZhangjiayuRoutes.concat();

export default ZhangjiayuRoutes;


