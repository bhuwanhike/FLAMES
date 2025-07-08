import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4">
          Connecting Startups with the Right Investors
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-6">
          AI-driven matchmaking platform that helps innovative startups find
          investors who believe in their vision.
        </p>

        {/* Image Container for Left/Right Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 w-full max-w-4xl mx-auto">
          {/* First Image */}
          <div className="w-full md:w-1/2 lg:w-5/12 h-80"> {/* Added fixed height h-80 */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxjbUimXQJCUrzTagSUr4ItmbezqWrBFfgg&s"
              alt="Illustrative image of a startup team meeting with investors"
              className="rounded-lg shadow-xl w-full h-full object-cover" // h-full to fill parent div
            />
          </div>

          {/* Second Image */}
          <div className="w-full md:w-1/2 lg:w-5/12 h-80"> {/* Added fixed height h-80 */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7LF08wGgCjybDOaXzdth1XLQMagolywHcA&s"
              alt="Illustrative image of a startup and investors collaborating"
              className="rounded-lg shadow-xl w-full h-full object-cover" // h-full to fill parent div
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/startups"
            className="bg-red-100 !text-pink-500 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            I'm a Startup
          </Link>
          <Link
            to="/investors"
            className="bg-gray-200 text-blue-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition"
          >
            I'm an Investor
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Create a Profile</h3>
            <p className="text-gray-600">
              Startups and investors enter their information and interests.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Let AI Analyze</h3>
            <p className="text-gray-600">
              Our system evaluates compatibility using smart algorithms.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Get Matched</h3>
            <p className="text-gray-600">
              Both parties are shown their top matches and can connect directly.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-blue-600 mb-2">
                AI-Powered Matchmaking
              </h4>
              <p className="text-gray-600">
                Smart recommendations based on profile and pitch analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-blue-600 mb-2">
                Real-time Scoring
              </h4>
              <p className="text-gray-600">
                Instant feedback on pitch strength and investor-fit metrics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-blue-600 mb-2">
                Secure & Scalable
              </h4>
              <p className="text-gray-600">
                Built to scale with encrypted connections and role-based access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to build the future?
        </h2>
        <p className="mb-6 text-lg">
          Whether you're a founder or a funder — join the network today.
        </p>
        <Link
          to="/startups"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;