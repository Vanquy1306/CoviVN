import React, {useState} from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, VideoBg, HeroBg } from './HeroElements';
import Video from '../../../videos/Hero.mp4';
import {Button} from './ButtonElements';
import {isAuthenticated} from '../../User/Auth'

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Keep up to date with Covid-19 situation</HeroH1>
                <HeroP>
                    An aggregator website focus on Covid-19 pandemic in Vietnam.
                </HeroP>
                {!isAuthenticated() && (
                <HeroBtnWrapper>
                    <Button 
                    to="/signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Sign up to get started! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                )}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
