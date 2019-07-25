import React, { Component } from 'react';
// import MyComponent from './MyComponent'; 
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    // const name = "aaa";
    return (
      // <MyComponent name="한성진" age={27}/>
      <div>
        {/* <ScrollBox ref={(ref) => this.ScrollBox = ref} />
        <button onClick={() => this.ScrollBox.ScrollToBottom()}>맨 밑으로</button> */}
        <IterationSample/>
      </div>
    );
  }
}
// MyComponent.defaultProps = {
//   name: '기본 이름'
// }
export default App;
