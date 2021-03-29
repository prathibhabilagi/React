import React from 'react'

const JSX = () => {
  
    //<------------- JSX ------------->
    // return (
    //     <div>
    //         <h1>JSX Component</h1>
    //     </div>
    // )

    //-------------- Pure js ----------------
    const ele =  React.createElement(
        'div',
        null, 
        React.createElement(
            'h1',
            null,
            'Pure JS Component'
        ) 
    )
    return ele;

}

export default JSX;
