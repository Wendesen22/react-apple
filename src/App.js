import React from 'react';
import './App.css';
import Header from './commonResource/header/Header'
import Footer from './commonResource/footer/Footer'
import Main from './commonResource/main/Main'
import './commonResource/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import './commonResource/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
