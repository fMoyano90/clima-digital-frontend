import React from "react";
import { pageTitle } from "../PageTitle";
import BreadCrumb from "../BreadCrumb";
import HeaderOne from "../Header/HeaderOne";
import FooterTwo from "../Footer/FooterTwo";
import AboutOne from "../Home/AboutOne/AboutOne";
import TextAnimationTwo from "../Home/TextAnimationTwo/TextAnimationTwo";
import AboutTwo from "../Home/AboutTwo/AboutTwo";

const About = () => {
  pageTitle("Nosotros");

  return (
    <>
      <HeaderOne></HeaderOne>
      <BreadCrumb></BreadCrumb>
      <AboutOne></AboutOne>
      <TextAnimationTwo></TextAnimationTwo>
      <AboutTwo></AboutTwo>
      <FooterTwo></FooterTwo>
    </>
  );
};

export default About;
