import React, { useState } from "react";

const Investor = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    industries: "",
    stage: "",
    risk: "",
    portfolioSize: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Investor submitted (mock)");
    setShowForm(false);
  };

  const investorsList = [
    {
      name: "Ankit Verma",
      location: "Delhi",
      industries: "Fintech, SaaS",
      stage: "Seed, Series A",
      risk: "Medium",
      portfolioSize: "$1M+",
    },
    {
      name: "Priya Shah",
      location: "Bangalore",
      industries: "HealthTech, EdTech",
      stage: "Pre-seed",
      risk: "High",
      portfolioSize: "$500K",
    },
  ];

  return (
    <div className="relative min-h-screen px-4 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Discover Investors
      </h2>

      {/* Investor Cards */}
      <div className="grid gap-6">
        {investorsList.map((inv, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {inv.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{inv.location}</p>
            <p className="text-gray-700 mb-2">
              <strong>Interested Industries:</strong> {inv.industries}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Stages:</strong> {inv.stage} | <strong>Risk:</strong>{" "}
              {inv.risk}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Portfolio Size:</strong> {inv.portfolioSize}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Submit Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg text-sm font-medium transition z-50"
      >
        + Become an Investor
      </button>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl relative shadow-lg">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Become an Investor
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-h-[80vh] overflow-y-auto pr-2"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Industries of Interest
                  </label>
                  <input
                    type="text"
                    name="industries"
                    value={formData.industries}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">
                    Stage (e.g. Seed, Series A)
                  </label>
                  <input
                    type="text"
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Risk Appetite
                  </label>
                  <select
                    name="risk"
                    value={formData.risk}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  >
                    <option value="">Select</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Portfolio Size (USD)
                </label>
                <input
                  type="text"
                  name="portfolioSize"
                  value={formData.portfolioSize}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investor;
