// App内のすべてのReducerを総括する(すべてのReducerを結合する。)
import { combineReducers } from 'redux';
import events from './events';

// countを結合し、Storeを作成する際に使うのでexportする
export default combineReducers({ events });