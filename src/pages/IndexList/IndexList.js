import React, {Component} from 'react';
import './indexList.less';
import OneTask from './test.js'
import {connect} from 'react-redux';

class IndexList extends Component {
    constructor(props) {
        super(props);

        const books=[{ name: '出租房', color: '#1050C7',},
            { name: '自住房屋', color: '#326AD5'},
            { name: '闲置空房', color: '#2EA7D1'},
            {name: '商业用房', color: '#30DAE9'},
            {name: '田间窝棚', color: '#1AD1BE'},
            {name: '其他', color: '#30E97E'},]

        this.state = {
            list: books,
        }
        console.log(this.state.booksElements)
    }
    componentDidMount(){
       // this._colume()
        this._pie()
    }

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
    render() {

        return (

           <div style={{background:'#000'}}>
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
                   <li >
                       <p className="item-info">实有人口</p>
                       <p className="item-count">1,177,567</p>
                   </li>
                   <li >
                       <p className="item-info">实有房屋</p>
                       <p className="item-count">32,567</p>
                   </li>
                   <li >
                       <p className="item-info">实有单位</p>
                       <p className="item-count">8,467</p>
                   </li>
                   <li >
                       <p className="item-info">实有安防设备</p>
                       <p className="item-count">49,854</p>
                   </li>
                   <li >
                       <p className="item-info">实有力量与装备</p>
                       <p className="item-count">23,567</p>
                   </li>
                   <li >
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
               <div className="radar" style={{display:'none'}}>
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
               <div className="person-count shandow">
                   <div className='jiao'>
                       <div className='top'></div>
                       <div className='right'></div>
                       <div className='bottom'></div>
                       <div className='left'></div>
                   </div>
                   <div className="slide-up">收起</div>
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
                       <div className="sels">
                           {/*<select>*/}
                               {/*<option value="">重点人口</option>*/}
                           {/*</select>*/}
                       </div>
                   </div>
                   <ul className="person-list">
                       <li className="checked-people">
                           <div className="person-pic">
                               <img src={require("../../images/person-pic.jpg")} alt=""/>
                           </div>
                           <div className="person-info">
                               <div className="base-info">
                                   <b>姓名：张家瑜</b>
                                   <p className="sex color-blue">男</p>
                                   <span className="color-blue">32岁</span>
                               </div>
                               <p ><span>身份证号：</span><span className="color-blue">342222222222****</span></p>
                               <p><span>家庭住址：</span><span className="color-blue">青浦区xx小区2栋3单元508室</span></p>
                               <div className="label-item"><span>标签：</span><span className="person-label">精神病人</span></div>
                           </div>
                       </li>
                       <li >
                           <div className="person-pic">
                               <img src={require("../../images/person-pic.jpg")} alt=""/>
                           </div>
                           <div className="person-info">
                               <div className="base-info">
                                   <b>姓名：张家瑜</b>
                                   <p className="sex color-blue">男</p>
                                   <span className="color-blue">32岁</span>
                               </div>
                               <p ><span>身份证号：</span><span className="color-blue">342222222222****</span></p>
                               <p><span>家庭住址：</span><span className="color-blue">青浦区xx小区2栋3单元508室</span></p>
                               <div className="label-item"><span>标签：</span><span className="person-label">精神病人</span></div>
                           </div>
                       </li>
                       <li >
                           <div className="person-pic">
                               <img src={require("../../images/person-pic.jpg")} alt=""/>
                           </div>
                           <div className="person-info">
                               <div className="base-info">
                                   <b>姓名：张家瑜</b>
                                   <p className="sex color-blue">男</p>
                                   <span className="color-blue">32岁</span>
                               </div>
                               <p ><span>身份证号：</span><span className="color-blue">342222222222****</span></p>
                               <p><span>家庭住址：</span><span className="color-blue">青浦区xx小区2栋3单元508室</span></p>
                               <div className="label-item"><span>标签：</span><span className="person-label">精神病人</span></div>
                           </div>
                       </li>
                       <li >
                           <div className="person-pic">
                               <img src={require("../../images/person-pic.jpg")} alt=""/>
                           </div>
                           <div className="person-info">
                               <div className="base-info">
                                   <b>姓名：张家瑜</b>
                                   <p className="sex color-blue">男</p>
                                   <span className="color-blue">32岁</span>
                               </div>
                               <p ><span>身份证号：</span><span className="color-blue">342222222222****</span></p>
                               <p><span>家庭住址：</span><span className="color-blue">青浦区xx小区2栋3单元508室</span></p>
                               <div className="label-item"><span>标签：</span><span className="person-label">精神病人</span></div>
                           </div>
                       </li>

                   </ul>
                   <div className="bulr"></div>
               </div>
               <div className='chart-box'>
                   <div className='jiao'>
                       <div className='top'></div>
                       <div className='right'></div>
                       <div className='bottom'></div>
                       <div className='left'></div>
                   </div>
                   <div className='page flex'>
                       <div className='left btn'>
                           <i className='iconfont icon-arrowL'></i>
                       </div>
                       <div className='right btn'>
                           <i className='iconfont icon-arrowR'></i>
                       </div>
                   </div>

                   <div id='colume' className=''></div>
                   <div className='pir-box'>
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
        )
    }
}




export default IndexList;