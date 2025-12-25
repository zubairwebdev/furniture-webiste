// src/components/home/Hero.jsx
import HeroImg from "../../assets/images/Hero-img1.jpg"; // <-- exact filename from your tree

const Hero = () => (
  <section className="text-center py-20 max-w-7xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-bold">
      Discover Furniture With <br /> High Quality Wood
    </h1>
    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
      Pellentesque etiam blandit in tincidunt at donec.
    </p>

    <div className="mt-8 flex max-w-xl mx-auto">
      <input
        className="flex-1 border px-4 py-3"
        placeholder="Search property"
      />
      <button className="bg-emerald-700 text-white px-6">Search</button>
    </div>

    <div className="mt-14">
      <img
        src={HeroImg}
        alt="Furniture interior"
        className="rounded-xl mx-auto"
      />
    </div>
  </section>
);

export default Hero;
