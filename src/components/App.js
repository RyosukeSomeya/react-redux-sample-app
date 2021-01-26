import React, { Component } from 'react';
// import React, { Component } from 'react';


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
const App = () => (<Counter></Counter>)

// Stateはclassコンポーネントで使える
class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }

  handlePulsButton = () => {
    console.log("handlePulsButton");
    this.setState({ count: this.state.count + 1 });
    // setStateが走ると、render()がコールバックで呼ばれる（Domが再描画される）
  }

  handleMinusButton = () => {
    console.log("handleMinusButton")
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    console.log('render');
    console.log(this.state);
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePulsButton}>+</button>
        <button onClick={this.handleMinusButton}>-</button>
      </React.Fragment>
    );
  }
}


export default App;
