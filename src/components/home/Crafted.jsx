// src/components/home/Crafted.jsx
import React from "react";
import largeImg from "../../assets/images/crafted-large.jpg";
import smallImg from "../../assets/images/crafted-small.jpg";
// import thumbImg from "../../assets/images/crafted-thumb.jpg"; // optional - can reuse smallImg

const Crafted = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT: heading, text, button, small images */}
        <div>
          <p className="text-sm text-amber-400">Our Product</p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight">
            Crafted by talented and <br className="hidden md:inline" /> high
            quality material
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            Morbi fermentum, vivamus et accumsan dui tincidunt pulvinar.
          </p>

          <button className="mt-6 inline-block bg-emerald-700 text-white px-5 py-2 rounded-md">
            Learn More
          </button>

          {/* small images row */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              src={smallImg}
              alt="workshop"
              className="w-full h-36 sm:h-40 object-cover rounded-lg shadow-sm"
            />
            {/* <img
              src={thumbImg}
              alt="material"
              className="w-full h-36 sm:h-40 object-cover rounded-lg shadow-sm"
            /> */}
          </div>
        </div>

        {/* RIGHT: stats row + large image */}
        <div>
          <div className="flex items-center justify-between gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">20+</div>
              <div className="text-sm text-gray-500 mt-1">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">483</div>
              <div className="text-sm text-gray-500 mt-1">Happy Client</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">150+</div>
              <div className="text-sm text-gray-500 mt-1">Project Finished</div>
            </div>
          </div>

          <div className="mt-6">
            <img
              src={largeImg}
              alt="crafted furniture"
              //   className="w-full h-[420px] md:h-[520px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crafted;
