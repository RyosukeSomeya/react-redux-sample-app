import React, { Component } from 'react';

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
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname"},
  ];

  return (
    <div>
      {
        profiles.map((profile, index)=> {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
      {/* Userコンポーネントにname属性を与える */}
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
    </div>
  )
}

const User = (props) => {
  return <div>Hi! I am { props.name }, and {props.age} years old!</div>
}

// Userコンポーネントにデフォルトのpropsを設定しておく。(デフォルト引数のようなもの)
User.defaultProps = {
  age: 1
}

export default App;
