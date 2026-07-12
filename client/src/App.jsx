import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Features from "./components/Features";
import PropertySection from "./components/PropertySection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SearchBar />
      <Features />
      <PropertySection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;