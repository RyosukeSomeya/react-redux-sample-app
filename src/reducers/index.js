// App内のすべてのReducerを総括する(すべてのReducerを結合する。)
import { combineReducers } from 'redux';
import count from './count';

// countを結合し、Storeを作成する際に使うのでexportする
export default combineReducers({ count });