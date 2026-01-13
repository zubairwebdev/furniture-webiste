import { Link } from "react-router-dom"; // ✅ ADD THIS
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// product images
import p1 from "../../assets/images/product-1.jpg";
import p2 from "../../assets/images/product-2.jpg";
import p3 from "../../assets/images/product-3.jpg";
import p4 from "../../assets/images/product-4.jpg";
import p5 from "../../assets/images/product-5.jpg";
import p6 from "../../assets/images/product-6.jpg";

const products = [
  {
    id: 1,
    category: "Chair",
    title: "Wooden Cupboard 3 Row",
    price: "$63.47",
    image: p1,
  },
  {
    id: 2,
    category: "Cupboard",
    price: "$79.88",
    title: "Minimalist Lounge Chair",
    image: p2,
  },
  {
    id: 3,
    category: "Chair",
    title: "Wooden Dining Table",
    price: "$14.74",
    image: p3,
  },
  {
    id: 4,
    category: "Table",
    title: "White Aesthetic Chair",
    price: "$47.90",
    image: p4,
  },
  {
    id: 5,
    category: "Cupboard",
    title: "Working Desk Setup",
    price: "$40.73",
    image: p5,
  },
  {
    id: 6,
    category: "Table",
    title: "Minimalist White Cupboard",
    price: "$16.50",
    image: p6,
  },
];

const ProductsPage = () => {
  return (
    <>
      <Header />

      {/* PAGE TITLE */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-semibold">Products</h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-4">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </section>

      {/* SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white shadow-sm p-4 rounded-lg">
          <input
            type="text"
            placeholder="Search property"
            className="w-full md:flex-1 border px-4 py-2 rounded"
          />

          <div className="flex gap-4">
            <button className="bg-emerald-700 text-white px-5 py-2 rounded">
              Find Now
            </button>
            <button className="border px-4 py-2 rounded text-sm">Filter</button>
          </div>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold">
            Total Product{" "}
            <span className="text-sm text-gray-400 ml-2">184</span>
          </h2>

          <button className="text-sm border px-4 py-2 rounded">Sort By</button>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <Link
              to={`/products/${item.id}`} // ✅ ROUTE TO DETAIL PAGE
              key={item.id}
              className="block group"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg mb-4 group-hover:opacity-90 transition"
                />

                <p className="text-xs text-gray-400">{item.category}</p>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">
                  Combination of wood and wool
                </p>
                <p className="font-bold mt-2">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-4 mt-16 text-sm">
          <button className="px-3 py-1 border rounded">&lt;</button>
          <button className="px-3 py-1 bg-emerald-700 text-white rounded">
            1
          </button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <span>...</span>
          <button className="px-3 py-1 border rounded">10</button>
          <button className="px-3 py-1 border rounded">&gt;</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductsPage;
