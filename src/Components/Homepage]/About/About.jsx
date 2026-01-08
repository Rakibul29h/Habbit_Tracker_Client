import React from "react";
import Container from "../../Shared/Container/Container";
import { motion } from "framer-motion";
const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <Container>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className={`py-20 `}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              alt="Team working"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About HabitTracker</h2>
            <p className={`text-lg mb-6 leading-relaxed opacity-80 `}>
              Founded in 2023, HabitForge began with a simple question:{" "}
              <span className="italic">Why is consistency so hard?</span> We
              discovered that the key isn't willpower—it's system design.
            </p>
            <p className={`text-lg mb-8 leading-relaxed opacity-80 `}>
              Our mission is to democratize self-improvement by providing tools
              that make building healthy habits addictive and fun. We believe in
              progress over perfection and community over isolation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-teal-500 text-xl">Mission</h4>
                <p className="text-sm opacity-70">Empowering daily growth.</p>
              </div>
              <div>
                <h4 className="font-bold text-teal-500 text-xl">Vision</h4>
                <p className="text-sm opacity-70">
                  A world where potential is realized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
};

export default About;
