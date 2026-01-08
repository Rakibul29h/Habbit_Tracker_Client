import React, { useState } from "react";
import Container from "../../Components/Shared/Container/Container";
import { ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "react-router";

const ContactUs = () => {
      const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate submission
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-teal-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white bg-gray-50 border-gray-300`;
  return (
    <Container>
      <div className="animate-fade-in max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center opacity-70 mb-16 max-w-2xl mx-auto">
          Have a question about HabitForge? We're here to help! Fill out the
          form below or reach us via email.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`p-8 rounded-2xl dark:bg-gray-800 bg-teal-900 text-white
            `}
          >
            <h3
              className={`text-2xl font-bold mb-6 `}
            >
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full dark:bg-gray-700 bg-teal-800
                  `}
                >
                  <Users size={20} />
                </div>
                <div>
                  <h4 className={`font-bold dark:text-teal-100`}>
                    Support Team
                  </h4>
                  <p className={`text-sm dark:text-teal-200`}>
                    Monday - Friday, 9am - 5pm
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full dark:bg-gray-700 bg-teal-800
                  `}
                >
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className={`font-bold  dark:text-teal-100`}>
                    Email Us
                  </h4>
                  <p className={`text-sm  dark:text-teal-200`}>
                    support@habittracker.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full dark:bg-gray-700 bg-teal-800
                  `}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className={`font-bold  dark:text-teal-100`}>
                    Privacy Concerns
                  </h4>
                  <p className={`text-sm $ dark:text-teal-200`}>
                    privacy@habittracker.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className={`font-bold mb-4 dark:text-white`}>
                Follow Us
              </h4>
              <div className="flex gap-4">
                <Link to={""}
                  className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600
                    bg-teal-800 hover:bg-teal-700
                  `}
                >
                  X
                </Link>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600
                    bg-teal-800 hover:bg-teal-700
                  `}
                >
                  In
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer
                    dark:bg-gray-700 dark:hover:bg-gray-600
                    bg-teal-800 hover:bg-teal-700
                  `}
                >
                  Fb
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl dark:bg-gray-800 bg-white shadow-xl
            `}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="opacity-70">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-teal-600 font-semibold hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium opacity-80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium opacity-80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium opacity-80 mb-2">
                    Subject
                  </label>
                  <select className={inputClass}>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Feedback</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium opacity-80 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    className={inputClass}
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition shadow-lg transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
