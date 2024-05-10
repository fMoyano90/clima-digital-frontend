import React from 'react';
import FooterThree from '../../Footer/FooterThree';
import HeaderThree from '../../Header/HeaderThree';
import BannerThree from '../BannerThree/BannerThree';
import ServiceThree from '../ServiceThree/ServiceThree';
import TextAnimationThree from '../TextAnimationThree/TextAnimationThree';
import AboutThree from '../AboutThree/AboutThree';
import PortfoliosThree from '../PortfoliosThree/PortfoliosThree';
import Portfolios from '../Portfolios/Portfolios';
import FunfactThree from '../FunfactThree/FunfactThree';
import SkillThree from '../SkillThree/SkillThree';
import TestimonialThree from '../TestimonialThree/TestimonialThree';
import BlogThree from '../BlogThree/BlogThree';
import NewsletterThree from '../NewsletterThree/NewsletterThree';
import { pageTitle } from '../../PageTitle';


const HomeThree = () => {

    pageTitle('Cipher');
    return (
        <>
          <div className="dark-mode">
            <HeaderThree></HeaderThree>
            <BannerThree></BannerThree>
            <ServiceThree></ServiceThree>
            <TextAnimationThree></TextAnimationThree>
            <AboutThree></AboutThree>
            <PortfoliosThree></PortfoliosThree>
            <Portfolios></Portfolios>
            <FunfactThree></FunfactThree>
            <TestimonialThree></TestimonialThree>
            <SkillThree></SkillThree>
            <BlogThree></BlogThree>
            <NewsletterThree></NewsletterThree>

            <FooterThree></FooterThree>
          </div>
        </>
    );
};

export default HomeThree;