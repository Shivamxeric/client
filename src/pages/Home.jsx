import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FileText, ImageIcon, Code } from 'lucide-react';
import About from './About';
import Contact from './Contact';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 pb-24">

      {/* Header */}
      <Header />

      {/* Hero Section with Animation */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-100 to-white text-gray-900">
        <motion.h1
          className="text-5xl font-extrabold mb-4 leading-tight tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-blue-600">STUDYSPHERE</span>
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl mx-auto text-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We give you the assurance of guarantee.
        </motion.p>

        <motion.p
          className="text-base italic mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Let our experienced experts handle your assignments.
        </motion.p>

        <motion.div
          className="mt-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
        >
          🚀 Empowering Students | ✍️ Assignment Help | 💻 Project Support
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Assignment Help */}
          <motion.div
            className="bg-white border p-6 rounded-2xl hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center">Assignment Help</h3>
            <p className="text-sm text-center mt-2 text-gray-500">
              Get professional help with your assignments and study material.
            </p>
            <Link to="/assignment-help" className="mt-4 block text-center text-blue-600 hover:underline">
              Get Assistance
            </Link>
          </motion.div>

          {/* College Projects */}
          <motion.div
            className="bg-white border p-6 rounded-2xl hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">
              <ImageIcon className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center">College Projects</h3>
            <p className="text-sm text-center mt-2 text-gray-500">
              Complete guidance for your academic and final year projects.
            </p>
            <Link to="/college-projects" className="mt-4 block text-center text-green-600 hover:underline">
              Learn More
            </Link>
          </motion.div>

          {/* Online Work */}
          <motion.div
            className="bg-white border p-6 rounded-2xl hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">
              <Code className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-center">Online Work</h3>
            <p className="text-sm text-center mt-2 text-gray-500">
              Need help with freelance, data entry, or digital tasks? We’re here.
            </p>
            <Link to="/online-work" className="mt-4 block text-center text-red-600 hover:underline">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About & Contact */}
      <About />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
