// src/components/home/Products.jsx
import React from "react";
import p1 from "../../assets/images/product-1.jpg";
import p2 from "../../assets/images/product-2.jpg";
import p3 from "../../assets/images/product-3.jpg";
import p4 from "../../assets/images/product-4.jpg";

const products = [
  {
    id: 1,
    category: "Bookshelf",
    title: "White Aesthetic Chair",
    desc: "Combination of wood and wool",
    price: "$63.47",
    image: p1,
  },
  {
    id: 2,
    category: "Chair",
    title: "Bardono Smart Lamp",
    desc: "Easy to use with bluetooth connection",
    price: "$62.23",
    image: p2,
  },
  {
    id: 3,
    category: "Lamp",
    title: "Sofa Empuk Banget",
    desc: "Using kapuk randu material",
    price: "$58.39",
    image: p3,
  },
  {
    id: 4,
    category: "Sofa",
    title: "Bookshelf",
    desc: "Mix of wood and soft fabric",
    price: "$89.00",
    image: p4,
  },
];

export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-amber-400">Product</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Our popular product
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>

      {/* grid */}
      <div className="mt-12">
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {products.map((p) => (
            <div key={p.id} className="group">
              <div className="relative overflow-hidden rounded-md h-64 bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay small circle nav icons like design (decorative) */}
                <button
                  aria-hidden
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white absolute left-3 top-1/2 -translate-y-1/2"
                >
                  {/* left chevron */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  aria-hidden
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {/* right chevron */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* meta */}
              <div className="mt-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {p.category}
                </p>
                <h3 className="font-semibold text-lg mt-2">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                <p className="mt-4 font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
