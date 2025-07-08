import React from "react";
import { Rocket, Lightbulb, Brain, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-100 px-4 py-12 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-14">
          About Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <Section
            icon={<Rocket className="w-8 h-8 text-blue-600" />}
            title="Our Mission"
            content="We aim to bridge the gap between brilliant startups and visionary investors by using cutting-edge AI to make accurate, meaningful connections. The world is full of innovation — we make sure it doesn’t go unnoticed."
          />
          <Section
            icon={<Lightbulb className="w-8 h-8 text-yellow-500" />}
            title="What We Do"
            content="Our platform is a matchmaking ecosystem for founders and funders. Startups submit their ideas, traction, and funding goals. Investors specify their preferences, industry focus, and risk appetite. Then, our AI engine analyzes both and suggests perfect fits — saving time, money, and guesswork."
          />
          <Section
            icon={<Brain className="w-8 h-8 text-purple-500" />}
            title="Powered by AI"
            content="Using natural language processing and structured data comparison, our AI recommends matches and gives scoring insights based on profile compatibility, industry trends, and funding likelihood. It also helps startups refine their pitches by analyzing clarity, uniqueness, and market signals."
          />
          <Section
            icon={<Eye className="w-8 h-8 text-indigo-600" />}
            title="Our Vision"
            content="We believe every innovative idea deserves a chance to grow. Our vision is to become the go-to platform where opportunity meets readiness — globally."
          />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg flex items-center gap-6 max-w-3xl mx-auto border border-blue-200 hover:shadow-xl transition">
          <Users className="w-10 h-10 text-blue-500" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Join Us</h2>
            <p className="text-gray-700">
              Whether you're a founder seeking fuel for your fire or an investor
              hunting for the next big thing, you're in the right place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ icon, title, content }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default About;
