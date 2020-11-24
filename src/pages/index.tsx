import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';


const HomePage: React.FC = () => {

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    </>
  );
}

export default HomePage;