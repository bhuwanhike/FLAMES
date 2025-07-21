import React from 'react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { ReactTyped } from 'react-typed';

const Home = () => {
  const words = ['Connecting', 'Linking', 'Uniting', 'Matching'];
  return (
    <div className='bg-white text-gray-800'>
      {/* Hero Section */}
      <section className='min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-black to-gray-800'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-4'>
          <ReactTyped
            strings={words}
            typeSpeed={100} // Typing speed in ms
            backSpeed={50} // Deleting speed in ms
            backDelay={1000} // Pause before deleting
            loop={true} // Cycle through words indefinitely
            className='typewriter' // CSS class for styling
          />
          <span className='static-text'>
            {' '}
            Startups with the Right Investors
          </span>
        </h1>

        <p className='text-lg md:text-xl text-gray-600 max-w-xl mb-6'>
          AI-driven matchmaking platform that helps innovative startups find
          investors who believe in their vision.
        </p>

        {/* Image Container for Left/Right Layout */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 mb-8 w-full max-w-4xl mx-auto'>
          {/* First Image */}
          <div className='w-full md:w-1/2 lg:w-5/12 h-80'>
            {' '}
            {/* Added fixed height h-80 */}
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxjbUimXQJCUrzTagSUr4ItmbezqWrBFfgg&s'
              alt='Illustrative image of a startup team meeting with investors'
              className='rounded-lg shadow-xl w-full h-full object-cover' // h-full to fill parent div
            />
          </div>

          {/* Second Image */}
          <div className='w-full md:w-1/2 lg:w-5/12 h-80'>
            {' '}
            {/* Added fixed height h-80 */}
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7LF08wGgCjybDOaXzdth1XLQMagolywHcA&s'
              alt='Illustrative image of a startup and investors collaborating'
              className='rounded-lg shadow-xl w-full h-full object-cover' // h-full to fill parent div
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4'>
          <Link
            to='/startups'
            className='bg-yellow-200 !text-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition'
          >
            I'm a Startup
          </Link>
          <Link
            to='/investors'
            className='bg-gray-500/100 text-white px-6 py-3 rounded-xl hover:bg-gray-300 transition'
          >
            I'm an Investor
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 px-6 bg-blue-600 text-white text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Ready to build the future?
        </h2>
        <p className='mb-6 text-lg'>
          Whether you're a founder or a funder — join the network today.
        </p>
        <Link
          to='/register'
          className='bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition'
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
