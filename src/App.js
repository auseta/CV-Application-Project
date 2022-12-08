import React, { Component } from 'react'
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/style.css'

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Header/>
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
