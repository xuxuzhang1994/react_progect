import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import api from "../../api/maintenance-api";
import './home.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    _https() {
        var self=this
        console.log(self)
        api.carBrandList().then((data) => {
            if (data.errcode == 0) {
                self.setState({
                    brandList : data.result.memFace
                })

            }
        });
    }

    render() {
        console.log(this.state.count)
        var self=this
        return (

            <div className='x'>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>


                <h1>{this.state.brandList}</h1>
                <img src={this.state.brandList} alt="" className='img' />
                <button onClick={() => this._https()}>登陆111</button>
            </div>
        )
    }
}

export default hot(module)(Home);

