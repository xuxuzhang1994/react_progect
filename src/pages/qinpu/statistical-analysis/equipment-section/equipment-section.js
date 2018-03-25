import React, {Component} from 'react';
import './equipment-section.less';
import Nav from 'components/Nav/Nav';

export default class RankSection extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var self=this;
        self._equipment()
    }
    _equipment(){
        var opation= {
            chart: {
                type: 'column',
                backgroundColor:'transparent',
                plotBackgroundColor:'transparent',
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: [
                    '一月',
                    '二月',
                    '三月',
                    '四月',
                    '五月',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月',
                    '十一月',
                    '十二月'
                ],
                crosshair: true,
                lineColor:'RGBA(0, 102, 255, 1)',
                tickLength:0,
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                gridLineColor:'RGBA(1, 170, 229, .5)',
                gridLineDashStyle:'Dash',
            },
            tooltip: {
                backgroundColor:'RGBA(0, 0, 0, .75)',
                borderColor:'RGBA(0, 148, 252, 1)',
                headerFormat: '<span style="font-size:10px;color: #fff">数量：{point.y}个</span><table>',
                pointFormat: '<tr style="color:#fff;padding:0;margin-bottom: .05rem"><td><b style="display: inline-block;width: .05rem;height: .05rem ;border-radius: 100%;background:{series.color};margin-right: .04rem"></b>设备编号:</td><td>123456</td></tr>+<tr style="color:#fff;padding:0"><td >故障时间： </td>' +
                '<td>03-03：19:32:01</td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            legend:{
                enabled:false,
                // align:'right',
                // floating:true,
                // // y:-250
                // // Format:'<span><i></i></span>',
                // // useHTML:true,
            },
            plotOptions: {
                column: {
                    borderWidth: 0
                },

            },
            credits: {
                enabled:false
            },
            series: [{
                name: '在线',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }, {
                name: '离线',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
            }, {
                name: '故障',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
            }, {
                name: '维修',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
            }]
        };
        Highcharts.chart('equipment-chart',opation);


    }
    render(){
        return(
            <div className="equipment-section shandow">
                <div className='jiao'>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                </div>
                <p className="rank-title">》预警热力图</p>
                <div className="sel-section flex">
                    <div className="change-tab flex">
                        <div>公安实战</div>
                        <div>社会共治</div>
                    </div>
                </div>
                <div id="equipment-chart" className="equipment-chart">
                </div>
                <div className="lagend-r flex">
                    <div><i></i><span>在线</span></div>
                    <div><i></i><span>离线</span></div>
                    <div><i></i><span>故障</span></div>
                    <div><i></i><span>维修</span></div>
                </div>
            </div>
        )
    }
}