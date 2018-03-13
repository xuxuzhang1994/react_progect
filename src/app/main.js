import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';
console.log(1111)
/*热更新*/
// if (module.hot) {
//     console.log(1111)
//     renderWithHotReload();
// }
//
// function renderWithHotReload(RootElement) {
//     ReactDOM.render(
//         <AppContainer>
//             <div>Hello World!</div>
//         </AppContainer>,
//         document.getElementById('app')
//     )
// }

ReactDOM.render(<App />, document.getElementById('app'));