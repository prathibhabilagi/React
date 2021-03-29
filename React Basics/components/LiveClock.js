import React from 'react';
import ReactDOM from 'react-dom';

function LiveClock = () => {
    const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    return ReactDOM.render(element, document.getElementById('root'));
}

setInterval(LiveClock, 1000);

export default LiveClock;
