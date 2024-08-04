import React from "react";
import {
  Navbar,
  Hero,
  Footer,
  Memory,
  Explore,
  Advertise,
  Pricings,
  Banner,
  Newslatter,

} from "./components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  testimonialsData,
  footerAPI,
  carouselPlaces,
} from "./data/travigodata";
import PlacesCaroussel from "./components/PlacesCaroussel";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

const App = () => {
  return (
    <div className="font-mono">
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      {/* <PlacesCaroussel images={carouselPlaces} /> */}
      {/* <About /> */}
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of World" placesAPI={carouselPlaces} />
      {/* <Advertise brands={brands} /> */}
      {/* <Pricings pricingapi={pricingapi} /> */}
      {/* <Banner bannerAPI={bannerAPI} /> */}
      <Testimonials testimonials={testimonialsData} />
      <Contact />
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
