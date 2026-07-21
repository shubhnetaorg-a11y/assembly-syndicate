import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AddProperty from "./pages/AddProperty";
import SearchBar from "./components/SearchBar";
import Features from "./components/Features";
import PropertySection from "./components/PropertySection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";


function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Features />
      <PropertySection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />


        <Route 
          path="/add-property" 
          element={
            <Layout>
              <AddProperty />
            </Layout>
          } 
        />


      </Routes>

    </BrowserRouter>
  );
}

export default App;