import React, {Component} from 'react';
import './statistical-analysis.less';
import Nav from 'components/Nav/Nav';
import RankSection from './rank-section/rank-section';


export default class Statiscal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="statiscal">
                <Nav/>
                <section className="statiscal-section ">
                    <div className="rank-chart">
                        <img src={require("./rank-section.jpg")} alt=""/>
                    </div>
                    <div className="reli-chart">
                        <img src={require("./reli.jpg")} alt=""/>
                    </div>
                    <div className="shebei-chart">
                        <img src={require("./shebei.jpg")} alt=""/>
                    </div>
                    <div className="shequ-chart">
                        <img src={require("./shequ.jpg")} alt=""/>
                    </div>
                </section>
            </div>
        )
    }
}