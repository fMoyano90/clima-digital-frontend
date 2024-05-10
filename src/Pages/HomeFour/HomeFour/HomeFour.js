import React from 'react';
import FooterThree from '../../Footer/FooterThree';
import HeaderFour from '../../Header/HeaderFour';
import BannerFour from '../BannerFour/BannerFour';
import AboutFour from '../AboutFour/AboutFour';
import ServicesFour from '../ServicesFour/ServicesFour';
import VideoFour from '../VideoFour/VideoFour';
import Services from '../Services/Services';
import PortfoliosFour from '../PortfoliosFour/PortfoliosFour';
import TextAnimationThree from '../../HomeThree/TextAnimationThree/TextAnimationThree';
import FunfactTwo from '../../HomeTwo/FunfactTwo/FunfactTwo';
import TestimonialFour from '../TestimonialFour/TestimonialFour';
import TeamFour from '../TeamFour/TeamFour';
import AboutOne from '../AboutOne/AboutOne';
import Company from '../Company/Company';
import BlogFour from '../BlogFour/BlogFour';
import { pageTitle } from '../../PageTitle';


const HomeThree = () => {

    pageTitle('Cipher');
    return (
        <>
          <div className="dark-mode">
            <HeaderFour></HeaderFour>
            <BannerFour></BannerFour>
            <AboutFour></AboutFour>
            <ServicesFour></ServicesFour>
            <VideoFour></VideoFour>
            <Services></Services>
            <PortfoliosFour></PortfoliosFour>
            <TestimonialFour></TestimonialFour>
            <TextAnimationThree></TextAnimationThree>
            <TeamFour></TeamFour>
            <FunfactTwo></FunfactTwo>
            <AboutOne></AboutOne>
            <Company></Company>
            <BlogFour></BlogFour>

            <FooterThree></FooterThree>
          </div>
        </>
    );
};

export default HomeThree;