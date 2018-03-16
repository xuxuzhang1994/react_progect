import React, {Component} from 'react';
import './indexList.less';
import Nav from 'components/Nav/Nav';
import OneTask from './test.js'
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import api from "../../api/maintenance-api";

import { Button ,ButtonGroup,ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';

class IndexList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        const books=[{ name: '出租房', color: '#1050C7',},
            { name: '自住房屋', color: '#326AD5'},
            { name: '闲置空房', color: '#2EA7D1'},
            {name: '商业用房', color: '#30DAE9'},
            {name: '田间窝棚', color: '#1AD1BE'},
            {name: '其他', color: '#30E97E'},]
        const personList=[
            {
                name:'张静',
                sex:'女',
                age:'18',
                card:'6228858293581925918241',
                address:'青浦区二连兴源603',
                flags:'精神病人'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                card:'6228858293581925918241',
                address:'青浦区二连兴源603',
                flags:'精神病人'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                card:'6228858293581925918241',
                address:'青浦区二连兴源603',
                flags:'精神病人'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                card:'6228858293581925918241',
                address:'青浦区二连兴源603',
                flags:'精神病人'
            },
        ]
        this.state = {
            list: books,
            currentTab:0,
            personList:personList,
            startDate: moment()
        }
        console.log(this.state.booksElements)
    }
    componentDidMount(){
        console.log($('body'))
        this._colume()
        this._map()
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


        // 左侧栏tab切换
    _changeTab(index){
        var self=this
        self.setState({
            currentTab:index
        })
        switch (index){
            case 1:this._colume() ;break;
            case 2:this._pie() ;break;
            default:console.log('default')
        }
    }

    _slidUp(){
        var self=this
        self.setState({
            slidShowStatus:!this.state.slidShowStatus
        })
    }

    // 绘制柱状图
    _colume(){
        console.log(Highcharts.getOptions().colors)
        Highcharts.getOptions().colors = Highcharts.map(["#009FEB", "#E91F1F"], function (color) {
            return {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#25D7FB'],
                    [1, '#0B5ECF']
                ]
            };
            console.log(Highcharts.Color(color).brighten(-0.3).get('rgb'))

        });
        // 图表配置
        var options = {
            colors:{
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#0B5ECF'],
                    [1, '#25D7FB']
                ]
            },
            chart: {
                type: 'column',
                spacing : [40, 15 , 10, 10]
            },
            title: {
                text: '》年度预警趋势分析',
                useHTML:true
            },
            legend:{
                enabled: false,
                align: 'right',
                verticalAlign: 'top',
                x: 0,
                y: 29,
                useHTML:true
            },
            xAxis: {
                tickPosition: 'inside',
                categories: ['1月', '2月','3月', '4月','5月','6月','7月', '8月','9月', '10月','11月','12月'],
                className:'zhangjiayu',
                tickmarkPlacement:'between',
                tickPixelInterval:1,
            },
            yAxis: {
                gridLineDashStyle: 'ShortDash',
                title: {
                    text: null
                },

                tickAmount: 6,
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 100)
                    }
                },
            },
            plotOptions: {
                useHTML:true,
                column: {
                    stacking: 'normal',
                    //pointInterval:0.6,
                    //pointPadding:-0.25
                    pointPadding:0,
                    //groupPadding: 0
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '事件预警',
                data: [ 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500,]
            }],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
            }
        };
        // 图表初始化函数
        var chart = Highcharts.chart('colume', options);

    }

    // 绘制饼图
    _pie(){
        var self=this
        Highcharts.getOptions().colors=['#1050C7','#326AD5','#2EA7D1','#30DAE9', '#1AD1BE', '#30E97E', '#f7a35c', '#8085e9',
            '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
        // 图表配置
        var options = {
            credits: {
                enabled: false
            },
            colors:{
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#003399'],
                    [1, '#3366AA']
                ]
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                spacing : [0, 0 , 0, 0]
            },
            title: {
                floating:true,
                useHTML:true,
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                        //format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        format: '{point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    point: {
                        events: {
                            mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                                // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                                // chart.setTitle({
                                //     text: e.target.name+ '\t'+ e.target.y + ' %'
                                // });
                            }
                            //,
                            // click: function(e) { // 同样的可以在点击事件里处理
                            //     chart.setTitle({
                            //         text: e.point.name+ '\t'+ e.point.y + ' %'
                            //     });
                            // }
                        }
                    },
                    innerSize: 100
                }
            },
            series: [{
                type: 'pie',
                innerSize: '60%',
                name: '市场份额',
                data: [
                    {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        //sliced: true,
                        selected: true,
                        url: 'http://www.hcharts.cn'
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['其他',   0.7]
                ]
            }]
        };
        var func = function (c) {
            // 环形图圆心
            var centerY = c.series[0].center[1],
                titleHeight = parseInt(c.title.styles.fontSize);
            c.setTitle({
                y:centerY + titleHeight/2
            });
            chart = c;
        }
        // 图表初始化函数
        var chart = Highcharts.chart('pie', options);

    }

    // 地图
    _map(){
        var self=this
        var district;

        var map = new AMap.Map('map',{
            //zoom: 10,
            mapStyle: 'amap://styles/dark',//样式URL
            resizeEnable: true,
            //center: [121.113021, 31.151209],//地图中心点
        });
        AMap.plugin(['AMap.ToolBar','AMap.Scale'],
            function(){
                map.addControl(new AMap.ToolBar());

                map.addControl(new AMap.Scale());

               // map.addControl(new AMap.OverView({isOpen:true}));
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
            var colors = [
                '#0cc2f2',
                '#4fd2b1',
                '#90e36f',
                '#ffe700',
                '#ff9e00',
                '#ff6700',
                '#ff1800'
            ];
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
                //使用GroupStyleRender
                renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                renderOptions: {
                    //点的样式
                    // pointStyle: {
                    //     width: 6,
                    //     height: 6,
                    //     fillStyle: 'rgba(153, 0, 153, 0.38)'
                    // },
                    //点的样式
                    pointStyle: {
                        fillStyle: 'red',
                        width: 5,
                        height: 5
                    },
                    // pointStyle: {
                    //     //绘制点占据的矩形区域
                    //     content: PointSimplifier.Render.Canvas.getImageContent(
                    //         'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
                    //         function onload() {
                    //             pointSimplifierIns.renderLater();
                    //         },
                    //         function onerror(e) {
                    //             alert('图片加载失败！');
                    //         }),
                    //     //宽度
                    //     width: 150,
                    //     //高度
                    //     height: 150,
                    //     //定位点为底部中心
                    //     offset: ['-50%', '-100%'],
                    //     fillStyle: null,
                    //     strokeStyle: null
                    // },

                    getGroupId: function(item, idx) {

                        var parts = item.dataItem.position.split(',');

                        //按纬度区间分组
                        console.log(Math.abs(Math.round(parseFloat(parts[1]) / 5)))
                        if(idx>0 && idx<50){
                            return 1
                        }
                        if(idx>50 && idx<100){
                            return 2
                        }
                        if(idx>100 && idx<150){
                            return 3
                        }
                        return Math.abs(Math.round(parseFloat(parts[1]) / 5));
                    },
                    groupStyleOptions: function(gid) {

                        var size = 6;
                        return {
                            pointStyle: {
                                //content: gid % 2 ? 'circle' : 'rect',
                                fillStyle: colors[gid % colors.length],
                                width: size,
                                height: size
                            },
                            pointHardcoreStyle: {
                                width: size - 2,
                                height: size - 2
                            }
                        };
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
                    },
                    getClusterMarker: function(feature, dataItems, recycledMarker) {
                        return null;
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

    render() {
        return (
           <div className='index-list'>
               <div className='test'>
                   <DatePicker
                       locale='zh-CN'
                       selected={this.state.startDate}
                       onChange={this.handleChange}
                   />

               </div>

               <div className='map'>
                   <div id='map'>

                   </div>
               </div>
               <div>
                   <Nav index='1'></Nav>
                   <div className="left-list shandow">
                       <div className='jiao'>
                           <div className='top'></div>
                           <div className='right'></div>
                           <div className='bottom'></div>
                           <div className='left'></div>
                       </div>
                       <div className="search-top ">
                           <p className="search-btn">全区</p>
                           <div className="search-input">
                               <input type="text" placeholder="搜索小区"/>
                               <i className="iconfont icon-sousuo"></i>
                               <ul className="search-list">
                                   <li>xx小区</li>
                                   <li className="checked-list">xx小区</li>
                                   <li>xx小区</li>
                               </ul>
                           </div>
                       </div>
                       <p className="one-six">一标六实</p>
                       <ul className="six-item">
                           <li className={(this.state.currentTab==1?"current-tab":" ") + ' flex'}  onClick={() => this._changeTab(1)}>
                               <p  className='item-info'>实有人口</p>
                               <p className="item-count">1,177,567</p>
                           </li>
                           <li className={this.state.currentTab==2?"current-tab":""} onClick={() => this._changeTab(2)}>
                               <p className="item-info">实有房屋</p>
                               <p className="item-count">32,567</p>
                           </li>
                           <li className={this.state.currentTab==3?"current-tab":""} onClick={() => this._changeTab(3)}>
                               <p className="item-info">实有单位</p>
                               <p className="item-count">8,467</p>
                           </li>
                           <li className={this.state.currentTab==4?"current-tab":""} onClick={() => this._changeTab(4)}>
                               <p className="item-info">实有安防设备</p>
                               <p className="item-count">49,854</p>
                           </li>
                           <li className={this.state.currentTab==5?"current-tab":""} onClick={() => this._changeTab(5)}>
                               <p className="item-info">实有力量与装备</p>
                               <p className="item-count">23,567</p>
                           </li>
                           <li className={this.state.currentTab==6?"current-tab":""} onClick={() => this._changeTab()}>
                               <p className="item-info">实有警情事件</p>
                               <p className="item-count">12</p>
                           </li>
                       </ul>
                       <div className="checkAll">
                           <p className="one-six">感知设备</p>
                           <div className="check-item">
                               <img src={require("../../images/check.png")} alt=""/>
                               <span>全部</span>
                           </div>
                           <div className="check-item">
                               <img src={require("../../images/check.png")}  alt=""/>
                               <span>反选</span>
                           </div>
                       </div>
                       <div className="switch-com clearfix">
                           <div className="tab-com clearfix">
                               <span>微卡口</span>
                               <i className="iconfont icon-gengduo"></i>
                           </div>
                           <ul className="switch-item">
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>人像识别</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>车牌识别</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>非机动车识别</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>Wifi嗅探</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                       <div className="switch-com clearfix">
                           <div className="tab-com clearfix">
                               <span>公共设施</span>
                               <i className="iconfont icon-gengduo"></i>
                           </div>
                           <ul className="switch-item">
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>人像门禁</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>视频监控</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>消防烟感</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>消防栓</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>水质检测</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>电子巡更</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>电梯监控</span>
                                   </div>
                               </li>
                               <li>
                                   <div className="check-item">
                                       <img src={require("../../images/check.png")}  alt=""/>
                                       <span>电梯监控</span>
                                   </div>
                               </li>
                           </ul>
                       </div>
                       <p className="one-six">设备状态</p>
                       <div className="chart-title">
                           <p><i className="circles bg-blue"></i><span>在线</span></p>
                           <p><i className="circles bg-yellow"></i><span>离线</span></p>
                           <p><i className="circles bg-red"></i><span>故障</span></p>
                       </div>
                   </div>
                   <div className={"radar " + (this.state.currentTab==0 || this.state.slidShowStatus?'':'hide')}>
                       <div className="waring">
                           <img src={require("../../images/waring.png")} alt=""/>
                           <p>01青浦区二联馨苑2栋6楼601室
                               出现烟雾报警温感报警请及时处理!
                           </p>
                       </div>
                       <div className="scan">
                           <div className="warn-count">
                               当前预警总数：<span>1件</span>
                           </div>
                           <div className="scan-circle"><img src={require("../../images/scan.png")} alt=""/></div>

                       </div>
                   </div>
                   <div className={'model-right ' + (this.state.slidShowStatus?'slid-out':'' + this.state.currentTab!=0?'':'hide')} >
                       <div className="person-count shandow">
                           <div className='jiao'>
                               <div className='top'></div>
                               <div className='right'></div>
                               <div className='bottom'></div>
                               <div className='left'></div>
                           </div>
                           <div className="slide-up" onClick={() => this._slidUp()}>{this.state.slidShowStatus?'展开':'收起'}</div>
                           <p className="one-six">实有人口</p>
                           <div className="search-input-right">
                               <input type="text" placeholder="搜索人员姓名"/>
                               <i className="iconfont icon-sousuo"></i>
                               <ul className="search-right-list">
                                   <li>xx小区</li>
                                   <li className="checked-list">xx小区</li>
                                   <li>xx小区</li>
                               </ul>
                           </div>
                           <div className="sel-item">
                               <DropdownButton bsStyle='success' title={'出租房'} key={'d'} id={'d'}>
                                   <MenuItem eventKey="1">出租房</MenuItem>
                                   <MenuItem eventKey="2">出租房</MenuItem>
                                   <MenuItem eventKey="3" active>激活条目</MenuItem>
                                   <MenuItem eventKey="4">出租房</MenuItem>
                               </DropdownButton>
                               <DropdownButton bsStyle='success' title={'出租房'} key={'ddd'} id={'d'}>
                                   <MenuItem eventKey="1">操作</MenuItem>
                                   <MenuItem eventKey="2">另一操作</MenuItem>
                                   <MenuItem eventKey="3" active>激活条目</MenuItem>
                                   <MenuItem divider />
                                   <MenuItem eventKey="4">分组链接</MenuItem>
                               </DropdownButton>
                               {/*<div className="sels">*/}
                                   {/*<select>*/}
                                   {/*<option value="">重点人口</option>*/}
                                   {/*</select>*/}
                               {/*</div>*/}
                           </div>
                           <ul className="person-list">
                               {this.state.personList.map((item,$index)=>{
                                   return(
                                       <li className={$index==1?"checked-people":''} key={'person-item'+$index}>
                                           <div className="person-pic">
                                               <img src={require("../../images/person-pic.jpeg")} alt=""/>
                                           </div>
                                           <div className="person-info">
                                               <div className="base-info">
                                                   <b>姓名：{item.name}</b>
                                                   <p className="sex color-blue">男</p>
                                                   <span className="color-blue">32岁</span>
                                               </div>
                                               <p ><span>身份证号：</span><span className="color-blue">342222222222****</span></p>
                                               <p><span>家庭住址：</span><span className="color-blue">青浦区xx小区2栋3单元508室</span></p>
                                               <div className="label-item"><span>标签：</span><span className="person-label">精神病人</span></div>
                                           </div>
                                       </li>
                                   )
                               })}

                           </ul>
                           <div className="bulr"></div>
                       </div>
                       <div className='chart-box shandow'>
                           <div className='jiao'>
                               <div className='top'></div>
                               <div className='right'></div>
                               <div className='bottom'></div>
                               <div className='left'></div>
                           </div>
                           <div className='page flex'>
                               <div className='left page-btn'>
                                   <i className='iconfont icon-arrowL'></i>
                               </div>
                               <div className='right page-btn'>
                                   <i className='iconfont icon-arrowR'></i>
                               </div>
                           </div>
                           <div id='colume' className={this.state.currentTab==1?'':'hide'}></div>
                           <div className={(this.state.currentTab==2?'':'hide') + ' pir-box'}>
                               <div className='title'>标题</div>
                               <div id='pie'></div>
                               <div className='legend'>
                                   {this.state.list.map((item,$index) => {
                                       return (
                                           <div key={$index} className='legend-item flex'>
                                               <div className='color' style={{'background':item.color}}></div>
                                               <div>{item.name}</div>
                                           </div>
                                       )
                                   })}
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={(this.state.currentTab==2?'':'hide') +' tips-house'}>
                       <p className="house-name">》二联馨苑小区12号</p>
                       <ul className="house-num ">
                           <li>601</li>
                           <li className="checked">602</li>
                           <li>603</li>
                           <li>604</li>
                           <li>605</li>
                           <li>606</li>
                       </ul>
                   </div>
                   <div className={(this.state.currentTab==1?'':'hide' ) +' tips-person flex'}>
                       <div className="left-info">
                           <p className="info-name">张云飞</p>
                           <p className="info-adr">地址：青浦区xxx小区2栋3单元508室</p>
                       </div>
                       <p className="right-icons"><i className="iconfont icon-right"></i></p>
                   </div>
               </div>



           </div>
        )
    }
}




export default IndexList;