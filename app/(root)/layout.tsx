"use client";
import React, { useEffect, useState } from "react";
import Nav from "../Component/layout/navbar";
import MobileNav from "../Component/layout/mobileNav";
import Hero from "../Component/layout/Hero";
import About from "../Component/layout/About";
import Services from "../Component/Services";
import Skils from "../Component/layout/Skils";
import Project from "../Component/layout/Project";
import Testimonial from "../Component/layout/Testimonial";
import Blog from "../Component/layout/Blog";
import Footer from "../Component/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Animation AOS

  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div>
          {/* Navbar */}
          <MobileNav nav={nav} closeNav={closeNav} />
          <Nav openNav={openNav} />
          {/* Hero Section */}
          <Hero />
          {/* About */}
          <div className="relative z-[30]">
            <About />
            {/* Service */}
            <Services />
            {/* Skills */}
            <Skils />
            {/* Project */}
            <Project />
            {/* Review Testimonial */}
            <Testimonial />
            {/* Blog */}
            <Blog />
            {/* footer */}
            <Footer />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
