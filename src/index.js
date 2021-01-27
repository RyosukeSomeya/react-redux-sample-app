import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // Storeを作成する関数
import { Provider } from 'react-redux'; // 作成したStoreを全コンポーネントに渡すためのコンポーネント
import reducer from "./reducers";
import thunk from 'redux-thunk'; // 非同期処理用

import './index.css';
import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

