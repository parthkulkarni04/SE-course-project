import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@sleepyowl.in" && password === "coffee123") {
      navigate("/");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9f5f0]">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white">
        <div className="flex flex-col items-center mb-8">
          <div className="text-[#5c4434] text-6xl mb-4">
            <FaCoffee />
          </div>
          <h1 className="text-3xl font-bold text-[#5c4434]">
            Sleepy Owl Coffee
          </h1>
          <p className="text-[#8c7b6e] mt-2">Enterprise Management System</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-[#5c4434] text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#c69f80]"
              id="email"
              type="email"
              placeholder="your-email@sleepyowl.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-[#5c4434] text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-[#c69f80]"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#8c6d5c] hover:bg-[#5c4434] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#8c7b6e]">
            © 2023 Sleepy Owl Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 