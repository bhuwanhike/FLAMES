import React, { useState } from "react";
import { Briefcase, MapPin, Lightbulb, LinkIcon } from "lucide-react";

const Startup = () => {
  const [showForm, setShowForm] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const startupList = [
    {
      name: "Cred",
      industry: "FinTech(Credit-Centric Financial Services",
      location: "Bengaluru, India",
      idea: "Fintech platform that rewards creditworthy users for timely bill payments with exclusive financial and lifestyle benefits.",
      funding: "$72M",
      traction: "13+ million monthly active users, managing 22% of India's credit-card market.",
    },
    {
      name: "CarbonCraft",
      industry: "Climate & Sustainability",
      location: "Bengaluru, India",
      idea: "Tiles made from captured CO₂ and waste materials. ",
      funding: "$149K",
      traction: "Deployment in 8 cities, including 13 installations. ",
    },
    {
      name: "Groww",
      industry: "FinTech / WealthTech--Online investments & stockbroking",
      location: "Bengaluru, India",
      idea: "A user-friendly investing platform enabling Indians to invest in mutual funds, stocks, IPOs, digital gold and more.",
      funding: "$393M",
      traction: "~ 13M active clients.",
    },
    {
      name: "Anveshan",
      industry: "Food-Tech",
      location: "Bengaluru, India",
      idea: "It is a farm-to-kitchen food-tech startup that sources traditionally crafted, minimally processed foods directly from rural micro-entrepreneurs.",
      funding: "$5.8M",
      traction: "Achieved and surpassed a $12M net revenue run rate.",
    },
    {
      name: "Licious",
      industry: "Food-tech / Quick-commerce (fresh meat & seafood)",
      location: "Bengaluru, India",
      idea: "Delivering fresh, ready-to-cook meats and seafood with a fully integrated supply chain.",
      funding: "$490M",
      traction: "Operates in 20+ Indian cities, sells via own app and partners like Swiggy Instamart and Blinkit; narrowed FY24 losses but revenue fell to ₹687 Cr (~$82 M)",
    },
    {
      name: "Tata 1mg",
      industry: "HealthTech / E-pharmacy & diagnostics",
      location: "Gurugram, India",
      idea: "India's leading digital healthcare platform offering medicine delivery, lab tests, e-consults, and health content.",
      funding: "$231M",
      traction: "FY24 revenue ₹1,990 Cr ($240 M, +22% YoY); cut losses by ~75% in FY24; holds ~31% market share, overtaking PharmEasy",
    },
    {
      name: "Indian Angel Network (IAN)",
      industry: "Angel investment network",
      location: "New Delhi, India",
      idea: "A mentor-led network of experienced founders investing early in innovative startups across sectors.",
      funding: "$108M",
      traction: " Active since 2006; 450+ members from 11 countries; portfolio includes scaleups like PregBuddy and SuperProfs",
    },
    {
      name: "CureBay",
      industry: "HealthTech-Hybrid healthcare platform (telemedicine + micro-clinics in rural India)",
      location: "Bhubaneswar, India",
      idea: "Bridging gaps in rural healthcare by offering AI-enabled, last-mile teleconsultations and local clinic services.",
      funding: "$35.5M",
      traction: "~90,000 active users, >60% program renewal rate",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    location: "",
    idea: "",
    funding: "",
    team: "",
    traction: "",
    pitchDeck: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Startup submitted (mock)");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen px-4 py-10 max-w-6xl mx-auto font-sans bg-gradient-to-tr from-gray-100 via-white to-gray-200 text-gray-800">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        🌱 Explore Innovative Startups
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startupList.map((startup, index) => (
          <div
            key={index}
            onClick={() =>
              setExpandedCard(index === expandedCard ? null : index)
            }
            className="bg-white shadow-xl rounded-2xl p-6 cursor-pointer border border-gray-200 transition-all hover:shadow-2xl group relative overflow-hidden"
          >
            <h3 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
              {startup.name}
              <span className="text-sm text-blue-600 group-hover:underline">
                {expandedCard === index ? "Close" : "Details"}
              </span>
            </h3>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-1" /> {startup.location}
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              {startup.industry}
            </p>
            {expandedCard === index && (
              <div className="mt-4 space-y-2 text-sm transition-all duration-300 ease-in-out">
                <p className="flex items-center">
                  <Lightbulb className="w-4 h-4 mr-1" /> <strong>Idea:</strong> {" "}
                  {startup.idea}
                </p>
                <p className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" /> <strong>Funding:</strong> {" "}
                  {startup.funding}
                </p>
                <p>
                  <strong>Traction:</strong> {startup.traction}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 px-6 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-blue-700 font-bold shadow-lg hover:scale-105 transition transform hover:bg-white z-50"
      >
        + Submit Startup
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4 animate-fade-in">
          <div className="bg-white rounded-xl p-8 w-full max-w-3xl shadow-2xl animate-slide-up relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Submit Your Startup
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Startup Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  type="text"
                  name="industry"
                  placeholder="Industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input"
                  required
                />
                <input
                  type="url"
                  name="pitchDeck"
                  placeholder="Pitch Deck URL"
                  value={formData.pitchDeck}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <textarea
                name="idea"
                placeholder="Startup Idea"
                value={formData.idea}
                onChange={handleChange}
                rows="3"
                className="input"
                required
              />
              <input
                type="text"
                name="funding"
                placeholder="Funding Needed"
                value={formData.funding}
                onChange={handleChange}
                className="input"
                required
              />
              <textarea
                name="team"
                placeholder="Team Info"
                value={formData.team}
                onChange={handleChange}
                rows="2"
                className="input"
                required
              />
              <textarea
                name="traction"
                placeholder="Traction / Achievements"
                value={formData.traction}
                onChange={handleChange}
                rows="2"
                className="input"
              />
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .input {
          @apply w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in;
        }
      `}</style>
    </div>
  );
};

export default Startup;