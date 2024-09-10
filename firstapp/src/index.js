import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/calculator';
import {createRoot} from 'react-dom/client';


//ReactDOM.render(<Calculator/>, document.getElementById("root"));

createRoot(document.getElementById('root')).render(<Calculator/>);









//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>

 // </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
