import React, {Component} from 'react';
import './indexList.less';


import {connect} from 'react-redux';

class IndexList extends Component {
    render() {
        return (
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
               <div className="">
                   <div className="tab-com">
                       <span>微卡口</span>
                       <i></i>
                   </div>
               </div>



           </div>
        )
    }
}




export default IndexList;