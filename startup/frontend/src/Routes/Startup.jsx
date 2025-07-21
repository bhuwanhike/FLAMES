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
  Building,
  Mail,
  Lightbulb,
  Target,
  Users,
  Send,
} from "lucide-react";
import axios from "axios";

// Assuming AuthContext is in this path
// import { AuthContext } from "../contexts/auth-context";

// Mock AuthContext for demonstration
const AuthContext = React.createContext({ isLoggedIn: true });

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
];

const industries = [...new Set(allStartups.map((s) => s.industry))];
const locations = [...new Set(allStartups.map((s) => s.location))];
const fundingStages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C"];

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
  // const getStartups = async () => {
  //   const startups = await axios.get("http://localhost:5000/startups");
  //   console.log(startups);
  // };

  // useEffect(() => {
  //   getStartups();
  // }, []);

  const [filters, setFilters] = useState({
    industry: [],
    location: [],
    fundingStage: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("action") === "showForm") {
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

  const { isLoggedIn } = useContext(AuthContext);

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
            alert("You need to be logged in to submit a startup.");
          }
        }}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 hover:bg-cyan-300 transition-all transform z-50 "
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
// This is the new, redesigned form component
const SubmitStartupForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-3xl">
        {/* Glow Effect */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-md opacity-60"></div>

        {/* Form Container */}
        <div className="relative bg-slate-800/80 backdrop-blur-lg border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700/80 flex-shrink-0">
            <h2 className="text-2xl font-bold !text-white font-poppins">
              Submit Your Startup
            </h2>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-red-400"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Body */}
          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-6 overflow-y-auto max-h-[80vh]"
          >
            {/* Section 1: Core Details */}
            <section>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                Core Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  icon={<Building />}
                  label="Startup Name"
                  name="startupName"
                  placeholder="e.g., InnovateX"
                  required
                />
                <FormField
                  icon={<Briefcase />}
                  label="Industry"
                  name="industry"
                  placeholder="e.g., FinTech"
                  required
                />
                <FormField
                  icon={<MapPin />}
                  label="Location"
                  name="location"
                  placeholder="e.g., Bengaluru, India"
                  required
                />
                <FormField
                  icon={<Mail />}
                  label="Contact Email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mt-5">
                <FormField
                  icon={<Lightbulb />}
                  label="Core Idea"
                  isTextArea={true}
                  name="idea"
                  placeholder="Describe your startup's mission and solution..."
                  required
                />
              </div>
            </section>

            {/* Section 2: Funding */}
            <section>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                Funding
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  icon={<Target />}
                  label="Current Funding Stage"
                  name="fundingStage"
                  placeholder="e.g., Seed"
                  required
                />
                <FormField
                  icon={<DollarSign />}
                  label="Funding Amount Needed ($)"
                  type="number"
                  name="fundingNeeded"
                  placeholder="e.g., 500000"
                  required
                />
              </div>
            </section>

            {/* Section 3: Team */}
            <section>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                The Team
              </h3>
              <FormField
                icon={<Users />}
                label="Founding Team"
                isTextArea={true}
                name="team"
                placeholder="Tell us about the founders and key team members..."
              />
            </section>

            {/* Footer & Submit Button */}
            <div className="text-right pt-4 border-t border-slate-700/50">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-white font-bold px-8 py-2.5 rounded-lg shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                Submit for Review
              </button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
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

// Reusable Form Field Component for cleaner code
const FormField = ({
  icon,
  label,
  name,
  placeholder,
  type = "text",
  isTextArea = false,
  required = false,
}) => {
  const inputClasses =
    "w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500";

  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-3 text-slate-500 pointer-events-none">
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        {isTextArea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            rows="3"
            required={required}
            className={inputClasses}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className={inputClasses}
          />
        )}
      </div>
    </div>
  );
};

export default Startup;
