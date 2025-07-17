import React, { useEffect, useState, useContext } from "react";
import { Alert, AlertTitle } from "@mui/material";
import { Briefcase, MapPin } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../contexts/auth-context";

const Investor = () => {
  const demoInvestorsList = [
    {
      name: "Kunal Shah",
      location: "Mumbai, India",
      industries: "Fintech, SaaS, Consumer Tech, EdTech",
      stage: "Pre-Seed, Seed, Series A",
      risk: "Medium-High",
      portfolioSize: "$25M+",
    },
    {
      name: "Anupam Mittal",
      location: "Mumbai, India",
      industries:
        "Consumer Internet, E-commerce, HealthTech, FinTech, Mobility",
      stage: "Pre-Seed, Seed, Series A",
      risk: "Medium",
      portfolioSize: "$25M+ (Angel Investments)",
    },
    {
      name: "Kunal Bahl",
      location: "New Delhi, India",
      industries: "Consumer Tech, Fintech, SaaS, Mobility, Health-Tech",
      stage:
        "Pre-Seed, Seed, Series A (Titan Capital focuses on early-stage deals)",
      risk: "Medium-High ",
      portfolioSize: "Invested in 250-300+ startups",
    },
    {
      name: "Rajan Anandan",
      location: "Bengaluru, India",
      industries:
        "Internet, Mobile, SaaS, AI, EdTech, AgriTech, HealthTech, Mobility, Biotech",
      stage: "Early-stage (Pre-Seed, Seed, Series A)",
      risk: "Medium",
      portfolioSize: "Over 70 personal investments",
    },
    {
      name: "Binny Bansal",
      location: "Bengaluru, India",
      industries:
        "E-commerce, Internet, HealthTech, FinTech, EdTech, Robotics, SaaS",
      stage:
        "Seed to Series A (also leads Series B in select deals via 3State Ventures/021 Capital)",
      risk: "Medium-High",
      portfolioSize: "60+ startups across 60+ funding rounds",
    },
    {
      name: "Ashneer Grover",
      location: "New Delhi / Bengaluru, India",
      industries: "FinTech, HealthTech, Consumer Tech, SaaS, Mobility, EdTech",
      stage: "Seed, Pre-Seed, Series A",
      risk: "Medium-High",
      portfolioSize: "30+ startups personally invested",
    },
  ];
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [investorsList, setInvestorsList] = useState(demoInvestorsList);
  const [expandedCard, setExpandedCard] = useState(
    new Array(investorsList.length).fill(false)
  );
  const { isLoggedIn } = useContext(AuthContext);

  const addInvestorData = async () => {
    try {
      await axios.post("http://localhost:5000/addinvestor", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleCard = (index) => {
    setExpandedCard((prev) =>
      prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  const showInvestors = async () => {
    const investors = await axios.get("http://localhost:5000/investors");
    const investorsData = investors.data;
    if (investorsData.length > 0) {
      setInvestorsList(investorsData);
    }
  };

  useEffect(() => {
    showInvestors();
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    location: "",
    industry: "",
    stage: "",
    risk: "",
    portfolioSize: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowForm(false);
  };

  return (
    <div className="min-h-screen px-4 py-10 max-w-6xl mx-auto font-sans bg-gradient-to-tr from-gray-100 via-white to-gray-200 text-gray-800">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        🚀 Discover High-Impact Investors
      </h2>

      {/* Investor Cards */}
      <div className="grid items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {investorsList.map((inv, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 cursor-pointer border border-gray-200 transition-all hover:shadow-2xl group relative overflow-hidden"
          >
            <h3 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
              {inv.fullname}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCard(index);
                }}
                id={index}
                className="text-sm text-blue-600 group-hover:underline"
              >
                {expandedCard[index] ? "Close" : "View More"}
              </span>
            </h3>

            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-1" /> {inv.location}
            </p>

            {expandedCard[index] && (
              <div className="mt-4 space-y-2 text-sm transition-all duration-300 ease-in-out">
                <p>
                  <strong>Industries:</strong> {inv.industry}
                </p>
                <p>
                  <strong>Stage:</strong> {inv.stage}
                </p>
                <p>
                  <strong>Risk:</strong> {inv.risk}
                </p>
                <p className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  <span>
                    <strong>Portfolio:</strong> {inv.portfolioSize}
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Glassy Floating Button */}
      <button
        onClick={() => {
          if (isLoggedIn) {
            setShowForm(true);
          } else {
            setShowAlert(true);
          }
        }}
        className="fixed bottom-6 right-6 px-6 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-blue-700 font-bold shadow-lg hover:scale-105 transition transform hover:bg-white z-50"
      >
        + Become Investor
      </button>

      {/* Alert */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Alert severity="error" onClose={() => setShowAlert(false)}>
            <AlertTitle>Error</AlertTitle>
            You need to be logged in to become an investor.
          </Alert>
        </div>
      )}

      {/* Modal */}
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
              Become an Investor
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input"
                />
                <input
                  type="text"
                  name="industry"
                  placeholder="Industries of Interest"
                  value={formData.industry}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="stage"
                  placeholder="Stage (Seed, Series A...)"
                  value={formData.stage}
                  onChange={handleChange}
                  className="input"
                />
                <select
                  name="risk"
                  value={formData.risk}
                  onChange={handleChange}
                  className="input"
                >
                  <option value="">Risk Appetite</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <input
                type="text"
                name="portfolioSize"
                placeholder="Portfolio Size (USD)"
                value={formData.portfolioSize}
                onChange={handleChange}
                className="input"
              />
              <div className="text-right">
                <button
                  onClick={addInvestorData}
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

      {/* Animations */}
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

export default Investor;
