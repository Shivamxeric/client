import React from "react";
import { FaBookOpen, FaUserGraduate, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const GradesDashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-100 font-sans text-gray-800">
      {/* Header */}
      <motion.h1 
        className="text-4xl font-extrabold text-center mb-10 text-purple-800"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        📚 Academic Dashboard – 2025
      </motion.h1>

      {/* Student Info */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-md mb-8 flex items-center gap-4"
        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
      >
        <FaUserGraduate className="text-4xl text-indigo-600" />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p>Program: Human Services – Substance Abuse Counseling</p>
          <p>Student ID: HS2025-0231</p>
        </div>
      </motion.div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { code: "HUS-205", name: "Intro to Group Processes", grade: "A" },
          { code: "HUS-223", name: "Behavior Management", grade: "A" },
          { code: "SUB-122", name: "Substance Abuse Pharmacology", grade: "A" }
        ].map((course, idx) => (
          <motion.div 
            key={idx}
            className="bg-white rounded-xl p-5 shadow-md border-l-4 border-purple-500"
            initial={{ opacity: 0, y: 20 * idx }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 + idx * 0.2 }}
          >
            <FaBookOpen className="text-3xl text-purple-600 mb-2" />
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-sm text-gray-600">Code: {course.code}</p>
            <p className="mt-2 text-md font-bold text-green-600">Grade: {course.grade}</p>
          </motion.div>
        ))}
      </div>

      {/* Performance Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {[
          { score: "958 / 970", percentage: "98.76%" },
          { score: "983.77 / 1000", percentage: "98.38%" }
        ].map((result, i) => (
          <motion.div 
            key={i}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-2">Grade: A</h4>
            <p className="mb-2">Points: {result.score}</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: result.percentage }}
              ></div>
            </div>
            <p className="text-right mt-1 text-sm font-bold">{result.percentage}</p>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md mb-10"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        <div className="flex items-center mb-3">
          <FaTrophy className="text-yellow-500 text-2xl mr-2" />
          <h3 className="text-lg font-bold">Achievements</h3>
        </div>
        <ul className="list-disc pl-6">
          <li>Top performer in Behavioral Sciences</li>
          <li>Consistently scored A in all subjects</li>
          <li>Exemplary participation in group activities</li>
        </ul>
      </motion.div>

      {/* Notes */}
      <motion.div 
        className="bg-purple-100 p-6 rounded-xl shadow-inner"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}
      >
        <h4 className="text-md font-bold mb-2">📌 Notes from the Instructor</h4>
        <p className="italic text-gray-700">
          "Shivam has shown great leadership in group activities and maintains outstanding academic discipline. Keep up the excellent work!"
        </p>
      </motion.div>
    </div>
  );
};

export default GradesDashboard;
