import React, {Component} from 'react';
import { Input } from 'antd';
const Search = Input.Search;
import './model-warning.less'
import ModelPopupWarning from './model-popup-warning/model-popup-warning'
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts)
SolidGauge(Highcharts)
import { Modal, Button } from 'antd';
export default class  ModelWarning extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    title:'上海xxx科技信息有限公司'
                },
                {
                    title:'上海xxx科技信息有限公司'
                },
                {
                    title:'上海xxx科技信息有限公司'
                },
                {
                    title:'上海xxx科技信息有限公司'
                },
                {
                    title:'上海xxx科技信息有限公司'
                },
                {
                    title:'上海xxx科技信息有限公司'
                },
                {
                    title:'上海xxx科技信息有限公司'
                },
                {
                    title:'上海xxx科技信息有限公司'
                },{
                    title:'上海xxx科技信息有限公司'
                }
                ,{
                    title:'上海xxx科技信息有限公司'
                }
                ,{
                    title:'上海xxx科技信息有限公司'
                }
                ,{
                    title:'上海xxx科技信息有限公司'
                }

            ],
            slidShowStatus:this.props.slidShowStatus,
            currentTab:this.props.currentTab,
        }
        console.log(this.props.list)
    }
    componentDidMount(){

    }

    componentWillReceiveProps(nextProps) {
        var self=this
        self.setState({
            currentTab: nextProps.currentTab
        });
        self._colume()
        self._test()
        console.log(this.props.currentTab)
    }
    onPressEnter(data){
        alert(data)
    }
    showModal(){
        this.setState({
            visible: !this.state.visible,
        });
    }

    slidUp(){
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
                linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
                stops: [
                    [0, '#09AAF5'],
                   // [0.5, '#09AAF5'],
                    [1, '#E30000']
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
                text: '》实有警情事件',
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
        var chart = Highcharts.chart('warning-colume', options);

    }

    // 绘制图
    _test(){
        var option={
            chart: {
                type: 'solidgauge',
                spacing : [40, 15 , 10, 10]
            },
            title: null,
            pane: {
                center: ['50%', '55%'],
                size: '100%',
                startAngle: -150,
                endAngle: 150,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#ccc',
                    innerRadius: '100%',
                    outerRadius: '60%',
                    shape: 'arc'
                }
            },
            tooltip: {
                enabled: false
            },
            yAxis: {
                // stops: [
                //     [0.1, '#55BF3B'], // green
                //     [0.5, '#DDDF0D'], // yellow
                //     [0.9, '#DF5353'] // red
                // ],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                },
                shape: 'arc'
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        }
        // 速度仪表
        var chart1 = Highcharts.chart('warning-colume222', {
            yAxis: {
                min: 0,
                max: 200,
                title: {
                    text: '速度'
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '速度',
                data: [200],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">km/h</span></div>'
                },
                tooltip: {
                    valueSuffix: ' km/h'
                }
            },
                {
                    name: '速度',
                    data: [80],
                    dataLabels: {
                        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:12px;color:silver">km/h</span></div>'
                    },
                    tooltip: {
                        valueSuffix: ' km/h'
                    }
                }]
        });
        Highcharts.setOptions(option)
        // 定时刷新数据
        // if (chart1) {
        //     var point = chart1.series[0].points[0];
        //     var inc = Math.round((Math.random() - 0.5) * 100);
        //     var newVal = point.y + inc;
        //     if (newVal < 0 || newVal > 200) {
        //         newVal = point.y - inc;
        //     }
        //     point.update(150);
        // }
    }
    render(){
        return (
            <div className={"model-warning " + (this.state.slidShowStatus?'slid-out':'' + this.state.currentTab==6?'':'hide')}>
                <div className='sild-btn' onClick={() => this.slidUp()}>{this.state.slidShowStatus?'展开':'收起'}</div>

                <div className='right-container shandow' >
                    <div className='jiao'>
                        <div className='top'></div>
                        <div className='right'></div>
                        <div className='bottom'></div>
                        <div className='left'></div>
                    </div>
                    <div className='type-list'>
                        <div className='title'>实有警情事件</div>
                        <div className='search-box'>
                            <Search
                                placeholder="输入编号地址"
                                onSearch={value => this.onPressEnter(value)}
                            />
                        </div>
                        <div className='type-box flex'>
                            <div className='type-item'>
                                实时警情列表
                            </div>
                            <div className='type-item'>
                                历史警情列表
                            </div>
                        </div>
                        <div className='data-list'>
                            {this.state.dataList.map((item,$index)=>{
                                return(
                                    <div className='data-item flex' key={$index} key={$index} onClick={() => {this.showModal()}}>
                                        <img src={require('./WechatIMG2681521429351_.pic.jpg')} alt=""/>
                                        <div className='data-item-right'>
                                            <div className='item-info'>
                                                <span>时间</span>
                                                <span>2018-03-15   17:12:43</span>
                                            </div>
                                            <div className='item-info'>
                                                <span>事件</span>
                                                <span>电瓶车停在楼下被偷</span>
                                            </div>
                                            <div className='item-info'>
                                                <span>地点</span>
                                                <span>青浦区xx路110号xxx小区</span>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
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
                    <div id='warning-colume' className='home-chars'></div>
                </div>
                <div className='chart'>
                    <div id='warning-colume222' className='home-chars'></div>
                </div>

                {/* 单位详情弹框 */}
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ModelPopupWarning cancelFunc={()=>this.showModal()}></ModelPopupWarning>
                </Modal>

            </div>
        )}
}
