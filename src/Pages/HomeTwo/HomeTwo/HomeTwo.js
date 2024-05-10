import React from 'react';
import FooterTwo from '../../Footer/FooterTwo';
import HeaderTwo from '../../Header/HeaderTwo';
import BannerTwo from '../BannerTwo/BannerTwo';
import AboutTwo from '../AboutTwo/AboutTwo';
import ServicesTwo from '../ServicesTwo/ServicesTwo';
import Video from '../Video/Video';
import Benefit from '../Benefit/Benefit';
import PortfoliosTwo from '../PortfoliosTwo/PortfoliosTwo';
import TestimonialTwo from '../TestimonialTwo/TestimonialTwo';
import TextAnimation from '../TextAnimation/TextAnimation';
import Team from '../Team/Team';
import FunfactTwo from '../FunfactTwo/FunfactTwo';
import AboutThree from '../AboutThree/AboutThree';
import Company from '../Company/Company';
import BlogTwo from '../BlogTwo/BlogTwo';
import { pageTitle } from '../../PageTitle';


const HomeTwo = () => {

    pageTitle('Cipher');
    return (
        <>
          
            
            <HeaderTwo></HeaderTwo>
            <BannerTwo></BannerTwo>
            <AboutTwo></AboutTwo>
            <ServicesTwo></ServicesTwo>
            <Video></Video>
            <Benefit></Benefit>
            <PortfoliosTwo></PortfoliosTwo>
            <TestimonialTwo></TestimonialTwo>
            <TextAnimation></TextAnimation>
            <Team></Team>
            <FunfactTwo></FunfactTwo>
            <AboutThree></AboutThree>
            <Company></Company>
            <BlogTwo></BlogTwo>

            <FooterTwo></FooterTwo>
        </>
    );
};

export default HomeTwo;