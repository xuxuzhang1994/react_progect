
import http from './http'


export default {
    /*
    主页
    * */
    //热门列表
    dataTest(params){
        return http.get("api/data.txt",params);
    },
    //品牌列表
    carBrandList(params){
        return http.get("wx661c1bed18ad67c4/Public/Api/Debug/Login/SetCookie?uid=06640ED47F0000011E8EBAA4798E5F15&_identifier=datago",params);
    },
    // 图表数据
    getCharts(params){
        return http.get('wx661c1bed18ad67c4/Public/Api/Debug/Login/SetCookie?uid=06640ED47F0000011E8EBAA4798E5F15&_identifier=datago',params);
    },
    //根据车辆获取车型
    choosType(params){
        return http.get("front/car/models_by_brand",params);
    },
    //根据车辆品牌 && 车型参数获取排量-油品
    chooseDisplacement(params){
        return http.get("front/car/spec_list",params);
    },

    //根据车辆品牌 && 车型参数 && 排量-油品获取年份
    chooseYear(params){
        return http.get("front/car/get_year",params);
    },
    //根据车辆品牌 && 车型参数 && 排量-油品 && 年份获取保养数据
    get_recommend(params){
        return http.get("front/car/get_recommend",params);
    },
    //根据图片获取vin码
    getVinByImg(params){
        return http.post("front/car/by_vin_img",params);

    },
    //根据vin码获取车型id
    getIdByVin(params){
        return http.post("front/car/by_vin_code",params);

    },
    //根据图片获取vin码
    searchData(params){
        return http.get("front/brand/get_brands",params);

    },
    /*
    * 车辆配置
    * */
    //根据 levelId 获取车辆配置详情接口
    getConfig(params){
        return http.get("front/car/detail",params);

    },
    /*
    * 保养推荐
    * */
    //根据 levelId 获取车辆保养推荐接口
    getMaintenance(params){
        return http.post("front/car/by_mileage",params);
    },
    /*
    * 保养周期
    * */
    maintenanceCycle(params){
        return http.get("front/cycle/list",params);
    },
    //原厂配件参数
    rawData(params){
        return http.get("front/cycle/raw_data",params);
    },
    //其他保养数据参数
    upkeep(params){
        return http.get("front/cycle/upkeep",params);
    },
    /*
    * 反馈
    * */
    feedbacked(params){
        return http.post('front/feedback/create',params)
    }
}