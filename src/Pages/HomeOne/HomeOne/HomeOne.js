import React from "react";
import FooterOne from "../../Footer/FooterOne";
import HeaderOne from "../../Header/HeaderOne";
import BannerOne from "../BannerOne/BannerOne";
import TextAnimationOne from "../TextAnimationOne/TextAnimationOne";
import Service from "../Service/Service";
import TextAnimationTwo from "../TextAnimationTwo/TextAnimationTwo";
import AboutOne from "../AboutOne/AboutOne";
import PortfoliosOne from "../PortfoliosOne/PortfoliosOne";
import Testimonial from "../Testimonial/Testimonial";
import SkillOne from "../SkillOne/SkillOne";
import Blog from "../Blog/Blog";
import { pageTitle } from "../../PageTitle";

const HomeOne = () => {
  pageTitle("Cipher");
  return (
    <>
      <HeaderOne></HeaderOne>
      <BannerOne></BannerOne>
      <TextAnimationOne></TextAnimationOne>
      <Service></Service>
      <TextAnimationTwo></TextAnimationTwo>
      <AboutOne></AboutOne>
      <PortfoliosOne></PortfoliosOne>
      <Testimonial></Testimonial>
      <SkillOne></SkillOne>
      <Blog></Blog>
      <FooterOne></FooterOne>
    </>
  );
};

export default HomeOne;
