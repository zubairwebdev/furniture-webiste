import Header from "../layout/Header";
import Footer from "../layout/Footer";

import Hero from "../home/Hero";
import Benefits from "../home/Benefits";
import Products from "../home/Products";
import Crafted from "../home/Crafted";
import Testimonials from "../home/Testimonials";
import ProductsPage from "./ProductsPage";
import Services from "./Services";
import CTA from "../home/CTA";
import ProductDetail from "./ProductDetail";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      {/* <Products /> */}
      <Crafted />
      <Testimonials />
      <CTA />
      {/* <ProductsPage /> */}
      {/* <Services /> */}
      {/* <ProductDetail /> */}
      <Footer />
    </>
  );
};

export default Home;
