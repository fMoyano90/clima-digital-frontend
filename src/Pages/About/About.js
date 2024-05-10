import React from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import AboutOne from "../HomeOne/AboutOne/AboutOne";
import TextAnimationTwo from "../HomeOne/TextAnimationTwo/TextAnimationTwo";
import ServicesTwo from "../HomeTwo/ServicesTwo/ServicesTwo";
import Video from "../HomeTwo/Video/Video";
import Testimonial from "../HomeOne/Testimonial/Testimonial";
import PortfoliosOne from "../HomeOne/PortfoliosOne/PortfoliosOne";
import AboutTwo from "../HomeTwo/AboutTwo/AboutTwo";

const About = () => {
  pageTitle("About Us");

  return (
    <>
      <HeaderOne></HeaderOne>
      <BreadCrumb></BreadCrumb>
      <AboutOne></AboutOne>
      <TextAnimationTwo></TextAnimationTwo>
      <ServicesTwo></ServicesTwo>
      <Video></Video>
      <Testimonial></Testimonial>
      <PortfoliosOne></PortfoliosOne>
      <AboutTwo></AboutTwo>

      <FooterTwo></FooterTwo>
    </>
  );
};

export default About;
