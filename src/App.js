import React from 'react';
import './styles/style.css'
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='container'>
        <Header />
        <Content />
        <Footer />  
    </div>
  )
}

export default App;
