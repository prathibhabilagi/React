import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}

export default ChildComp
