import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './CommonResource/Header'
import Footer from './CommonResource/Footer'
import Main from './CommonResource/Main'
import './CommonResource/css/styles.css'
import './CommonResource/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'; 

// ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(
  <div>
    <Header />
    <Main />
    <Footer />
  </div>, 
  document.getElementById('root')  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
