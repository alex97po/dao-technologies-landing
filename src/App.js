import React from 'react';
import './App.css';
import './styles/Global.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Experience />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
