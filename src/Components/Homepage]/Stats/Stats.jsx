import React from "react";
import { motion } from "framer-motion";
const Stats = () => {
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
      className="py-16 bg-teal-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around text-center">
        <div className="mb-8 md:mb-0">
          <div className="text-4xl font-bold">10k+</div>
          <div className="text-teal-100">Active Users</div>
        </div>
        <div className="mb-8 md:mb-0">
          <div className="text-4xl font-bold">50k+</div>
          <div className="text-teal-100">Habits Tracked</div>
        </div>
        <div>
          <div className="text-4xl font-bold">95%</div>
          <div className="text-teal-100">Success Rate</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
