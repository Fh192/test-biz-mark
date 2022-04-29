import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './components/App';
import './index.scss';
import { persistor, store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/**@ts-ignore */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);