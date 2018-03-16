import React, {Component} from 'react';
import api from "../../api/maintenance-api";
import './Warning.less';


import {connect} from 'react-redux';

class Waring extends Component {
    componentDidMount(){
        console.log('11111')


    }
    render() {
        return (
            <div className="shanghai-waring">
                <section className="search-section clearfix">
                    <div className="police-waring pull-left">
                        <p className="title-color font-18 p-t-10 ">》公安实战预警</p>
                        <div className="search-top flex">
                            <div className="waring-totle font-18 ">
                                <p className="">预警总数：</p> <span>16条</span>
                            </div>
                            <div className="search-right ">
                                <label className="cor-time">起止时间</label>
                                <div className="search-input">
                                    <img src={require("../../images/construct/search.jpeg")} alt=""/>
                                </div>
                                <p className="search-btn">查询</p>
                            </div>
                        </div>
                        <ul className="tab-items flex">
                            <li className="checked-item">治安支队</li>
                            <li>消防支队</li>
                            <li>刑侦支队</li>
                            <li>交警支队</li>
                            <li>网安支队</li>
                            <li>更多》</li>
                        </ul>
                        <ul className="info-item">
                            <li className="flex bg-red">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-red2">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-origin">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-yellow">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-yellow">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-green">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="society-waring pull-left ">
                        <p className="title-color font-18 p-t-10 ">》社会共治预警</p>
                        <div className="search-top flex">
                            <div className="waring-totle font-18 ">
                                <p className="">预警总数：</p> <span>11条</span>
                            </div>
                            <div className="search-right ">
                                <label className="cor-time">起止时间</label>
                                <div className="search-input">
                                    <img src={require("../../images/construct/search.jpeg")} alt=""/>
                                </div>
                                <p className="search-btn">查询</p>
                            </div>
                        </div>
                        <ul className="tab-items flex">
                            <li className="checked-item">综治办</li>
                            <li>网格中心</li>
                            <li>居委会</li>
                            <li>物业</li>
                            <li>交警支队</li>
                            <li>更多》</li>
                        </ul>
                        <ul className="info-item">
                            <li className="flex bg-red">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-red2">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-origin">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-yellow">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-yellow">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                            <li className="flex bg-green">
                                <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                <span>类型：火灾消防</span>
                                <div className="info-right flex">
                                    <p className="">时间：2018/02/01  19:12</p>
                                    <i className="iconfont icon-icon7">  </i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}





export default Waring;