import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App'; // 注意这里是jsx文件 需要配置webpack
import { Provider } from 'react-redux';
import { createClientStore } from './store/index';

ReactDOM.render(<Provider store={createClientStore()}><App /></Provider>, document.getElementById('app'));