import React, {Component} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
const Search = Input.Search;
import 'antd/dist/antd.css';
import './model-popup-have-strength.less'
import { Pagination ,Icon} from 'antd';
export default class ModelPopupHaveStrength extends Component{
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
            <section className='model-popup-have-strength shandow'>
                <div className='subject'>
                    <div className='head flex'>
                        <div>》详细信息</div>
                        <Icon type="close" onClick={()=>this.handleCancel()}/>
                    </div>
                    <section className='base-info'>
                        <div className='slide-top-bar'>
                            <div className='title'>基本信息</div>
                        </div>
                        <div className='person-info detail flex'>
                            <img src={require("./photo.png")} alt=""/>
                            <div className='info-list flex'>
                                <div className='name'>李大壮</div>
                                <div className='info-item'>
                                    <span>性别：</span>
                                    <span>男</span>
                                </div>
                                <div className='info-item'>
                                    <span>上级：</span>
                                    <span>xxx</span>
                                </div>
                                <div className='info-item'>
                                    <span>年龄：</span>
                                    <span>32岁</span>
                                </div>
                                <div className='info-item'>
                                    <span>辖区：</span>
                                    <span>xx社区，xx社区，xx社区</span>
                                </div>
                                <div className='info-item'>
                                    <span>警号：</span>
                                    <span>4002189</span>
                                </div>
                                <div className='info-item'>
                                    <span>所属派出所：</span>
                                    <span>xxxx派出所</span>
                                </div>
                                <div className='info-item'>
                                    <span>电话：</span>
                                    <span>021-*******</span>
                                </div>
                                <div className='info-item'>
                                    <span>地址：</span>
                                    <span>青浦区xxxxx</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='slide-top-bar'>
                            <div className='title'>实有装备</div>
                        </div>
                        <ul className='equipment-list flex'>
                            {[1,2,3,4].map($index => {
                                return(
                                    <li className='equipment-item flex' key={'equipment-item' + $index}>
                                        <img src={require("./equipment.png")} alt=""/>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </section>
        )}
}
