import React, {Component} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
const Search = Input.Search;
import 'antd/dist/antd.css';
import './model-popup-danwei.less'
import { Pagination ,Icon} from 'antd';
export default class ModelPopupDanwei extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
        this.handleCancel=this.props.cancelFunc
        console.log(this.props)
    }
    componentDidMount(){
        var self=this;
    }

    showModal = () => {
        this.setState({
            visible: !this.state.visible,
        });
    }



    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    render(){
        return (
            <section className='model-popup-danwei shandow'>
                <div className='subject'>
                    <div className='head flex'>
                        <div>》一单位一档</div>
                        <Icon type="close" onClick={()=>this.handleCancel()}/>
                    </div>
                    <section className='company-info'>
                        <p className='title'>单位信息</p>
                        <div className='detail flex'>
                            <img src={require("./danwei.png")} alt=""/>
                            <div className='info-list'>
                                <div className='name'>上海xxx科技信息有限公司</div>
                                <div className='info-item'>
                                    <span>地址：</span>
                                    <span>青浦区</span>
                                </div>
                                <div className='info-item'>
                                    <span>电话：</span>
                                    <span>1985789572052</span>
                                </div>
                                <div className='info-item'>
                                    <span>法人：</span>
                                    <span>张安顺</span>
                                </div>
                                <div className='info-item'>
                                    <span>主营：</span>
                                    <span>软件开发</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='practitioners'>
                        <div className='slide-top-bar flex'>
                            <div className='title'>从业人员(14人)</div>
                            <div className='search-box'>
                                <Search
                                    placeholder="搜索小区"
                                    onSearch={value => this.onPressEnter(value)}
                                />
                            </div>
                        </div>
                        <table className='data-list'>
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>性别</th>
                                    <th>身份证</th>
                                    <th>电话</th>
                                    <th>居住地址</th>
                                </tr>
                            </thead>
                            <tbody>
                            {[1,2,3,4].map($index=>{
                                return(<tr key={$index}>
                                    <td>张晓华</td>
                                    <td>男</td>
                                    <td>3387305972305178951</td>
                                    <td>18700862744</td>
                                    <td>青浦区徐泾镇二联馨苑*****</td>
                                </tr>)
                            })}
                            </tbody>
                        </table>
                        <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
                    </section>
                    <section>
                        <div className='slide-top-bar'>
                            <div className='title'>安防设备管理</div>
                        </div>
                        <ul className='equipment-list flex'>
                            {[1,2,3,4].map($index => {
                                return(
                                    <li className='equipment-item flex' key={'equipment-item' + $index}>
                                        <img src={require("./xiaofangshuan.png")} alt=""/>
                                        <div className='item-info'>
                                            <div className='title'>消防栓</div>
                                            <div className='person'>
                                                <span>负责人 : </span>
                                                <span className='main-text-color'>张世华</span>
                                            </div>
                                            <div className='person'>
                                                <span>编号 : </span>
                                                <span className='main-text-color'>cc-201823</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </section>
        )}
}
