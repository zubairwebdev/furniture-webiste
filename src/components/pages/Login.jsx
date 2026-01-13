// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
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
    // simulate auth
    setTimeout(() => {
      setLoading(false);
      setOk(true);
      // optionally redirect to profile/home
      setTimeout(() => navigate("/"), 900);
    }, 900);
  };

  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center py-16 px-4 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">Welcome back</h2>
            <p className="text-sm text-gray-500 mb-6">Login to your account</p>

            <form onSubmit={onSubmit} noValidate>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200 transition ${
                    errors.email ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <div className="text-xs text-red-600 mt-1">
                    {errors.email}
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
                  placeholder="Enter your password"
                  aria-invalid={!!errors.password}
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
                {loading ? "Signing in..." : "Login"}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-emerald-700 hover:underline">
                Sign up
              </Link>
            </div>

            {ok && (
              <div className="mt-4 text-sm text-green-700">
                Logged in — redirecting...
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
