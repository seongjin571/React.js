import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    // static defaultProps = {
    //     name: 3,
    //     age: 27
    // }
    render() {
        return (
            <div>
                내 학번은 {this.state.number} 입니다.<br />
                나의 새롭고 멋진 {this.props.name} 컴포넌트입니다.<br />
                나의 나이는 {this.props.age} 입니다.<br />
                <button className = "btn" onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                    // this.state.number = this.state.number + 1
                    // console.log(this.state.number);
                }
                }>버튼</button>
            </div>
        )
    }
}
MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}
export default MyComponent;
