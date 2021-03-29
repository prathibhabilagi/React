import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

  //Increment  once
    increment() {
        // this.setState({
        //    count: this.state.count + 1
        // }, () => {
        //     console.log('Callback Value', this.state.count)
        // })
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => {
            console.log('Callback Value', this.state.count);
        })
    }
  
  //Decrement on click
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
  
  //Reset to 0
    reset(){
        this.setState({
            count: 0
        })
    }
  
  //Increment three times
    incrementThree() {
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
                <br></br>
                <button onClick={() => this.reset()}>Reset</button>
                <button onClick={() => this.incrementThree()}>Inc-3</button>
            </div>
        )
    }
}

export default Counter
