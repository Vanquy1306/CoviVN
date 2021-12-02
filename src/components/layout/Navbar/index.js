import React from 'react';
import  { FaBars } from 'react-icons/fa'
import { Nav, NavbarConstainer, NavLogo, MobileIcon,NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavIconLinks } from './NavbarElements';
import { signout, isAuthenticated } from '../../User/Auth';
import {CgProfile} from 'react-icons/cg'


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarConstainer>
          <NavLogo to='/'>CoviVN</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to= "/statistic">Statistic</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to= "/news">News</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to= "/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to= "/newsletter">Newsletter</NavLinks>
            </NavItem>
          </NavMenu>
          {!isAuthenticated() && (
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
          )}
          {isAuthenticated() && (
          <NavBtn>
              <NavIconLinks to="/dashboard">
                <CgProfile />
              </NavIconLinks>
            <NavBtnLink onClick={signout} to="/">Sign Out</NavBtnLink>
          </NavBtn>   
          )}
        </NavbarConstainer>
      </Nav>
    </>
  );
};

export default Navbar;