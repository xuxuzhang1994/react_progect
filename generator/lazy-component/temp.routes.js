
import <%= upCaseName %>Model from 'bundle-loader?lazy&name=<%= fileName %>!./<%= fileName %>';

let <%= upCaseName %>Routes = [
    {
        path: '<%= modulePath %>/<%= fileName %>',
        component: <%= upCaseName %>Model
    }
]
<%= upCaseName %>Routes=<%= upCaseName %>Routes.concat();

export default <%= upCaseName %>Routes;


