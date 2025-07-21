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
  Linkedin,
  Twitter,
  Globe,
  User,
  Mail,
  Lightbulb,
  Send,
} from "lucide-react";

// Assuming AuthContext is in this path
// import { AuthContext } from "../contexts/auth-context";

// Mock AuthContext for demonstration
const AuthContext = React.createContext({ isLoggedIn: true });

// --- DUMMY DATA ---
const allInvestors = [
  {
    id: 1,
    name: "Kunal Shah",
    location: "Mumbai",
    industryFocus: ["FinTech", "SaaS", "Consumer"],
    investmentStage: ["Seed", "Series A"],
    bio: "Founder of CRED. Passionate about building high-trust ecosystems and backing disruptive ideas in tech.",
    notableInvestments: ["Razorpay", "Meesho", "Unacademy"],
    socials: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: 2,
    name: "Anupam Mittal",
    location: "Mumbai",
    industryFocus: ["Consumer", "HealthTech", "FinTech"],
    investmentStage: ["Pre-Seed", "Seed"],
    bio: "Founder of People Group (Shaadi.com). Early-stage investor focused on scalable consumer internet businesses.",
    notableInvestments: ["Ola Cabs", "Druva", "Whatfix"],
    socials: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: 3,
    name: "Rajan Anandan",
    location: "Bengaluru",
    industryFocus: ["SaaS", "AI", "HealthTech"],
    investmentStage: ["Pre-Seed", "Seed", "Series A"],
    bio: "Managing Director at Sequoia Capital. Formerly at Google. Deep expertise in scaling technology companies in India.",
    notableInvestments: ["Dunzo", "Practo", "OYO"],
    socials: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: 4,
    name: "Binny Bansal",
    location: "Bengaluru",
    industryFocus: ["E-commerce", "Logistics", "SaaS"],
    investmentStage: ["Seed", "Series A", "Series B"],
    bio: "Co-founder of Flipkart. Now investing in and mentoring the next wave of entrepreneurs through 021 Capital.",
    notableInvestments: ["Acko", "Cure.fit", "Rupeek"],
    socials: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: 5,
    name: "Vani Kola",
    location: "Bengaluru",
    industryFocus: ["FinTech", "HealthTech", "Consumer"],
    investmentStage: ["Seed", "Series A"],
    bio: "Managing Director at Kalaari Capital. A visionary investor known for identifying and nurturing category-defining companies.",
    notableInvestments: ["Myntra", "Dream11", "Urban Ladder"],
    socials: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    id: 6,
    name: "Girish Mathrubootham",
    location: "Chennai",
    industryFocus: ["SaaS", "DeepTech"],
    investmentStage: ["Pre-Seed", "Seed"],
    bio: "Founder of Freshworks. Actively invests in and mentors early-stage SaaS founders from India building for the world.",
    notableInvestments: ["Chargebee", "Kissflow", "Whatfix"],
    socials: { linkedin: "#", twitter: "#", website: "#" },
  },
];

const industryOptions = [
  ...new Set(allInvestors.flatMap((i) => i.industryFocus)),
];
const locationOptions = [...new Set(allInvestors.map((i) => i.location))];
const stageOptions = [
  ...new Set(allInvestors.flatMap((i) => i.investmentStage)),
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

// --- MAIN INVESTOR PAGE COMPONENT ---

const Investor = () => {
  const [filters, setFilters] = useState({
    industryFocus: [],
    location: [],
    investmentStage: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("action") === "showInvestorForm") {
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

  const filteredInvestors = useMemo(() => {
    return allInvestors.filter((investor) => {
      const searchMatch = investor.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const industryMatch =
        filters.industryFocus.length === 0 ||
        filters.industryFocus.some((f) => investor.industryFocus.includes(f));
      const locationMatch =
        filters.location.length === 0 ||
        filters.location.includes(investor.location);
      const stageMatch =
        filters.investmentStage.length === 0 ||
        filters.investmentStage.some((f) =>
          investor.investmentStage.includes(f)
        );
      return searchMatch && industryMatch && locationMatch && stageMatch;
    });
  }, [filters, searchTerm]);

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-[#0D1117] text-slate-300 font-inter">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-poppins mb-4">
            Meet the Investors
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Find and connect with strategic investors ready to fuel the next big
            thing.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by investor name..."
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
            <FilterSection title="Industry Focus">
              {industryOptions.map((industry) => (
                <Checkbox
                  key={industry}
                  id={`industry-${industry}`}
                  label={industry}
                  checked={filters.industryFocus.includes(industry)}
                  onChange={() => handleFilterChange("industryFocus", industry)}
                />
              ))}
            </FilterSection>
            <FilterSection title="Location">
              {locationOptions.map((location) => (
                <Checkbox
                  key={location}
                  id={`location-${location}`}
                  label={location}
                  checked={filters.location.includes(location)}
                  onChange={() => handleFilterChange("location", location)}
                />
              ))}
            </FilterSection>
            <FilterSection title="Investment Stage">
              {stageOptions.map((stage) => (
                <Checkbox
                  key={stage}
                  id={`stage-${stage}`}
                  label={stage}
                  checked={filters.investmentStage.includes(stage)}
                  onChange={() => handleFilterChange("investmentStage", stage)}
                />
              ))}
            </FilterSection>
          </aside>

          {/* Investors Grid */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInvestors.length > 0 ? (
                filteredInvestors.map((investor) => (
                  <div
                    key={investor.id}
                    className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/80 p-6 transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/50 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={`https://i.pravatar.cc/150?u=${investor.id}`}
                        alt={`${investor.name}`}
                        className="w-16 h-16 rounded-full bg-slate-700 object-cover border-2 border-slate-600"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white font-poppins">
                          {investor.name}
                        </h3>
                        <p className="text-sm text-slate-400 flex items-center">
                          <MapPin className="w-3.5 h-3.5 mr-1.5" />
                          {investor.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 text-sm flex-grow">
                      {investor.bio}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-cyan-400 mb-2">
                        Notable Investments
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {investor.notableInvestments.slice(0, 3).map((inv) => (
                          <span
                            key={inv}
                            className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"
                          >
                            {inv}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
                      <p className="text-xs font-semibold text-slate-400">
                        CONNECT
                      </p>
                      <div className="flex items-center space-x-3">
                        <a
                          href={investor.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={investor.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={investor.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="md:col-span-2 text-center py-16">
                  <p className="text-slate-400 text-lg">
                    No investors match your criteria.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Become an Investor Button */}
      <button
        onClick={() => {
          if (isLoggedIn) {
            setShowForm(true);
          } else {
            alert("You need to be logged in to become an investor.");
          }
        }}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-400 font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 hover:bg-cyan-300 transition-all transform z-50 text-white"
      >
        <PlusCircle className="w-5 h-5" />
        Become an Investor
      </button>

      {/* Submit Form Modal */}
      {showForm && <SubmitInvestorForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

// --- SUBMIT INVESTOR FORM COMPONENT (Modal) ---
const SubmitInvestorForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Investor form submitted");
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
              Become an Investor
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
            {/* Section 1: Personal Information */}
            <section>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  icon={<User />}
                  label="Full Name"
                  name="fullName"
                  placeholder="e.g., Bhavya Tyagi"
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
                <FormField
                  icon={<MapPin />}
                  label="Location"
                  name="location"
                  placeholder="e.g., Bengaluru, India"
                  required
                />
                <FormField
                  icon={<Linkedin />}
                  label="LinkedIn Profile URL"
                  name="linkedin"
                  placeholder="linkedin.com/in/your-profile"
                  required
                />
              </div>
            </section>

            {/* Section 2: Investment Thesis */}
            <section>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                Investment Thesis
              </h3>
              <div className="space-y-5">
                <FormField
                  icon={<Briefcase />}
                  label="Industries of Interest"
                  name="industryFocus"
                  placeholder="e.g., FinTech, SaaS, HealthTech"
                  required
                />
                <FormField
                  icon={<Lightbulb />}
                  label="Investment Philosophy"
                  isTextArea={true}
                  name="investmentThesis"
                  placeholder="Briefly describe your investment strategy and what you look for in a startup..."
                />
              </div>
            </section>

            {/* Footer & Submit Button */}
            <div className="text-right pt-4 border-t border-slate-700/50">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-white font-bold px-8 py-2.5 rounded-lg shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                Submit Application
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

export default Investor;
