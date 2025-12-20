import React from "react";
import { motion } from "framer-motion";
const Newsletter = () => {
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
    className="py-16 md:py-24 max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Productive</h2>
      <p className="text-gray-600 mb-6">
        Get the latest tips on productivity and habit formation straight to your
        inbox.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-md w-full sm:w-64"
        />
        <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
};

export default Newsletter;
