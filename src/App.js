import React from 'react';
import './App.css';
import CustomNavbar from './components/Navbar';
import Section from './components/Section';
import ServiceCard from './components/ServiceCard'; 
import Offers from './components/Offers'; 
import London from './components/London'; 
import Places from './components/Places'; 
import Guide from './components/Guide'; 
import Head from './components/Head';
import Blog from './components/Blog';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Head />
      <CustomNavbar />
      <Section />
      <ServiceCard/>
      <Offers/>
      <London/>
      <Places/>
      <Guide/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;

