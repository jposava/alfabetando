import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import InputAlfabeto from './components/InputAlfabeto';
import Ranking from './components/Ranking';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <InputAlfabeto />
    <Ranking />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);