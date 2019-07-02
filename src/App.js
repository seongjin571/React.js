import React,{Component} from 'react';
// import MyComponent from './MyComponent'; 
// import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import logo from './logo.svg';
import './App.css';

class App extends Component{
render(){
  const a = "aaa";
    return (
      // <MyComponent name="한성진" age={27}/>
      <ValidationSample />
    );
  }
}
// MyComponent.defaultProps = {
//   name: '기본 이름'
// }
export default App;
