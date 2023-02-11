import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Company from "../components/Company-Section/Company";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Course-Section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-Section/Features";
import FreeCourse from "../components/Free-Course-Section/FreeCourse";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../components/NewsLetter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company/>
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;