import React, { useState, useMemo, useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  Briefcase,
  MapPin,
  DollarSign,
  ChevronDown,
  X,
  PlusCircle,
} from "lucide-react";

import { AuthContext } from "../contexts/auth-context";

// --- DUMMY DATA ---
const allStartups = [
  {
    id: 1,
    name: "InnovateX",
    industry: "FinTech",
    location: "Bengaluru",
    fundingStage: "Series A",
    fundingAmount: 2500000,
    summary: "AI-driven platform for personal finance management.",
  },
  {
    id: 2,
    name: "GreenEnergy Co.",
    industry: "ClimateTech",
    location: "New Delhi",
    fundingStage: "Seed",
    fundingAmount: 500000,
    summary: "Developing next-gen solar panel technology.",
  },
  {
    id: 3,
    name: "HealthConnect AI",
    industry: "HealthTech",
    location: "Mumbai",
    fundingStage: "Series B",
    fundingAmount: 10000000,
    summary: "Connecting patients with doctors via telemedicine.",
  },
  {
    id: 4,
    name: "CarbonCraft",
    industry: "ClimateTech",
    location: "Bengaluru",
    fundingStage: "Pre-Seed",
    fundingAmount: 150000,
    summary: "Creating building materials from captured carbon.",
  },
  {
    id: 5,
    name: "DataDrive",
    industry: "SaaS",
    location: "Pune",
    fundingStage: "Seed",
    fundingAmount: 750000,
    summary: "Cloud-based data analytics for small businesses.",
  },
  {
    id: 6,
    name: "Groww",
    industry: "FinTech",
    location: "Bengaluru",
    fundingStage: "Series E",
    fundingAmount: 393000000,
    summary: "User-friendly platform for stocks and mutual funds.",
  },
  {
    id: 7,
    name: "Licious",
    industry: "FoodTech",
    location: "Bengaluru",
    fundingStage: "Series F",
    fundingAmount: 490000000,
    summary: "Online delivery of fresh meat and seafood.",
  },
  {
    id: 8,
    name: "CureBay",
    industry: "HealthTech",
    location: "Bhubaneswar",
    fundingStage: "Seed",
    fundingAmount: 6000000,
    summary: "Hybrid healthcare for rural India.",
  },
  {
    id: 9,
    name: "SynthWave Labs",
    industry: "SaaS",
    location: "Mumbai",
    fundingStage: "Series A",
    fundingAmount: 3000000,
    summary: "AI-powered music composition tools for creators.",
  },
];

const industries = [...new Set(allStartups.map((s) => s.industry))];
const locations = [...new Set(allStartups.map((s) => s.location))];
const fundingStages = [
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "Series D",
  "Series E",
  "Series F",
];

// --- HELPER COMPONENTS ---

const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="py-4 border-b border-slate-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="font-semibold text-white">{title}</h3>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-4 space-y-2">{children}</div>}
    </div>
  );
};

const Checkbox = ({ id, label, checked, onChange }) => (
  <label htmlFor={id} className="flex items-center space-x-3 cursor-pointer">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded bg-slate-700 border-slate-600 text-cyan-500 focus:ring-cyan-600 focus:ring-offset-slate-800"
    />
    <span className="text-slate-300">{label}</span>
  </label>
);

// --- MAIN STARTUP PAGE COMPONENT ---

const Startup = () => {
  const [filters, setFilters] = useState({
    industry: [],
    location: [],
    fundingStage: [],
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const action = searchParams.get("action");
    if (action === "showStartupForm") {
      setShowForm(true);
      searchParams.delete("action");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const newValues = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: newValues };
    });
  };

  const filteredStartups = useMemo(() => {
    return allStartups.filter((startup) => {
      const searchMatch = startup.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const industryMatch =
        filters.industry.length === 0 ||
        filters.industry.includes(startup.industry);
      const locationMatch =
        filters.location.length === 0 ||
        filters.location.includes(startup.location);
      const fundingStageMatch =
        filters.fundingStage.length === 0 ||
        filters.fundingStage.includes(startup.fundingStage);
      return searchMatch && industryMatch && locationMatch && fundingStageMatch;
    });
  }, [filters, searchTerm]);

  // This would be in your AuthContext
  const { isLoggedIn } = { isLoggedIn: true };

  return (
    <div className="min-h-screen bg-[#0D1117] text-slate-300 font-inter">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-poppins mb-4">
            Explore Opportunities
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Discover and connect with the next generation of innovative
            startups.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by startup name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-12 pr-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Filters</h2>
            <FilterSection title="Industry">
              {industries.map((industry) => (
                <Checkbox
                  key={industry}
                  id={`industry-${industry}`}
                  label={industry}
                  checked={filters.industry.includes(industry)}
                  onChange={() => handleFilterChange("industry", industry)}
                />
              ))}
            </FilterSection>
            <FilterSection title="Location">
              {locations.map((location) => (
                <Checkbox
                  key={location}
                  id={`location-${location}`}
                  label={location}
                  checked={filters.location.includes(location)}
                  onChange={() => handleFilterChange("location", location)}
                />
              ))}
            </FilterSection>
            <FilterSection title="Funding Stage">
              {fundingStages.map((stage) => (
                <Checkbox
                  key={stage}
                  id={`stage-${stage}`}
                  label={stage}
                  checked={filters.fundingStage.includes(stage)}
                  onChange={() => handleFilterChange("fundingStage", stage)}
                />
              ))}
            </FilterSection>
          </aside>

          {/* Startups Grid */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStartups.length > 0 ? (
                filteredStartups.map((startup) => (
                  <div
                    key={startup.id}
                    className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/80 p-6 transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/50 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={`https://logo.clearbit.com/${startup.name
                          .toLowerCase()
                          .replace(/\s/g, "")}.com`}
                        alt={`${startup.name} Logo`}
                        className="w-16 h-16 rounded-lg bg-slate-700 object-contain p-1"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/64x64/1e293b/94a3b8?text=" +
                            startup.name.charAt(0);
                        }}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white font-poppins">
                          {startup.name}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {startup.industry}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 h-12">
                      {startup.summary}
                    </p>
                    <div className="text-xs text-slate-400 space-y-2">
                      <p className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-2 text-cyan-400" />{" "}
                        {startup.location}
                      </p>
                      <p className="flex items-center">
                        <DollarSign className="w-3.5 h-3.5 mr-2 text-cyan-400" />{" "}
                        ${startup.fundingAmount.toLocaleString()} (
                        {startup.fundingStage})
                      </p>
                    </div>
                    <Link
                      to={`/startup/${startup.id}`}
                      className="mt-6 block w-full text-center bg-slate-700/80 text-cyan-400 font-semibold py-2 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      View Pitch
                    </Link>
                  </div>
                ))
              ) : (
                <div className="md:col-span-2 text-center py-16">
                  <p className="text-slate-400 text-lg">
                    No startups match your criteria.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Submit Startup Button */}
      <button
        onClick={() => {
          if (isLoggedIn) {
            setShowForm(true);
          } else {
            // Replace with a proper modal alert if you have one
            alert("You need to be logged in to submit a startup.");
          }
        }}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 hover:bg-cyan-300 transition-all transform z-50"
      >
        <PlusCircle className="w-5 h-5" />
        Submit Startup
      </button>

      {/* Submit Form Modal */}
      {showForm && <SubmitStartupForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

// --- SUBMIT STARTUP FORM COMPONENT (Modal) ---

const SubmitStartupForm = ({ onClose }) => {
  // Form logic would go here
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 w-full max-w-3xl shadow-2xl shadow-black/20 animate-slideUp relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-red-400"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
          Submit Your Startup
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="startupName"
              placeholder="Startup Name"
              required
              className="input-field"
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              required
              className="input-field"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="location"
              placeholder="Location (e.g., Bengaluru, India)"
              required
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Contact Email"
              required
              className="input-field"
            />
          </div>
          <textarea
            name="idea"
            placeholder="Describe your startup's core idea..."
            rows="3"
            required
            className="input-field"
          />
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="fundingStage"
              placeholder="Current Funding Stage (e.g., Seed)"
              required
              className="input-field"
            />
            <input
              type="number"
              name="fundingNeeded"
              placeholder="Funding Amount Needed ($)"
              required
              className="input-field"
            />
          </div>
          <textarea
            name="team"
            placeholder="Tell us about your team..."
            rows="2"
            className="input-field"
          />
          <div className="text-right pt-4">
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold px-8 py-2.5 rounded-lg shadow-md transition-colors"
            >
              Submit for Review
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .input-field {
          @apply w-full bg-slate-800 border border-slate-700 rounded-lg py-2.5 px-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default Startup;
