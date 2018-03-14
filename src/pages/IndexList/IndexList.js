import React, {Component} from 'react';
import './indexList.less';


import {connect} from 'react-redux';

class IndexList extends Component {
    render() {
        return (

           <div>
               <div className="left-list">
                <div className="search-top">
                  <p className="search-btn">全区</p>
                  <div className="search-input">
                      <input type="text" placeholder="搜索小区"/>
                      <i className=""></i>
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
                       <i></i>
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
                       <i></i>
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
               <div className="radar">
                   <div className="waring">
                       <img src={require("../../images/waring.png")} alt=""/>
                       <p>01青浦区二联馨苑2栋6楼601室
                           出现烟雾报警温感报警请及时处理!
                       </p>
                   </div>
                   <div className="scan">
                       <img src={require("../../images/scan.png")} alt=""/>
                       <div className="warn-count">
                           当前预警总数：<span>1件</span>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}




export default IndexList;