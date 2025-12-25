const Benefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading Row */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="text-sm text-emerald-600 mb-2">Benefits</p>
          <h2 className="text-3xl font-semibold leading-snug">
            Benefits when using <br /> our services
          </h2>
        </div>

        <p className="text-gray-500 max-w-md">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-emerald-100 mb-4"></div>
          <h3 className="font-semibold mb-2">Many Choices</h3>
          <p className="text-sm text-gray-500">
            Pellentesque etiam blandit in tincidunt at donec.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-orange-100 mb-4"></div>
          <h3 className="font-semibold mb-2">Fast and On Time</h3>
          <p className="text-sm text-gray-500">
            Pellentesque etiam blandit in tincidunt at donec.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-10 h-10 rounded-full bg-yellow-100 mb-4"></div>
          <h3 className="font-semibold mb-2">Affordable Price</h3>
          <p className="text-sm text-gray-500">
            Pellentesque etiam blandit in tincidunt at donec.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
