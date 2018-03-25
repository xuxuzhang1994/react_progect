import React, {Component} from 'react';
import './statistical-analysis.less';
import Nav from 'components/Nav/Nav';
import RankSection from './rank-section/rank-section';
import ThermodynamicSection from './thermodynamic-section/thermodynamic-section';
import EquipmentSection from './equipment-section/equipment-section';
import PeaceSection from './peace-section/peace-section';


export default class Statiscal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="statiscal">
                <Nav index='6'/>
                <section className="statiscal-section ">
                    <RankSection/>
                    <ThermodynamicSection/>
                    <EquipmentSection/>
                    <PeaceSection/>
                    {/*<div className="rank-chart">*/}
                        {/*<img src={require("./rank-section.jpg")} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="reli-chart">*/}
                        {/*<img src={require("./reli.jpg")} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="shebei-chart">*/}
                        {/*<img src={require("./shebei.jpg")} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className="shequ-chart">*/}
                        {/*<img src={require("./shequ.jpg")} alt=""/>*/}
                    {/*</div>*/}
                </section>
            </div>
        )
    }
}