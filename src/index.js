import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './router/router';
import './style/base.less';
import registerServiceWorker from './registerServiceWorker';
	
ReactDOM.render(<RouteConfig/>, document.getElementById('root'))
registerServiceWorker();
