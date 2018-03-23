import React, {Component} from 'react';
import './query-index.less';
import Nav from 'components/Nav/Nav';
import { Input } from 'antd';
const Search = Input.Search;

export default class QueryIndex extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="query-index">
                <Nav index='3'/>
                <div className="query-model">
                    <div className="query-title">
                        <img src={require("./search-title.jpg")} alt=""/>
                    </div>
                    <div className="query-item flex">
                        <div className="query-input">
                            <Search
                                placeholder="请输入关键字"
                                onSearch={value => console.log(value)}
                                enterButton=" 搜索"
                            />
                            <i className="iconfont icon-sousuo search-icon"></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}