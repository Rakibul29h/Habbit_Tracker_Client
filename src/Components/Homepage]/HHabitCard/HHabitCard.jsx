import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
const HHabitCard = ({ habit }) => {
  const {
    _id: id,
    category,
    name,
    status,
    streak,
    time,
    title,
    description,
    photoURL
  } = habit;
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="bg-white rounded-2xl shadow-md transition-shadow duration-300 border border-gray-100 "
    >
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
    <div className="h-48 overflow-hidden relative">
      <img src={photoURL} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
      <span className="absolute top-3 right-3 bg-white/90 px-2 py-1 text-xs font-bold rounded text-teal-700 uppercase">{habit.category}</span>
    </div>
    <div className="p-5 grow flex flex-col">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm line-clamp-2 mb-4 grow">{habit.description}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
        <div className="text-xs text-gray-400">By {name}</div>
        <button 
          onClick={() => { setSelectedHabit(habit); setView('habit-details'); }}
          className="text-teal-600 text-sm font-semibold hover:text-teal-800 flex items-center"
        >
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
    </motion.div>
  );
};

export default HHabitCard;
