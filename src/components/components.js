import React from 'react'
import page1 from '../pages/qinpu/perception-qingpu/page1/page1';
import PageModel from '../pages/qinpu/perception-qingpu/page1/page1';
import PageModel1 from '../pages/perception-qingpu/perception-qingpu';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components

////////////////////////////////////////////////////////////
// then our route config

const Bus = () => <h3>Bus</h3>
const fs = () => <h3>fasdfasdf</h3>
const routes = [
    {   path: '/perception-qingpu',
        component: fs,
    },
    {
        path: '/perception-qingpu/page1',
        component: Bus
    }
]
console.log(routes)

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
    <Route exact path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)

// const RouteConfigExample = () => (
//     <Router>
//         <div>
//             {routes.map((route, i) => (
//                 <RouteWithSubRoutes key={i} {...route}/>
//             ))}
//         </div>
//     </Router>
// )
// const RouteConfigExample = () => (
//     <div>{
//         routes.map((route, i) => (
//             <Route exact key={i} path={route.path} component={route.component} />
//         ))
//     }</div>
// )

const RouteConfig = () => (
    <div>{
        routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))
    }</div>
)

export default RouteConfig