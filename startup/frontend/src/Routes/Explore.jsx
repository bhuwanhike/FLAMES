import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { ArrowRight } from "lucide-react";
import { AuthContext } from "../contexts/auth-context";
import axios from "axios";
// A utility component for the glowing effect, makes the code cleaner
const Glow = () => (
  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 blur transition duration-500 group-hover:opacity-75" />
);

const Explore = () => {
  const { isLoggedIn, setRole } = useContext(AuthContext);

  // Updated dummy data with more modern/abstract logos
  const fundedStartupsDemo = [
    {
      id: 1,
      name: "InnovateX Solutions",
      logo: "https://cdn.dribbble.com/userupload/12497042/file/original-1b4591f1a0e5f29987823f66299b66b7.jpg?resize=400x300&vertical=center",
      description: "Secured $2.5M Seed Round",
      investor: "Led by Horizon Ventures",
    },
    {
      id: 2,
      name: "GreenEnergy Co.",
      logo: "https://cdn.dribbble.com/userupload/12502690/file/original-3e580a97c36b856c8024223e7eda58c7.jpg?resize=400x300&vertical=center",
      description: "Raised $5M Series A",
      investor: "Powered by EcoFund",
    },
    {
      id: 3,
      name: "Aura AI",
      logo: "https://cdn.dribbble.com/userupload/12494191/file/original-65d1b7458117947171d9a04a58b88dbd.jpg?resize=400x300&vertical=center",
      description: "$1.8M Pre-Seed Funding",
      investor: "From Angel Syndicate",
    },
    {
      id: 4,
      name: "SynthWave Labs",
      logo: "https://cdn.dribbble.com/userupload/12499121/file/original-b9dcb0d201c10d7a0494a806c9a4055d.jpg?resize=400x300&vertical=center",
      description: "Closed $7M Series B",
      investor: "Backed by TechGrowth",
    },
    {
      id: 5,
      name: "DataDrive Analytics",
      logo: "https://cdn.dribbble.com/userupload/12489814/file/original-2726756819b16e100366b26c7e145821.jpg?resize=400x300&vertical=center",
      description: "Successfully acquired $3M",
      investor: "Funded by Innovation Capital",
    },
    {
      id: 6,
      name: "NextGen Software",
      logo: "https://cdn.dribbble.com/userupload/12501980/file/original-220025f8229a7569b4c13a0785161b96.jpg?resize=400x300&vertical=center",
      description: "Secured $4M Seed Round",
      investor: "Led by VenturePath",
    },
    {
      id: 7,
      name: "Quantum Leap",
      logo: "https://cdn.dribbble.com/userupload/12493902/file/original-2776c12c5b364491024bd35a4d702330.jpg?resize=400x300&vertical=center",
      description: "$1.5M Seed Funding",
      investor: "From Innovate Capital",
    },
  ];
  const [fundedStartups, setFundedStartups] = useState(fundedStartupsDemo);

  const getNEWS = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=("startup funding" OR "seed round" OR "series a" OR "startup investment") AND "India"&language=en&sortBy=publishedAt&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    );
    const news = response.data.articles;
    console.log(news);
    setFundedStartups(news);
  };
  useEffect(() => {
    getNEWS();
  }, []);

  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const words = ["Connecting", "Linking", "Uniting", "Matching"];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const startScrolling = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        const card = scrollContainer.querySelector(".startup-card");
        if (card) {
          const scrollStep = card.offsetWidth + 32;
          scrollContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      }, 2000);
    };

    const handleScroll = () => {
      const { scrollLeft, scrollWidth } = scrollContainer;
      const contentWidth = scrollWidth / 2;

      if (scrollLeft >= contentWidth) {
        scrollContainer.scrollLeft = scrollLeft - contentWidth;
      } else if (scrollLeft <= 0 && contentWidth > 0) {
        scrollContainer.scrollLeft = scrollLeft + contentWidth;
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      scrollContainer.scrollBy({ left: e.deltaY, behavior: "auto" });
    };

    if (!isHovering) {
      startScrolling();
    }

    scrollContainer.addEventListener("scroll", handleScroll);
    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isHovering]);

  return (
    <div className="bg-[#0D1117] text-slate-300 font-inter">
      {/* Font links */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0D1117] via-[#111827] to-[#030712]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 leading-tight mb-6 font-poppins animate-fadeInDown">
            <ReactTyped
              strings={words}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              loop={true}
              className="typewriter"
            />
            <span className="static-text">
              {" "}
              Startups with the Right Investors
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-inter leading-relaxed animate-fadeInDown">
            AI-driven matchmaking platform that helps innovative startups find
            investors who believe in their vision.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to={isLoggedIn ? "/startups?action=showStartupForm" : "/register"}
              className="bg-gradient-to-r from-cyan-400 to-purple-600 !text-white px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity transform hover:scale-105 shadow-lg font-poppins tracking-wide animate-fadeInDown"
              onClick={() => setRole("startup")}
            >
              I'm a Startup
            </Link>

            <Link
              to={
                isLoggedIn ? "/investors?action=showInvestorForm" : "/register"
              }
              className="bg-slate-800/50 backdrop-blur-sm text-slate-300 border border-slate-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-slate-700/70 hover:border-slate-500 transition-all transform hover:scale-105 shadow-md font-poppins tracking-wide animate-fadeInDown"
              onClick={() => setRole("investor")}
            >
              I'm an Investor
            </Link>
          </div>
        </div>
      </section>

      <hr className="h-px my-12 bg-cyan-400/50 border-0" />

      {/* Success Stories Section */}
      <section className="py-24 bg-[#0D1117] overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins">
            Success Stories
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See the innovative ventures that have recently secured funding
            through PitchPort.
          </p>
        </div>

        <div className="relative">
          {/* Fade effects on the edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D1117] to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0D1117] to-transparent pointer-events-none z-10"></div>

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex overflow-x-auto no-scrollbar pb-4 px-4 space-x-8 pt-8"
          >
            {fundedStartups.map((startup, index) => (
              <div
                key={`${startup.id}-${index}`}
                className="group startup-card flex-none w-[400px] p-6  bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/80 transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/50 hover:-translate-y-2 flex flex-col"
              >
                <div className="flex items-center gap-5 mb-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                    <img
                      src={startup.urlToImage}
                      alt={`${startup.name} Logo`}
                      className="relative w-full h-full rounded-full object-cover border-2 border-slate-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-poppins truncate">
                      {startup.title}
                    </h3>
                    <p className="text-sm text-slate-400">{startup.investor}</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    {startup.description}
                  </p>
                </div>
                <Link
                  to={`${startup.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-cyan-400 font-semibold text-sm flex items-center gap-2 group-hover:text-cyan-300 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}

      {!isLoggedIn && (
        <section className="py-24 px-6 bg-gradient-to-br from-[#0D1117] via-[#111827] to-[#030712] text-white text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 font-poppins leading-tight">
            Ready to ignite the future?
          </h2>
          <p className="mb-10 text-xl text-slate-400 max-w-2xl mx-auto">
            Join the PitchPort network today and make an impact.
          </p>
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 !text-white font-bold px-12 py-5 rounded-full hover:opacity-90 transition-opacity transform hover:scale-105 shadow-2xl shadow-purple-500/20 text-xl font-poppins tracking-wide"
          >
            Get Started Now
          </Link>
        </section>
      )}
    </div>
  );
};

export default Explore;
