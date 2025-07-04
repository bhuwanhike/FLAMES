import React, { useState } from "react";

const Startup = () => {
  const [showForm, setShowForm] = useState(false);

  const startupList = [
    {
      name: "EcoCart",
      industry: "E-commerce",
      location: "Delhi",
      idea: "Sustainable products with AI-based carbon tracking.",
      funding: "$200K",
      traction: "10K users, Seed funded.",
    },
    {
      name: "HealthHive",
      industry: "HealthTech",
      location: "Bangalore",
      idea: "Decentralized patient records with blockchain.",
      funding: "$500K",
      traction: "Partnered with 5 hospitals.",
    },
    {
      name: "EduBot",
      industry: "EdTech",
      location: "Mumbai",
      idea: "AI tutors for rural schools with voice assistants.",
      funding: "$150K",
      traction: "Pilot in 3 villages.",
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
    setShowForm(false); // close modal after submit
  };

  return (
    <div className="relative min-h-screen px-4 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Explore Startups
      </h2>

      {/* Startup Cards */}
      <div className="grid gap-6">
        {startupList.map((startup, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {startup.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {startup.industry} • {startup.location}
            </p>
            <p className="text-gray-700 mb-2">{startup.idea}</p>
            <p className="text-sm text-gray-600">
              <strong>Funding Needed:</strong> {startup.funding}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Traction:</strong> {startup.traction}
            </p>
          </div>
        ))}
      </div>

      {/* Floating Submit Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg text-sm font-medium transition z-50"
      >
        + Submit Your Startup
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
              Submit Your Startup
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-h-[80vh] overflow-y-auto pr-2"
            >
              <div>
                <label className="block font-medium mb-1">Startup Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Startup Idea</label>
                <textarea
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">
                    Funding Needed
                  </label>
                  <input
                    type="text"
                    name="funding"
                    value={formData.funding}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Pitch Deck URL
                  </label>
                  <input
                    type="url"
                    name="pitchDeck"
                    value={formData.pitchDeck}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Team Info</label>
                <textarea
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                  rows="2"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Traction / Achievements
                </label>
                <textarea
                  name="traction"
                  value={formData.traction}
                  onChange={handleChange}
                  rows="2"
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

export default Startup;
