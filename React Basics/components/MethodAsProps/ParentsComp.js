import React, { Component } from 'react';
import ChildComp from './ChildComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: "ABCD"
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }

   render() {
    return (
        <div>
            <ChildComp greetHandler={this.greetParent}/>
        </div>
    )
   }
}

export default ParentComp;
