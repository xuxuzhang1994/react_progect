import React, {Component} from 'react';
import './rank-section.less';
import Nav from 'components/Nav/Nav';
import { DropdownButton,MenuItem} from 'react-bootstrap';

export default class RankSection extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var self=this;
        self._rank()
    }
    _rank(){
        var opation={
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
            legend:{
                enabled:false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    borderWidth: 0,
                    color:'RGBA(0, 148, 252, 1)'
                }
            },
            series: [{
                name: '东京',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }],
            credits: {
                enabled:false
            },
        };
        Highcharts.chart('rank-chart',opation);

    }
    render(){
        return(
            <div className="rank-section shandow">
                <div className='jiao'>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                </div>
                <p className="rank-title">》预警排行统计</p>
                <div className="sel-section flex">
                    <div className="change-tab flex">
                        <div>公安实战</div>
                        <div>社会共治</div>
                    </div>
                    <div className="sel-right flex">
                        <div className="sel-drop">
                            <DropdownButton bsStyle='success' title={'2月'} key={'d'} id={'d'}>
                                <MenuItem eventKey="1">1月</MenuItem>
                                <MenuItem eventKey="2">2月</MenuItem>
                            </DropdownButton>
                        </div>
                        <div className="bar-btn">
                            <img src={require("./bar.jpg")} alt=""/>
                        </div>
                        <div className="line-btn">
                            <img src={require("./line.jpg")} alt=""/>
                        </div>
                    </div>
                </div>
                <div id="rank-chart" className="rank-chart"></div>
            </div>
        )
    }
}