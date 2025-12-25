// src/pages/About.jsx
import React, { useRef, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// NOTE: keep your mp4 in the same path or adjust the import path
import aboutVideo from "../../assets/images/about-video.mp4";

// team images used as poster/avatars
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";
import team5 from "../../assets/images/team-5.jpg";
import team6 from "../../assets/images/team-6.jpg";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const team = [
    { id: 1, name: "Jesse Depp", role: "Founder & CEO", img: team1 },
    { id: 2, name: "Margareth Carter", role: "COO", img: team2 },
    { id: 3, name: "Andrew Taggart", role: "Developer", img: team3 },
    { id: 4, name: "Grace Marie", role: "Manager", img: team4 },
    { id: 5, name: "Jesse Depp", role: "Senior Designer", img: team5 },
    { id: 6, name: "Jesse Depp", role: "Marketer", img: team6 },
  ];

  const handlePlayClick = () => {
    if (!videoRef.current) return;
    // if already playing, pause; otherwise play
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => setIsPlaying(false);

  return (
    <>
      <Header />

      {/* Page title */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-semibold">About Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </section>

      {/* Video banner (fixed) */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-lg overflow-hidden shadow-sm">
          {/* Video element - using team1 as poster. Replace poster prop if you have a dedicated thumbnail */}
          <video
            ref={videoRef}
            src={aboutVideo}
            poster={team1}
            className="w-full h-105 object-cover"
            controls
            onEnded={handleEnded}
          />

          {/* Custom Play Overlay (center) - hidden when using native controls overlay while playing.
              This overlay toggles playback (useful when user wants big play button). */}
          {!isPlaying && (
            <button
              aria-label="Play video"
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow">
                <svg
                  className="w-6 h-6 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
              </span>
            </button>
          )}

          {/* progress bar visual (decorative) */}
          <div className="absolute bottom-4 left-6 right-6 pointer-events-none">
            <div className="h-1 bg-white/40 rounded" />
          </div>
        </div>
      </section>

      {/* Mission + Stats + Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-amber-400 mb-2">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Our team dedicated to help find smart home product
            </h2>

            <p className="text-gray-500 mt-6 max-w-lg">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>

            <div className="mt-8 flex gap-8 items-center">
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>

              <div>
                <div className="text-3xl font-bold">483</div>
                <div className="text-sm text-gray-400">Happy Client</div>
              </div>

              <div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-gray-400">Project Finished</div>
              </div>
            </div>
          </div>

          <div>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  📞
                </div>
                <div>
                  <div className="font-semibold">24/7 Supports</div>
                  <div className="text-sm text-gray-400">
                    24/7 support means a support service that is provided 24
                    hours a day and 7 days a week.
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  💬
                </div>
                <div>
                  <div className="font-semibold">Free Consultation</div>
                  <div className="text-sm text-gray-400">
                    A free consultation is a one-on-one interaction given freely
                    to share one's thoughts.
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  🔒
                </div>
                <div>
                  <div className="font-semibold">Overall Guarantee</div>
                  <div className="text-sm text-gray-400">
                    The comprehensive guarantee is required for import,
                    warehousing, transit, processing and specific use.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <p className="text-sm text-amber-400 mb-2">Our Team</p>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Meet our leading and strong team
            </h3>
          </div>

          <p className="text-gray-400 max-w-lg">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {team.map((m) => (
            <div key={m.id}>
              <div className="w-full h-56 overflow-hidden rounded-md">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3">
                <h4 className="font-semibold">{m.name}</h4>
                <div className="text-sm text-gray-400">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA (reuse your CTA component if exists) */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">
            Are you interested work with us?
          </h3>
          <button className="bg-emerald-700 text-white px-4 py-2 rounded">
            Let's Talk
          </button>
        </div>
        <div className="mt-6">
          <hr className="border-t border-gray-200/70" />
        </div>
      </section>

      <Footer />
    </>
  );
}
