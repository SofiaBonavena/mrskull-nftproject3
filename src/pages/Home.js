import React from "react";
import NavBar from '../components/NavBar/NavBar' ;
import Hero  from "../components/Hero/Hero";
import Collection from "../components/Collection/Collection";
import About from "../components/About/About";
import Mint from '../components/Mint/Mint';
import Faq from '../components/Faq/Faq' ;

const Home = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <Collection />
      <Mint />
      <About />
      <Faq />
      
    </>
  );
};

export default Home;
