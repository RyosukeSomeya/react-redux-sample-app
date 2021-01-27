import _ from 'lodash'
import { READ_EVENTS } from '../actions'; // ActionのTypeをimport

// reducers/index.jsにわたすためexport
// 引数 state → default時は初期値
// 引数 action → 受け取ったactionのtypeで処理を分岐する
export default (events = {}, action) => {
    switch(action.type) {
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
        default:
            return events
    }
}
