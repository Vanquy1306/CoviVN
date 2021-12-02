import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to="/statistic">Statistic</FooterLink>
                                <FooterLink to="/news">News</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>More</FooterLinkTitle>
                                <FooterLink to="/about">About this website</FooterLink>
                                <FooterLink to="/newsletter">Sign up for newsletter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            CoviVN
                        </SocialLogo>
                        <WebsiteRights> Made by Huuthien3004, a student at University of GreenWich Danang branch ❤️</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/Huuthien3004" targets="_blank"
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
