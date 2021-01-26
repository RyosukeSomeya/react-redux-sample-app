import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux' // Storeを作成する関数
import { Provider } from 'react-redux' // 作成したStoreを全コンポーネントに渡すためのコンポーネント
import reducer from "./reducers"

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

