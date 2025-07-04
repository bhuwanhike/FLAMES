import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
        About Us
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We aim to bridge the gap between brilliant startups and visionary
          investors by using cutting-edge AI to make accurate, meaningful
          connections. The world is full of innovation — we make sure it doesn’t
          go unnoticed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <p className="text-gray-700 leading-relaxed">
          Our platform is a matchmaking ecosystem for founders and funders.
          Startups submit their ideas, traction, and funding goals. Investors
          specify their preferences, industry focus, and risk appetite. Then,
          our AI engine analyzes both and suggests perfect fits — saving time,
          money, and guesswork.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Powered by AI</h2>
        <p className="text-gray-700 leading-relaxed">
          Using natural language processing and structured data comparison, our
          AI recommends matches and gives scoring insights based on profile
          compatibility, industry trends, and funding likelihood. It also helps
          startups refine their pitches by analyzing clarity, uniqueness, and
          market signals.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We believe every innovative idea deserves a chance to grow. Our vision
          is to become the go-to platform where opportunity meets readiness —
          globally.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Whether you're a founder seeking fuel for your fire or an investor
          hunting for the next big thing, you're in the right place.
        </p>
      </section>
    </div>
  );
};

export default About;
