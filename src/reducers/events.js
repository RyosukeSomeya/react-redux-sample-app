import _ from 'lodash'
import {
    CREATE_EVENT,
    READ_EVENT,
    READ_EVENTS,
    UPDATE_EVENT,
    DELETE_EVENT
} from '../actions'; // ActionのTypeをimport

// reducers/index.jsにわたすためexport
// 引数 state → default時は初期値
// 引数 action → 受け取ったactionのtypeで処理を分岐する
export default (events = {}, action) => {
    console.log(action.type)
    switch(action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            console.log(action.response.data);
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            // console.log(action.response.data)
            // console.log(_.mapKeys(action.response.data, "id"))
            // レスポンスのデータとして配列が取得される
            // [
            //     {"id":1, "title": "text..."},
            //     {"id":2, "title": "text..."},
            //      ....
            // ]
            // 　↓ 以下のように加工したほうがアプリケーションで扱いやすい
            // {
            //     1: {"id":1, "title": "text..."},
            //     2: {"id":2, "title": "text..."},
            // }
            return _.mapKeys(action.response.data, "id")
        case DELETE_EVENT:
            console.log(events)
            // idに紐づく情報をeventsオブジェクトからを削除する
            delete events[action.id];
            return {...events}
        default:
            return events
    }
}
