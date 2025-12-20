import React from "react";
import { motion } from "framer-motion";
const BenefitCard = ({ icon, title, desc }) => {
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
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-center"
    >
      <div className="text-teal-600 w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-teal-50 rounded-full">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
};

export default BenefitCard;
