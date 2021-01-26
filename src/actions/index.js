// Action → Javascroptのオブジェクト(keyとvalueを持ち、valueはユニークでなければならない)
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


 // コンポーネントで利用するのでexportする
export const increment = () => ({
    // ActionCreator → Actionを返す関数
    type: INCREMENT // increment側のアクション
});

// コンポーネントで利用するのでexportする
export const decrement = () => ({
    // ActionCreator → Actionを返す関数
    type: DECREMENT // decrement側のアクション
});