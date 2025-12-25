// src/pages/ArticlesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import hero from "../../assets/images/article-hero.jpg";
import a1 from "../../assets/images/article-1.jpg";
import a2 from "../../assets/images/article-2.jpg";
import l1 from "../../assets/images/article-list-1.jpg";
import l2 from "../../assets/images/article-list-2.jpg";
import l3 from "../../assets/images/article-list-3.jpg";

const featured = {
  title:
    "This 400-Square-Foot New York Apartment Is Maximized With Custom Millwork",
  author: "Morgan Goldberg",
  date: "Tuesday, 17 May 2022",
  image: hero,
};

const topHeadlines = [
  {
    id: 1,
    img: a1,
    tag: "Design inspiration",
    title: "Bedroom Design is the Most Personal...",
    author: "Jenny Agnes",
    date: "Tuesday, 17 May 2022",
  },
  {
    id: 2,
    img: a2,
    tag: "Tips and Trick",
    title: "Create a non-monotonous and dynamic...",
    author: "Juliana Athorn",
    date: "Wednesday, 22 January 2022",
  },
];

const trending = [
  {
    id: 1,
    tag: "Tips and Trick",
    title: "Beautiful and Functional Home Terrace Decoration",
    thumb: l1,
    author: "Morgan Goldberg",
    date: "Friday, 1 April 2022",
  },
  {
    id: 2,
    tag: "Design Inspiration",
    title: "Modern Minimalist Home Design: Aesthetics of Modern Home",
    thumb: l2,
    author: "Rizal Ahmad",
    date: "Wednesday, 17 March 2022",
  },
  {
    id: 3,
    tag: "Color Guide",
    title:
      "20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun",
    thumb: l3,
    author: "Filipus Pendi",
    date: "Saturday, 29 February 2022",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <Header />

      {/* Page header */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-semibold">Article</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </section>

      {/* Featured hero */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute left-8 bottom-8 right-8">
            <div className="bg-white/95 p-6 rounded-md shadow-md max-w-3xl">
              <p className="text-xs text-amber-400 mb-1">Tips and Trick</p>
              <h2 className="text-xl md:text-2xl font-semibold">
                {featured.title}
              </h2>
              <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
                <div className="w-7 h-7 rounded-full bg-gray-200" />
                <div>{featured.author}</div>
                <div className="mx-2">•</div>
                <div>{featured.date}</div>
              </div>
            </div>
          </div>
          {/* left/right arrows (decorative) */}
          <button
            aria-hidden
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-white absolute left-3 top-1/2 -translate-y-1/2"
          >
            ‹
          </button>
          <button
            aria-hidden
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/30 text-white absolute right-3 top-1/2 -translate-y-1/2"
          >
            ›
          </button>
        </div>
      </section>

      {/* Top headlines */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm text-amber-400">Daily News</p>
        <h3 className="text-3xl font-semibold mt-2">Today top headlines</h3>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {topHeadlines.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-md shadow-sm overflow-hidden"
            >
              <img
                src={t.img}
                alt={t.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-gray-400">{t.tag}</p>
                <h4 className="text-xl font-semibold mt-2">{t.title}</h4>
                <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
                  <div className="w-7 h-7 rounded-full bg-gray-100" />
                  <div>{t.author}</div>
                  <div className="mx-2">•</div>
                  <div>{t.date}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trending topics list */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <p className="text-sm text-amber-400">Trending Topics</p>
        <h3 className="text-3xl font-semibold mt-2">Popular last week</h3>

        <div className="mt-6 flex gap-8">
          {/* left filters / tags */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-4 items-center">
              <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">
                All
              </button>
              <button className="px-4 py-2 rounded-full text-sm">
                Tips and Trick
              </button>
              <button className="px-4 py-2 rounded-full text-sm">
                Interior Design
              </button>
              <button className="px-4 py-2 rounded-full text-sm">
                Design Inspiration
              </button>
              <button className="px-4 py-2 rounded-full text-sm">
                Color Guide
              </button>
              <div className="ml-auto">
                <button className="border px-3 py-2 rounded text-sm">
                  Filter
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {trending.map((it) => (
                <article key={it.id} className="flex gap-4 items-start">
                  <img
                    src={it.thumb}
                    alt={it.title}
                    className="w-24 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="text-xs text-gray-400">{it.tag}</p>
                    <h4 className="font-semibold mt-1">{it.title}</h4>
                    <div className="text-sm text-gray-500 mt-2">
                      <span>{it.author}</span> <span className="mx-2">•</span>{" "}
                      <span>{it.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="border px-6 py-2 rounded">Load More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-md shadow-sm p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-2xl font-semibold">Subscribe our newsletter</h4>
            <p className="text-gray-500 mt-2">
              Get weekly articles & tips straight to your inbox.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-4">
            <input
              className="border px-4 py-3 rounded"
              placeholder="Your email address"
            />
            <button className="bg-emerald-700 text-white px-5 py-3 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
