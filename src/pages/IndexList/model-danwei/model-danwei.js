import React, {Component} from 'react';
import './model-danwei.less'
export default class  OneTask extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            person:'',
            work:'',
            applyclass:'',
            otherinfo:'',
            applytime1:'',
            applytime2:'',
            timecount:''
        }
        console.log(this.props.list)
    }
    componentDidMount(){
        console.log($('body'))
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
    render(){
        return (
            <div className='model-danwei shandow'>

                <div className='right-container'>
                    <div className='jiao'>
                        <div className='top'></div>
                        <div className='right'></div>
                        <div className='bottom'></div>
                        <div className='left'></div>
                    </div>
                    <div className='type-list'>
                        <div className='search-box'>

                        </div>
                        <div className='type-box'>
                            <div className='type-item'>
                                企业单位
                            </div>
                            <div className='type-item'>
                                事业单位
                            </div>
                            <div className='type-item'>
                                机关团体
                            </div>
                            <div className='type-item'>
                                其他
                            </div>
                        </div>
                        <div className='data-list'>
                            <div className='data-item'>
                                上海xxx科技信息有限公司
                            </div>
                        </div>
                    </div>
                </div>

                <div className='chart-box'>
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
                    <div id='colume'></div>
                </div>

            </div>
        )}
}
