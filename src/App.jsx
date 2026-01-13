import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductsPage from "./components/pages/ProductsPage";
import ProductDetail from "./components/pages/ProductDetail";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import ArticlesPage from "./components/pages/ArticlePage";
import ArticleDetail from "./components/pages/ArticleDetail";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

// inside <Routes>

// import Products from "./components/home/Products";
// import Crafted from "./components/home/Crafted";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
