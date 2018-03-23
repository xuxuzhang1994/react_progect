import React, {Component} from 'react';
import { Input } from 'antd';
const Search = Input.Search;
import './model-have-house.less'
import ModelPopupHaveHousei from './model-popup-hvae-house/model-popup-hvae-house'
import { Modal, Button } from 'antd';
import { DropdownButton,MenuItem} from 'react-bootstrap';

export default class  ModelPerson extends Component{
    constructor(props) {
        super(props);
        const houseList=[
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
        ];
        const books=[{ name: '出租房', color: '#1050C7',},
            { name: '自住房屋', color: '#326AD5'},
            { name: '闲置空房', color: '#2EA7D1'},
            {name: '商业用房', color: '#30DAE9'},
            {name: '田间窝棚', color: '#1AD1BE'},
            {name: '其他', color: '#30E97E'},]
        this.state = {
            list:books,
            houseList: houseList,
            slidShowStatus:this.props.slidShowStatus,
            currentTab:this.props.currentTab
        }
        console.log(this.props.currentTab)
    }

    componentDidMount(){
        var self=this;
        this._pie()
        console.log($('body'))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentTab: nextProps.currentTab
        });
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

    render(){
        return (
            <div className={"model-person " + (this.state.slidShowStatus?'slid-out':'' + this.state.currentTab==2?'':'hide')}>
                <div className='sild-btn' onClick={() => this.slidUp()}>{this.state.slidShowStatus?'展开':'收起'}</div>

                <div className='right-container shandow' >
                    <div className='jiao'>
                        <div className='top'></div>
                        <div className='right'></div>
                        <div className='bottom'></div>
                        <div className='left'></div>
                    </div>
                    <div className='person-count'>
                        <div className="one-six">实有房屋</div>
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
                        </div>
                        <ul className="person-list">
                            {this.state.houseList.map((item,$index)=>{
                                return (
                                    <li onClick={ () => {this.showModal()}}  className={'flex'+ ($index==1?" checked-people":'') } key={'person-item'+$index}>
                                        <div className="person-pic">
                                            <img src={require("../../../images/person-pic.jpeg")} alt=""/>
                                        </div>
                                        <div className="person-info">
                                            <div className="base-info flex">
                                                <b>户主：{item.name}</b>
                                                <div className="sex color-blue">男</div>
                                                <span className="color-blue">32岁</span>
                                            </div>
                                            <div><span>登记人口：</span><span className="color-blue">{item.count}人</span>  </div>
                                            <div className="flex house"><span className="adr-label">房屋位置：</span><div className="color-blue adr-info">{item.address}</div></div>
                                            <div className="label-item"><span>标签：</span><span className="person-label">{item.flags}</span></div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
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

                {/* 单位详情弹框 */}
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ModelPopupHaveHousei cancelFunc={()=>this.showModal()}></ModelPopupHaveHousei>
                </Modal>

            </div>
        )}
}
