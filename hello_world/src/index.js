import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return (
  <div>
  <h1>Hello, {props.name}</h1>
    <h2>Good to see you!</h2>
    </div>
    );
}

function Main(){
  return (
    <div>
      <Welcome name="Touchsada Jan On" />
      <h2>The time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
 
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

setInterval(Main, 1000);
