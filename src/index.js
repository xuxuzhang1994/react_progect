import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import { Router,Route} from 'react-router-dom';
//import {hashHistory} from 'react-router';
import App from 'components/App/App';
import ro from 'components/App/App';
import baseCss from './base/css/base.less'
import font from './base/glyphicons.less';
import getRouter from 'router/router';
//import test1 from 'components/components';

import createBrowserHistory from 'history/createBrowserHistory'


/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
    module.hot.accept('./App/App', () => {
        const NextApp = require('components/App/App').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    const customHistory = createBrowserHistory()
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router history={customHistory}>
                    <RootElement />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}