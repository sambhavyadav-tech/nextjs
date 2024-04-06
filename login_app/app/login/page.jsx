"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../components/layout";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Here, you can handle form submission, like sending data to a server for authentication
    if (username === "admin" && password === "admin") {
      // Set authentication flag upon successful login
      localStorage.setItem("isAuthenticated", "true"); // Assuming you're using local storage for simplicity
      // Redirect to admin page upon successful login
      router.push("/admin");
    } else if (username === "user" && password === "user") {
      // Set authentication flag upon successful login
      localStorage.setItem("isAuthenticated", "true"); // Assuming you're using local storage for simplicity
      // Redirect to user page upon successful login
      router.push("/user");
    } else {
      // Handle incorrect credentials
      alert("Invalid username or password");
    }
  };

  return (
    // <div className="container mr-auto mx-auto max-w-md">
    //     <h2 className="text-2xl font-bold mb-6">Login</h2>
    //     <form onSubmit={handleSubmit}>
    //         <div className="mb-4">
    //             <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
    //             <input
    //                 type="text"
    //                 id="username"
    //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
    //                 placeholder="Enter your username"
    //                 value={username}
    //                 onChange={(e) => setUsername(e.target.value)}
    //             />
    //         </div>
    //         <div className="mb-6">
    //             <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
    //             <input
    //                 type="password"
    //                 id="password"
    //                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
    //                 placeholder="Enter your password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //             />
    //         </div>
    //         <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">Login</button>
    //     </form>
    //     <p className="text-sm text-gray-600 mt-4">Don't have an account? <a href="/login/signup" className="text-blue-500 hover:underline">Sign up here</a></p>
    // </div>
    <Layout>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/login/signup" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
