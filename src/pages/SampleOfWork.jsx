import React from "react";
import { motion } from "framer-motion";
import sample from "./Sample.png"
import { FaFileAlt, FaUserTie } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

export default function SampleOfWorkPage() {
  return (
    <>
    <Header/>

    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <div className="flex items-center gap-4 mb-6">
          <FaUserTie className="text-blue-700 text-3xl" />
          <h1 className="text-3xl font-bold text-blue-700">Professional Sample Work</h1>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The following report presents a professional body of work carried out during various academic and
            industry-aligned research and operational projects. This includes deep exploration of topics such
            as corporate finance, engineering management, global marketing, statutory law compliance,
            customer experience, and personal effectiveness. The work showcases strong attention to detail,
            research capabilities, structured documentation, and proficiency in analytical tools and frameworks.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <WorkCard
            title="Corporate Finance Analysis"
            description="Detailed analysis of dividend policies, taxation impact, and sustainability approaches for firms like AstraZeneca and GSK."
            docLink="#"
          />
          <WorkCard
            title="Engineering Management Report"
            description="Production Planning and Control strategies with case study on Innovare Motors in the electric vehicle sector."
            docLink="#"
          />
          <WorkCard
            title="Customer Experience Strategy"
            description="Starbucks case study showcasing AI personalization and omnichannel strategy design."
            docLink="#"
          />
          <WorkCard
            title="Global Marketing Entry Plan"
            description="Market analysis and digital strategy for Signet Jewellery's expansion into the South Korean market."
            docLink="#"
          />
        </section>

        <div className="mt-12 text-center">
          <img
            src={sample} // replace with your image
            alt="Professional Preview"
            className="mx-auto rounded-2xl shadow-lg w-64 h-64 object-cover border-4 border-blue-300"
          />
          <p className="mt-4 text-sm text-gray-500">A visual snapshot of professional presence and contribution</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

function WorkCard({ title, description, docLink }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
    >
      <div className="flex items-center gap-3 mb-2">
        <FaFileAlt className="text-blue-600 text-xl" />
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <a
        href={docLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg"
      >
        View Document
      </a>
    </motion.div>
  );
}