import React, {Component} from 'react';
import { Input } from 'antd';
const Search = Input.Search;
import './model-menu-left.less'
import { Modal, Button } from 'antd';
import moment from "moment/moment";
export default class  ModelMenuLeft extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentTab:0
        }
        this.changeTab=this.props.changeTab
        console.log(this.props.changeTab())
    }
    componentDidMount(){
        var self=this;
        console.log($('body'))
    }


    componentWillReceiveProps(nextProps) {
        console.log(this.nextProps)
    }

    render(){
        return (
            <div className="left-list shandow">
                <div className='jiao'>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                </div>
                <div className="search-top flex">
                    <div className="search-btn">全区</div>
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
                <div className="one-six">一标六实</div>
                <ul className="six-item">
                    <li className={(this.state.currentTab==1?"current-tab":" ") + ' flex'}  onClick={() => this.changeTab(1)}>
                        <div  className='item-info'>实有人口</div>
                        <div className="item-count">1,177,567</div>
                    </li>
                    <li className={(this.state.currentTab==2?"current-tab":" ") + ' flex'} onClick={() => this.changeTab(2)}>
                        <div className="item-info">实有房屋</div>
                        <div className="item-count">32,567</div>
                    </li>
                    <li className={(this.state.currentTab==3?"current-tab":" ") + ' flex'} onClick={() => this.changeTab(3)}>
                        <div className="item-info">实有单位</div>
                        <div className="item-count">8,467</div>
                    </li>
                    <li className={(this.state.currentTab==4?"current-tab":" ") + ' flex'} onClick={() => this.changeTab(4)}>
                        <div className="item-info">实有安防设备</div>
                        <div className="item-count">49,854</div>
                    </li>
                    <li className={(this.state.currentTab==5?"current-tab":" ") + ' flex'} onClick={() => this.changeTab(5)}>
                        <div className="item-info">实有力量与装备</div>
                        <div className="item-count">23,567</div>
                    </li>
                    <li className={(this.state.currentTab==6?"current-tab":" "+ ' flex') } onClick={() => this.changeTab(6)}>
                        <div className="item-info">实有警情事件</div>
                        <div className="item-count">12</div>
                    </li>
                </ul>
                <div className="checkAll">
                    <div className="one-six">感知设备</div>
                    <div className="check-item">
                        <img src={require("../../../images/check.png")} alt=""/>
                        <span>全部</span>
                    </div>
                    <div className="check-item">
                        <img src={require("../../../images/check.png")}  alt=""/>
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
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>人像识别</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>车牌识别</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>非机动车识别</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
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
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>人像门禁</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>视频监控</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>消防烟感</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>消防栓</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>水质检测</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>电子巡更</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>电梯监控</span>
                            </div>
                        </li>
                        <li>
                            <div className="check-item">
                                <img src={require("../../../images/check.png")}  alt=""/>
                                <span>电梯监控</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="one-six">设备状态</div>
                <div className="chart-title flex">
                    <div><i className="circles bg-blue"></i><span>在线</span></div>
                    <div><i className="circles bg-yellow"></i><span>离线</span></div>
                    <div><i className="circles bg-red"></i><span>故障</span></div>
                </div>
            </div>
        )}
}
