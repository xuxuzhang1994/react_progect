import React, {Component} from 'react';
import { Tabs , Input,Table,DatePicker,Dropdown,Menu,Button,Icon} from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const TabPane = Tabs.TabPane;
import 'antd/dist/antd.css';
const Search = Input.Search;
import './model-popup-warning-detail.less'
import { Pagination } from 'antd';

export default class ModelPopupWarning extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:[{
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }]
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
            <section className='model-popup-warning-detail shandow'>
                <div className='subject'>
                    <div className='head flex'>
                        <div>》警情列表</div>
                        <Icon type="close" onClick={()=>this.handleCancel()}/>
                    </div>
                    <div className='data-list'></div>
                </div>
                <ul className='data-list'>
                    <li className='data-item flex'>
                        <span className='title'>预警信息 </span>
                        <span className='content'>电瓶车停在楼下被偷 </span>
                    </li>
                    <li className='data-item flex'>
                        <span className='title'>预警类型 </span>
                        <span className='content'>电瓶车停在楼下被偷 </span>
                    </li>
                    <li className='data-item flex'>
                        <span className='title'>预警时间 </span>
                        <span className='content'>电瓶车停在楼下被偷 </span>
                    </li>
                    <li className='data-item flex'>
                        <div className='flex'>
                            <span className='title'>处置措施 </span>
                            <span className='content'>安排人员前往现场查看 </span>
                        </div>
                        <div className='flex'>
                            <span className='title'>处理人 </span>
                            <span className='content'>王警官 </span>
                        </div>

                    </li>
                    <li className='data-item flex'>
                        <span className='title'>详细地址 </span>
                        <span className='content'>上海市xxx路xxx小区xx栋xx单元xx室 </span>
                    </li>
                    <li className='data-item flex'>
                        <div className='flex'>
                            <span className='title'>报警人 </span>
                            <span className='content'>张三 </span>
                        </div>
                        <div className='flex'>
                            <span className='title'>联系电话 </span>
                            <span className='content'>021-******* </span>
                        </div>
                    </li>

                </ul>
                <div className='look-monitor'>
                    查看附近监控
                </div>
            </section>
        )}
}
