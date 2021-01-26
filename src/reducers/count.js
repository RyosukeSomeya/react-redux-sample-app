import { INCREMENT, DECREMENT } from '../actions'; // ActionのTypeをimport

const initialState = { value: 0 }; // state(状態)の初期値

// reducers/index.jsにわたすためexport
// 引数 state → default時は初期値
// 引数 action → 受け取ったactionのtypeで処理を分岐する
export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state

    }
}
