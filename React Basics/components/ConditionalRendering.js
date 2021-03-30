import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
//<------------------if/else------------------------------->
        if(this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Admin
                </div>
            )
        }

        else{
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }


//<------------------Element varaiable------------------------------->
        // let message;

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Tae</div>
        // }
        // else {
        //     message = <div>Welcome User</div>
        // }

        // return <div>{message}</div>

//<-------------------Ternary Operator-------------------------->
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Jimin</div>
        // ) : (
        //     <div>Welcome User Guest</div>
        // )

//<-------------------Short Circuit Operator--------------------->
        // return this.state.isLoggedIn && <div>Welcome BTS</div>
    }
}

export default ConditionalRendering;
