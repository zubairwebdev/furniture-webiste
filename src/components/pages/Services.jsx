// src/pages/Services.jsx
import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CTA from "../../components/home/CTA";

import hero from "../../assets/images/services-hero.jpg";
import pf1 from "../../assets/images/services-portfolio-1.jpg";
import pf2 from "../../assets/images/services-portfolio-2.jpg";
import pf3 from "../../assets/images/services-portfolio-3.jpg";

const FEATURES = [
  {
    id: 1,
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    id: 2,
    title: "Home Decoration",
    text: "Create a Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings.",
  },
  {
    id: 3,
    title: "Kitchen Cabinet",
    text: "Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets.",
  },
  {
    id: 4,
    title: "Interior Design",
    text: "Innovative products often feature innovative designs that play with the patterns we are familiar.",
  },
  {
    id: 5,
    title: "Exterior Design",
    text: "These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces.",
  },
  {
    id: 6,
    title: "Custom Furniture",
    text: "With Quality Materials and Modern Designs, we have Designs for all Tastes. We bring you World Class Designs.",
  },
];

export default function Services() {
  return (
    <>
      <Header />

      {/* TITLE */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          The product crafted by talented crafter and using high quality
          material with love inside
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="max-w-7xl mx-auto px-6">
        <img
          src={hero}
          alt="services hero"
          className="w-full rounded-md object-cover"
        />
      </section>

      {/* FEATURES - numbered */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {FEATURES.map((f, idx) => (
            <div key={f.id} className="flex gap-6">
              <div className="min-w-14 flex items-start">
                <div className="text-4xl md:text-5xl font-bold text-emerald-700">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO / PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-sm text-amber-400">Portfolio</p>
            <h2 className="text-3xl font-semibold mt-2">
              Amazing project we’ve done before
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>
            <a className="inline-block mt-4 text-emerald-700 font-medium">
              View Portfolio →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-md group">
              <img
                src={pf1}
                alt="proj1"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-80 flex items-end p-4">
                <div className="text-white">
                  <div className="font-semibold">Siska Kohl's Bedroom</div>
                  <div className="text-sm">See Detail</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-md group h-24">
                <img
                  src={pf2}
                  alt="proj2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent p-4 flex items-end">
                  <div className="text-white">
                    <div className="font-semibold">
                      Jeruk Veldevana Living Room Design
                    </div>
                    <div className="text-sm">See Detail</div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-md group h-24">
                <img
                  src={pf3}
                  alt="proj3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent p-4 flex items-end">
                  <div className="text-white">
                    <div className="font-semibold">Cozy Co-working space</div>
                    <div className="text-sm">See Detail</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      <Footer />
    </>
  );
}
