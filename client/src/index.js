import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../src/styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'leaflet/dist/leaflet.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App/>, document.getElementById('root'));
registerServiceWorker();
