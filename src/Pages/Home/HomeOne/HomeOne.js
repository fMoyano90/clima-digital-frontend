import React from "react";
import FooterOne from "../../Footer/FooterOne";
import HeaderOne from "../../Header/HeaderOne";
import BannerOne from "../BannerOne/BannerOne";
import TextAnimationOne from "../TextAnimationOne/TextAnimationOne";
import Service from "../Service/Service";
import TextAnimationTwo from "../TextAnimationTwo/TextAnimationTwo";
import AboutOne from "../AboutOne/AboutOne";
import ContactHome from "../../Contact/ContactHome";
// import Testimonial from "../Testimonial/Testimonial";
import SkillOne from "../SkillOne/SkillOne";
// import Blog from "../Blog/Blog";
import { pageTitle } from "../../PageTitle";

const HomeOne = () => {
  pageTitle("Clima Digital");
  return (
    <>
      <HeaderOne></HeaderOne>
      <BannerOne></BannerOne>
      <TextAnimationOne></TextAnimationOne>
      <Service></Service>
      <AboutOne></AboutOne>
      <ContactHome></ContactHome>
      <TextAnimationTwo className="only-desktop"></TextAnimationTwo>
      {/* <Testimonial></Testimonial> */}
      <SkillOne></SkillOne>
      {/* <Blog></Blog> */}
      <FooterOne></FooterOne>
    </>
  );
};

export default HomeOne;
