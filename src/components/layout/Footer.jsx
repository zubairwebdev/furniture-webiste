const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Left: Logo + description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold">Furniture Hub</span>
            </div>

            <p className="text-sm text-gray-500 max-w-xs">
              Furniture Hub is digital agency that help you make better
              experience iaculis cras in.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>New Arrivals</li>
              <li>Best Selling</li>
              <li>Home Decor</li>
              <li>Kitchen Set</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Catalog</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
