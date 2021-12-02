import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SideIconLinks } from './SidebarElements';
import { signout, isAuthenticated } from '../../User/Auth';
import {CgProfile} from 'react-icons/cg'


const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/statistic" onClick={toggle}>
                        Statistic
                    </SidebarLink>
                    <SidebarLink to="/news" onClick={toggle}>
                        News
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/newsletter" onClick={toggle}>
                        Newsletter
                    </SidebarLink>
                </SidebarMenu>
          {!isAuthenticated() && (
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
                 )}
                 {isAuthenticated() && (
                 <SideBtnWrap>
            <SideIconLinks to="/dashboard">
                <CgProfile />
              </SideIconLinks>
                     <SidebarRoute onClick={signout} to="/">Sign Out</SidebarRoute>
                 </SideBtnWrap>
                 )}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
