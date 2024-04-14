import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {CssBaseline} from '@mui/material';
import { history } from 'utils';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
        <BrowserRouter>
          <CssBaseline/>
          <App />
        </BrowserRouter>
        {/* </ConnectedRouter> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
