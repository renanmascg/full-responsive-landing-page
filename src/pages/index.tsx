import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';


const HomePage: React.FC = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection obj={homeObjOne}/>
      <InfoSection obj={homeObjTwo}/>
      <Services />
      <InfoSection obj={homeObjThree}/>
    </>
  );
}

export default HomePage;