import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { FileText, ImageIcon, Code, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import About from './About';
import Contact from './Contact';
import { motion } from 'framer-motion';

const Home = () => {
  return ( <>
    <div className="min-h-screen bg-white text-gray-800 pb-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_#e0f2fe_20%,_#f0fdfa_50%,_#fae8ff_80%)] opacity-30"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            initial={{
              y: Math.random() * 100,
              x: Math.random() * 100,
              scale: 0.5
            }}
            animate={{
              y: [0, 100, 0],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}

        {/* Floating Blobs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-2xl opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-2xl opacity-40"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative text-center py-16 sm:py-20 px-4 text-gray-900">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              STUDYSPHERE
            </span> - Your Academic Success Partner
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Trusted by 10,000+ students worldwide for academic excellence. Get 24/7 expert assistance 
            with assignments, projects, and online coursework.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              to="/get-started" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Start Now
            </Link>
            <Link 
              to="/how-it-works" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
            >
              How It Works
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <span>500+ Subject Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              <span>100% Confidential</span>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path fill="currentColor" className="text-white" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

 
{/* Services Section - Enhanced */}
<section className="relative py-12 sm:py-16 px-4 md:px-16 bg-white/50 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 sm:mb-12">
      Comprehensive Academic Support
    </h2>
    
    {/* Grid Container */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Assignment Help Card */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all relative overflow-hidden group"
        whileHover={{ y: -10 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-xl">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">Assignment Help</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Essay Writing & Research Papers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Math & Statistics Solutions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Case Studies & Reports
            </li>
          </ul>
        </div>
      </motion.div>

      {/* College Projects Card */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all relative overflow-hidden group"
        whileHover={{ y: -10 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 rounded-xl">
              <ImageIcon className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">College Projects</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Final Year Projects
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Research Proposals
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Thesis Writing
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Online Work Card */}
      <motion.div 
        className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all relative overflow-hidden group"
        whileHover={{ y: -10 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-100 rounded-xl">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">Online Work</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Web Development
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Data Analysis
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Technical Documentation
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </div>
</section>
            {/* Similar enhanced cards for other services... */}
       
       {/* Why Choose Us Section */}
       <section className="py-12 px-4 sm:px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              Why Choose StudySphere?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">
                    Rigorous quality checks and plagiarism-free work guaranteed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm">
                    500+ qualified professionals across various disciplines
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock assistance and deadline management
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Secure & Confidential</h3>
                  <p className="text-gray-600 text-sm">
                    Complete data protection and privacy assurance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Existing Why Choose Us, About, Contact sections with enhanced styling... */}

    </div>
      <Footer />
      </>
  );
};

export default Home;