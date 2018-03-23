import React, {Component} from 'react';
import {Modal, Tabs , Input,Table,DatePicker,Dropdown,Menu,Button,Icon} from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const TabPane = Tabs.TabPane;
import 'antd/dist/antd.css';
const Search = Input.Search;
import './model-popup-warning.less'
import { Pagination } from 'antd';
import ModelPopupWarningDetail from '../model-popup-warning-detail/model-popup-warning-detail'
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

    showModal(){
        this.handleCancel()
        this.setState({
            visible: !this.state.visible,
        });
    }



    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    render(){
        const menu = (
            <Menu>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd menu item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        const columns = [{
            title: '时间',
            dataIndex: 'name',
            key: 'time',
        }, {
            title: '地点',
            dataIndex: 'age',
            key: 'address',
        }, {
            title: '事件',
            dataIndex: 'address',
            key: 'shijain',
        },{
            title: '类型',
            dataIndex: 'address',
            key: 'type',
        },{
            title: '联系人',
            dataIndex: 'address',
            key: 'person',
        },{
            title: '联系方式',
            dataIndex: 'address',
            key: 'phont',
        },{
            title: '状态',
            dataIndex: 'address',
            key: 'status',
            render: (text, record) => (
                <div className='look-detail' onClick={()=>this.showModal()}>查看</div>)
        }];

        return (
            <section className='model-popup-warning shandow'>
                <div className='subject'>
                    <div className='head flex'>
                        <div>》警情列表</div>
                        <Icon type="close" onClick={()=>this.handleCancel()}/>
                    </div>

                    <Tabs type="card">
                        <TabPane tab="实时警情" key="1">
                            <div className='query-box flex'>
                                <div className='query-item'>
                                    <span>时间：</span>
                                    <DatePicker  />
                                </div>
                                <div className='query-item'>
                                    <span>地点：</span>
                                    <DatePicker  />
                                </div>
                                <div className='query-item'>
                                    <span>类型：</span>
                                    <Dropdown overlay={menu}>
                                        <Button style={{ marginLeft: 8 }}>
                                            Button <Icon type="down" />
                                        </Button>
                                    </Dropdown>
                                </div>
                                <div className='search-btn'>查询</div>
                            </div>
                            <section className='practitioners'>
                                <Table dataSource={this.state.data} columns={columns} />
                            </section>
                        </TabPane>
                        <TabPane tab="历史警情" key="2">
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                    </Tabs>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ModelPopupWarningDetail cancelFunc={()=>this.showModal()}></ModelPopupWarningDetail>
                </Modal>
            </section>
        )}
}
