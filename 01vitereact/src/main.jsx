/* eslint-disable react-refresh/only-export-components */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
// import Chai from './chai';

function Myapp() {
  return (
    <div>
      <h1>Checking by creating a function here only</h1>
    </div>
  );
}

// const reactElement = React.createElement(
//   'a', // tag
//   { href: 'https://google.com', target: '_blank' }, // props
//   'click me to visit google' // content
// );



//reactrender
createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Myapp /> can also be rendered here */}
  </>
);

