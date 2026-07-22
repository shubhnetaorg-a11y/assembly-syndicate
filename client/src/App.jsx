import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AddProperty from "./pages/AddProperty";
import Properties from "./pages/Properties";
import EditProperty from "./pages/EditProperty.jsx";

import SearchBar from "./components/SearchBar";
import Features from "./components/Features";
import PropertySection from "./components/PropertySection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ListPropertyCTA from "./components/ListPropertyCTA";

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

      <ListPropertyCTA />

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

        <Route
          path="/properties"
          element={
            <Layout>
              <Properties />
            </Layout>
          }
        />

        <Route
          path="/edit-property/:id"
          element={
            <Layout>
              <EditProperty />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;