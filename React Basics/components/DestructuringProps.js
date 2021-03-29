import React, { Component } from 'react'

//Destructuring of props

//1.Functional Component

//<-------------- a. Destructuring in function parameter ------------------>
// const DestructuringProps = ({name, age}) => {
//     return (
//         <div>
//             <h1>Name = {name} and Age = {age}</h1>
//         </div>
//     )
// }

//<------------- b.Destructuring in function body -------------------->
// const  DestructuringProps = (props) => {
//     const {name, age} = props;
//     return (
//         <div>
//             <h1>Name = {name} and Age = {age}</h1>
//         </div>
//     )
// }


//2. Class Component
class  Destructuring extends Component {
    render() {
        const {name, age} = this.props;
        return (
            <div>
                <h1>Name = {name} and age = {age}</h1>
            </div>
        )
    }
}

export default DestructuringProps;
