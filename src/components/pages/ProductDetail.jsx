// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// images - put these in src/assets/images/
import p1 from "../../assets/images/product-1.jpg";
import p2 from "../../assets/images/product-2.jpg";
import p3 from "../../assets/images/product-3.jpg";
import p4 from "../../assets/images/product-4.jpg";
import p5 from "../../assets/images/product-5.jpg";
import p6 from "../../assets/images/product-6.jpg";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const PRODUCTS = [
  {
    id: "1",
    title: "Wooden Cupboard 3 Row",
    price: 99.98,
    image: p1,
    category: "Chair",
    desc: "Combination of wood and wool",
  },
  {
    id: "2",
    title: "Minimalist Lounge Chair",
    price: 79.88,
    image: p2,
    category: "Cupboard",
    desc: "Combination of wood and wool",
  },
  {
    id: "3",
    title: "Wooden Dining Table",
    price: 14.74,
    image: p3,
    category: "Chair",
    desc: "Combination of wood and wool",
  },
  {
    id: "4",
    title: "White Aesthetic Chair",
    price: 47.9,
    image: p4,
    category: "Table",
    desc: "Combination of wood and wool",
  },
  {
    id: "5",
    title: "Minimalist White Cupboard",
    price: 40.73,
    image: p5,
    category: "Cupboard",
    desc: "Combination of wood and wool",
  },
  {
    id: "6",
    title: "Working Desk Setup",
    price: 16.5,
    image: p6,
    category: "Table",
    desc: "Combination of wood and wool",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  // related: show 3 other items (simple filter)
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: big image + small thumbs */}
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-lg object-cover h-120"
            />

            <div className="flex gap-4 mt-6">
              {related.map((r) => (
                <img
                  key={r.id}
                  src={r.image}
                  alt={r.title}
                  className="w-24 h-20 object-cover rounded-md border"
                />
              ))}
            </div>
          </div>

          {/* RIGHT: details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              {product.title}
            </h1>
            <p className="text-sm text-gray-400 mt-2">{product.desc}</p>

            {/* Color swatches */}
            <div className="mt-6">
              <div className="text-sm font-medium mb-2">Color</div>
              <div className="flex items-center gap-3">
                <button className="w-8 h-6 rounded-sm bg-black/90"></button>
                <button className="w-8 h-6 rounded-sm bg-emerald-900"></button>
                <button className="w-8 h-6 rounded-sm bg-amber-400"></button>
                <button className="w-8 h-6 rounded-sm bg-slate-200 border"></button>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 mt-6 leading-relaxed">
              Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
              facilisis facilisis ligula felis et a parturient aenean. Ac
              maecenas ultricies felis risus scelerisque duis posuere...{" "}
              <span className="text-emerald-700 font-medium">Read More</span>
            </p>

            {/* Price & actions */}
            <div className="mt-8 flex items-center gap-4">
              <div className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <button className="bg-emerald-700 text-white px-5 py-3 rounded-md">
                  Buy Now
                </button>
                <button className="border px-4 py-3 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* small meta */}
            <div className="mt-8 text-sm text-gray-500">
              <div>
                Category:{" "}
                <span className="text-gray-700">{product.category}</span>
              </div>
              <div className="mt-2">
                SKU: <span className="text-gray-700">#00{product.id}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED ITEMS */}
        <section className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Related Items</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link key={r.id} to={`/products/${r.id}`} className="group">
                <div className="overflow-hidden rounded-md bg-gray-100 h-48">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-3 uppercase">
                  {r.category}
                </p>
                <h4 className="font-semibold mt-2">{r.title}</h4>
                <p className="text-gray-500 mt-1">{r.desc}</p>
                <div className="mt-3 font-bold">${r.price.toFixed(2)}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
