import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from "../../../images/svg-1.svg"
import Icon2 from '../../../images/svg-2.svg';
import Icon3 from '../../../images/svg-3.svg';


const Services = () => {
    return (
        <div>
            <ServicesContainer id="services">
                <ServicesH1>Web Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard to= "/statistic">
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Statistic</ServicesH2>
                        <ServicesP>View Covid-19 related statistic</ServicesP>
                    </ServicesCard>
                    <ServicesCard to= "/news">
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>News</ServicesH2>
                        <ServicesP>View latest news from media</ServicesP>
                    </ServicesCard>
                    <ServicesCard to= "/newsletter">
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Newsletter</ServicesH2>
                        <ServicesP>Sign up our newsletter service</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </div>
    )
}

export default Services