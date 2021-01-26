import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

// クラスコンポーネント
// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am changed!")}} />
//       </React.Fragment>
//     )
//   }
// }

// // functionalコンポーネント
// const App = () => (<Counter></Counter>)

// Stateはclassコンポーネントで使える
class App extends Component {
  // stateの管理はReduxで行うので不要
  // constructor(props) { // コンポーネントの初期化
  //   super(props);
  //   console.log(this.state);
  //   this.state = { count: 0 };
  // }

  // action createrとreducerで行うので不要
  // handlePulsButton = () => {
  //   console.log("handlePulsButton");
  //   this.setState({ count: this.state.count + 1 });
  //   // setStateが走ると、render()がコールバックで呼ばれる（Domが再描画される）
  // }

  // handleMinusButton = () => {
  //   console.log("handleMinusButton")
  //   this.setState({ count: this.state.count - 1 });
  // }

  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        {/* <button onClick={this.handlePulsButton}>+</button>
        <button onClick={this.handleMinusButton}>-</button> */}
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </React.Fragment>
    );
  }
}

// mapStateToProps → stateの情報から、コンポーネントで必要なものを取り出し、コンポーネント内のpropsとしてマッピングする。
const mapStateToProps = state => ({ value: state.count.value });

// mapDispachToProps → あるActionが発生したときにreducerにtypeに応じた状態遷移を実行させる関数(Dispatch関数)
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

// stateとactionをコンポーネントに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
