import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './Store';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root'));
serviceWorker.unregister();
