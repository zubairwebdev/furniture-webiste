// src/components/home/Testimonials.jsx
import React from "react";
import av1 from "../../assets/images/avatar-1.jpg";
import av2 from "../../assets/images/avatar-2.jpg";
import av3 from "../../assets/images/avatar-3.jpg";

const data = [
  {
    id: 1,
    avatar: av1,
    name: "Aldy Gunawan",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    rating: 3.5,
  },
  {
    id: 2,
    avatar: av2,
    name: "Janne Cooper",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    rating: 4.3,
  },
  {
    id: 3,
    avatar: av3,
    name: "Cobocannaeru",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    rating: 4.0,
  },
];

const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.949 2.673c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.066 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-amber-400">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          What our customer say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {data.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden"
            role="article"
            aria-label={`Testimonial by ${t.name}`}
          >
            {/* quote icon */}
            <div className="text-emerald-300 mb-4">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7.17 6A5 5 0 002 11v6h5v-6a2 2 0 012-2h1V6H7.17zM17.17 6A5 5 0 0012 11v6h5v-6a2 2 0 012-2h1V6h-2.83z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed min-h-18">
              {t.text}
            </p>

            {/* footer: avatar + name + rating */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-gray-400">Customer</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {/* show 5 stars, fill proportionally by rounding */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="">
                      <Star filled={i < Math.round(t.rating)} />
                    </span>
                  ))}
                </div>
                <div className="text-sm font-semibold">
                  {t.rating.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
