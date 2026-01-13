// src/components/home/Hero.jsx
import HeroImg from "../../assets/images/Hero-img1.jpg"; // <-- exact filename from your tree
import { useState } from "react";

const Hero = () => {
  const [q, setQ] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    // handle search (for now just console)
    console.log("search:", q);
  };

  return (
    <section className="text-center py-20 max-w-7xl mx-auto px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Discover Furniture With <br /> High Quality Wood
      </h1>

      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Pellentesque etiam blandit in tincidunt at donec.
      </p>

      {/* SEARCH: stacked on mobile, inline on sm+ */}
      <form
        onSubmit={onSearch}
        className="mt-8 max-w-xl mx-auto w-full px-2"
        aria-label="Search properties"
      >
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full sm:flex-1 border border-gray-300 px-4 py-3 rounded-md sm:rounded-r-none sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-200 transition"
            placeholder="Search property"
            aria-label="Search property"
            type="search"
          />

          <button
            type="submit"
            className="w-full sm:w-auto bg-emerald-700 text-white px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-emerald-800 transition"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-14 px-6">
        <img
          src={HeroImg}
          alt="Furniture interior"
          className="rounded-xl mx-auto w-full max-w-4xl object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
