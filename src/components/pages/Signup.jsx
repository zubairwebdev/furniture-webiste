// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  const validate = () => {
    const e = {};
    if (!name) e.name = "Name is required";
    if (!email) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (!phone) e.phone = "Phone is required";
    else if (!/^\d{6,15}$/.test(phone)) e.phone = "Enter valid number";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be 6+ chars";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOk(true);
      // after sign up, redirect to login
      setTimeout(() => navigate("/login"), 900);
    }, 900);
  };

  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Create your account</h2>
            <p className="text-sm text-gray-500 mb-6">Sign up to get started</p>

            <form onSubmit={onSubmit} noValidate>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200 transition ${
                    errors.name ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <div className="text-xs text-red-600 mt-1">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200 transition ${
                    errors.email ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <div className="text-xs text-red-600 mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200 transition ${
                    errors.phone ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="e.g. 9876543210"
                />
                {errors.phone && (
                  <div className="text-xs text-red-600 mt-1">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200 transition ${
                    errors.password ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="Create a password"
                />
                {errors.password && (
                  <div className="text-xs text-red-600 mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-700 text-white py-2 rounded hover:bg-emerald-800 transition"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign up"}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-700 hover:underline">
                Login
              </Link>
            </div>

            {ok && (
              <div className="mt-4 text-sm text-green-700">
                Account created — redirecting to login...
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
