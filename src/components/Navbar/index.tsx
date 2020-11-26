import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElement';

interface NavProps {
  toggle: () => void;
}

const Navbar: React.FC<NavProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState<boolean>(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="">dollar</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-80}
                // offset={-80}
                >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover"
              smooth={true}
              duration={500}
              activeClass="active"
              offset={-80}
              spy={true}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="services"
                smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
                >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
                >Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;