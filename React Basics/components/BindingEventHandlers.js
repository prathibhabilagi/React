import React, { Component } from 'react'

class FuncClick extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "BTS"
        }
    }

    changeName = (newName) => {
        this.setState({
            name: newName
        })
    }

    changeNameFromInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.changeName('ARMY')}>Bind Using Anonymous Function</button>
                <button onClick={this.changeName.bind(this, 'TAEEE')}>Bind Using bind Function</button>
                <input type="text" onChange={this.changeNameFromInput} value={this.state.name}></input>
            </div>
        )
    }
}

export default FuncClick;
