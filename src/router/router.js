// import React from 'react';
//
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
//
// import Bundle from './Bundle';
//
// import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
// import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
// import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
//
// const Loading = function () {
//     return <div>Loading...</div>
// };
//
// const createComponent = (component) => (props) => (
//     <Bundle load={component}>
//         {
//             (Component) => Component ? <Component {...props} /> : <Loading/>
//         }
//     </Bundle>
// );
//
// const getRouter = () => (
//     <Router>
//         <div>
//             <ul>
//                 <li><Link to="/">首页</Link></li>
//                 <li><Link to="/page1">Page1</Link></li>
//                 <li><Link to="/counter">Counter</Link></li>
//                 <li><Link to="/userinfo">UserInfo</Link></li>
//             </ul>
//             <Switch>
//                 <Route exact path="/" component={createComponent(Home)}/>
//                 <Route path="/page1" component={createComponent(Page1)}/>
//                 <Route path="/counter" component={createComponent(Counter)}/>
//                 <Route path="/userinfo" component={createComponent(UserInfo)}/>
//             </Switch>
//         </div>
//     </Router>
// );
//
// export default getRouter;

import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle';
import ComponentsRouter from '../components/components'
import Loading from 'components/Loading/Loading';
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import EarlyWarningCenter from 'bundle-loader?lazy&name=early-warning-center!pages/early-warning-center/early-warning-center';
import PerceptionQingpu from 'bundle-loader?lazy&name=perception-qingpu!pages/perception-qingpu/perception-qingpu';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import Warning from "bundle-loader?lazy&name=warning!pages/Warning/Warning";
import IndexList from "bundle-loader?lazy&name=indexList!pages/IndexList/IndexList";

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

var Parent1 = () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/page1" component={createComponent(Page1)}/>
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/userinfo1" component={createComponent(UserInfo)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
)

const Parent = () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/page1" component={createComponent(Page1)}/>
            <Route path="/counter" component={createComponent(Counter)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/early-warning-center" component={createComponent(EarlyWarningCenter)}/>
            <Route path="/warning" component={createComponent(Warning)}/>
            <Route path="/indexList" component={createComponent(IndexList)}/>
            <Route path="/perception-qingpu" component={createComponent(PerceptionQingpu)}/>
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
)

console.log(Parent)

export default Parent

