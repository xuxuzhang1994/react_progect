import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import api from "../../api/maintenance-api";
import './home.less';

class Home extends Component {
    componentDidMount(){
        this._map()
    }

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    _showData(){
        var self=this
        //获取该节点的聚合信息
        var currentAdcode=310118
        self.state.distCluster.getClusterRecord(currentAdcode, function(error, result) {

            //currentAdcode已经更新，有新的点击
            if (result.adcode !== currentAdcode) {
                return;
            }

            //设置数据
            self.state.pointSimplifierIns.setData(result.dataItems);
        })
    }

    _test(){
        //初始化地图对象，加载地图
        var district, map = new AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],//地图中心点
            zoom: 100 //地图显示的缩放级别
        });
        AMap.plugin('AMap.DistrictSearch',function(){//回调函数
            var opts = {
                subdistrict: 1,   //返回下一级行政区
                extensions: 'all',  //返回行政区边界坐标组等具体信息
                level: 'district  '  //查询行政级别为 市
            };
            //实例化DistrictSearch
            district = new AMap.DistrictSearch(opts);
            district.setLevel('district');
            //行政区查询
            district.search('蓝田县', function(status, result) {
                console.log(result.districtList)
                var bounds = result.districtList[0].boundaries;
                var polygons = [];
                if (bounds) {
                    for (var i = 0, l = bounds.length; i < l; i++) {
                        //生成行政区划polygon
                        var polygon = new AMap.Polygon({
                            map: map,
                            strokeWeight: 1,
                            path: bounds[i],
                            fillOpacity: 0.7,
                            fillColor: '#CCF3FF',
                            strokeColor: '#CC66CC'
                        });
                        polygons.push(polygon);
                    }
                    map.setFitView();//地图自适应
                }
            });
        })
    }

    _map(){
        var self=this
        var district;

        var map = new AMap.Map('container',{
            //zoom: 10,
            mapStyle: 'amap://styles/dark',//样式URL
            resizeEnable: true,
            //center: [121.113021, 31.151209],//地图中心点
        });

        // AMap.plugin('AMap.DistrictSearch',function(){//回调函数
        //     var opts = {
        //         subdistrict: 1,   //返回下一级行政区
        //         extensions: 'all',  //返回行政区边界坐标组等具体信息
        //         level: 'district  '  //查询行政级别为 市
        //     };
        //     //实例化DistrictSearch
        //     district = new AMap.DistrictSearch(opts);
        //     district.setLevel('district');
        //     //行政区查询
        //     var opts = {
        //         subdistrict: 1,   //返回下一级行政区
        //         extensions: 'all',  //返回行政区边界坐标组等具体信息
        //         level: 'biz_area',  //查询行政级别为 市
        //         showbiz:false
        //     };
        //     //实例化DistrictSearch
        //     district.search('青浦区', function(status, result) {
        //         console.log(result.districtList)
        //         var bounds = result.districtList[0].boundaries;
        //         var polygons = [];
        //         if (bounds) {
        //             for (var i = 0, l = bounds.length; i < l; i++) {
        //                 //生成行政区划polygon
        //                 var polygon = new AMap.Polygon({
        //                     map: map,
        //                     strokeWeight: 3,
        //                     path: bounds[i],
        //                     fillOpacity: 0,
        //                     fillColor: '#fff',
        //                     strokeColor: '#CC66CC'
        //                 });
        //                 polygons.push(polygon);
        //             }
        //             // map.clearMap();
        //            // map.setFitView();//地图自适应
        //         }
        //     });
        //
        // })
        function initPage(DistrictCluster,PointSimplifier) {

            var pointSimplifierIns = new PointSimplifier({
                map: map, //所属的地图实例
                zIndex: 110,
                autoSetFitView: false, //禁止自动更新地图视野
                getPosition: function(item) {

                    return item.position;
                },
                getHoverTitle: function(dataItem, idx) {
                    console.log(dataItem.dataItem)
                    return idx + ': ' + dataItem.dataItem.title;
                },
                renderOptions: {
                    //点的样式
                    pointStyle: {
                        width: 6,
                        height: 6,
                        fillStyle: 'rgba(153, 0, 153, 0.38)'
                    },
                    //鼠标hover时的title信息
                    hoverTitleStyle: {
                        position: 'top'
                    }
                }
            });
            var distCluster = new DistrictCluster({
                zIndex: 1000,
                map: map, //所属的地图实例
                topAdcodes: [310000],
                autoSetFitView: true,
                renderOptions: {
                    //基础样式
                    featureStyle: {
                        fillStyle: 'rgba(102,170,0,0.5)', //填充色
                        lineWidth: 2, //描边线宽
                        strokeStyle: 'rgba(31, 119, 180,0)', //描边色
                        //鼠标Hover后的样式
                        hoverOptions: {
                            fillStyle: 'rgba(255,255,255,0)'
                        }
                    },
                    //特定区划级别的默认样式
                    featureStyleByLevel: {
                        //全国
                        country: {
                            fillStyle: 'rgba(49, 163, 84, 0.8)'
                        },
                        //省
                        province: {
                            fillStyle: 'rgba(116, 196, 118, 0)'
                        },
                        //市
                        city: {
                            fillStyle: 'rgba(161, 217, 155, 0)'
                        },
                        //区县
                        district: {
                            fillStyle: 'rgba(255, 255, 255, 0)'
                        }
                    },
                    //直接定义某写区划面的样式
                    getFeatureStyle: function(feature, dataItems) {
                        // if (dataItems.length > 3000) {
                        //
                        //     return {
                        //         fillStyle: 'red'
                        //     };
                        //
                        // } else if (dataItems.length > 1000) {
                        //     return {
                        //         fillStyle: 'orange'
                        //     };
                        // }
                        if(feature.properties.adcode==310118){
                            return{
                                fillStyle: 'rgba(102,170,0,0)', //填充色
                                lineWidth: 2, //描边线宽
                                strokeStyle: '#CC66CC', //描边色
                            }
                        }

                        return {};
                    }
                },

                getPosition: function(item) {

                    if (!item) {
                        return null;
                    }

                    var parts = item.position.split(',');

                    //返回经纬度
                    return [parseFloat(parts[0]), parseFloat(parts[1])];
                }
            });
            self.setState({
                map: map,
                distCluster:distCluster,
                pointSimplifierIns:pointSimplifierIns,
            });
            var currentAdcode = null;
            //监听区划面的点击
            distCluster.on('featureClick', function(e, feature) {
                debugger
               // distCluster.zoomToShowSubFeatures(feature.properties.adcode)


                currentAdcode = feature.properties.adcode;

                //获取该节点的聚合信息
                distCluster.getClusterRecord(currentAdcode, function(error, result) {

                    //currentAdcode已经更新，有新的点击
                    if (result.adcode !== currentAdcode) {
                        return;
                    }

                    //设置数据
                    pointSimplifierIns.setData(result.dataItems);
                })


            });

            // distCluster.on('renderFinish', function(e, result) {
            //
            //     var features = result.features, //当前绘制的features
            //         currentAdcodeExists = false;
            //
            //     for (var i = 0, len = features.length; i < len; i++) {
            //         if (currentAdcode === features[i].properties.adcode) {
            //
            //             currentAdcodeExists = true;
            //             break;
            //         }
            //     }
            //
            //     if (!currentAdcodeExists) {
            //         //如果当前adcode没有绘制，清除？
            //         //pointSimplifierIns.setData(null);
            //     }
            // });
            window.distCluster = distCluster;

            function refresh() {

                var zoom = map.getZoom();

                //获取 pointStyle
                var pointStyle = pointSimplifierIns.getRenderOptions().pointStyle;

                //根据当前zoom调整点的尺寸
                pointStyle.width = pointStyle.height = 2 * Math.pow(1.2, map.getZoom() - 3);

                // var zoom = map.getZoom();

                // if (zoom < 10) {

                //     pointSimplifierIns.hide();

                // } else {

                //     pointSimplifierIns.show();
                // }
            }

            map.on('zoomend', function() {
                refresh();
            });

            refresh();

            // var distCluster = new DistrictCluster({
            //     map: map, //所属的地图实例
            //     //返回数据项中的经纬度位置
            //     getPosition: function(item) {
            //         return item.position;
            //     }
            // });
            api.dataTest().then((csv)=>{
                var data = csv.split('\n');
                var arr=[]
                data.forEach(e=>{
                    arr.push({
                        title:'标题',
                        position:e
                    })
                })


                    //设置数据
                distCluster.setData(arr);
                map.setZoomAndCenter(11, [121.113021, 31.151209]);

                //map.setFitView();//地图自适应
               // pointSimplifierIns.setData(data);
            })

            //随机创建一批点，仅作示意
            var data = createPoints(map.getCenter(), 100000);

        }
        AMapUI.loadUI(['geo/DistrictCluster','misc/PointSimplifier'], function(DistrictCluster,PointSimplifier) {

            //启动页面
            initPage(DistrictCluster,PointSimplifier);
        });

//随机生产点
        function createPoints(center, num) {
            var data = [];
            for (var i = 0, len = num; i < len; i++) {
                data.push({
                    position: [
                        center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 30,
                        center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 20
                    ]
                });
            }
            return data;
        }
    }

    _handleClick() {
        var map = new AMap.Map('container',{
            mapStyle: 'amap://styles/dark'//样式URL
        });
        this.setState({
            count: ++this.state.count
        });
    }

    _https() {
        var self=this
        console.log(self)
        api.carBrandList().then((data) => {
            if (data.errcode == 0) {
                self.setState({
                    brandList : data.result.memFace
                })

            }
        });

    }

    render() {
        console.log(this.state.count)
        var self=this
        return (

            <div className='x'>
                <div id="container"></div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
                <button onClick={() => this._showData()}>显示数据</button>


                <h1>{this.state.brandList}</h1>
                <img src={this.state.brandList} alt="" className='img' />
                <button onClick={() => this._test()}>登陆111</button>
            </div>
        )
    }
}

export default hot(module)(Home);

