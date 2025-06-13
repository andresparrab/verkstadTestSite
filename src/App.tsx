import { Footer } from "./components/layout/Footer";
// import { Navbar } from "./components/layout/Navbar";

import { ContactUs } from "./components/sections/ContactUs";
import { FAQ } from "./components/sections/FAQ";
import { Features } from "./components/sections/Features";
// import { Hero } from "./components/sections/Hero";
import { AceHeroSection } from "./components/sections/aceternity/AceHeroSection";
import { HowItWorks } from "./components/sections/HowItWorks";
import { MapLocation } from "./components/sections/MapLocation";
import { Pricing } from "./components/sections/Pricing";
import { ScrollToTop } from "./components/sections/ScrollToTop";
// import { Services } from "./components/sections/Services";

import { Testimonials } from "./components/sections/Testimonials";
import { AceNavbar } from "./components/sections/aceternity/AceNavbar";
import { AboutTeamSection } from "./components/sections/AboutTeam";
// import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <AceNavbar />
      <AceHeroSection />
      <HowItWorks />
      <Features />
      {/* <Services /> */}
      {/* <Hero /> */}
      {/* <Sponsors /> */}
      {/* <Cta /> */}
      <AboutTeamSection />

      <Testimonials />
      <Pricing />
      {/* <Newsletter /> */}
      <FAQ />
      <ContactUs />

      <MapLocation />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
