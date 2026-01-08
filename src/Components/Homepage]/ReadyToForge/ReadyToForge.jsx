import React from "react";
import Container from "../../Shared/Container/Container";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
const ReadyToForge = () => {
  const navigate = useNavigate();
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
      className="bg-teal-900"
    >
      <Container>
        <section className="py-20 bg-teal-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative z-10 max-w-2xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Forge a Better You?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of others building the life they want, one habit at
              a time.
            </p>
            <button
              onClick={() => navigate("/myHabit")}
              className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-400 transition transform hover:-translate-y-1 shadow-lg"
            >
              Start Your Journey Now
            </button>
          </div>
        </section>
      </Container>
    </motion.div>
  );
};

export default ReadyToForge;
