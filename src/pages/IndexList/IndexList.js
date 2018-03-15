import React, {Component} from 'react';
import './indexList.less';




import {connect} from 'react-redux';

class IndexList extends Component {
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
           </div>
        )
    }
}




export default IndexList;