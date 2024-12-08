import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

import Ingredients from './components/Ingredients';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
     
      <Ingredients />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
