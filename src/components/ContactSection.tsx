// components/ContactSection.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FiCheckCircle } from "react-icons/fi";
import { FaTimes, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const ContactSection: React.FC = () => {
  const formId = import.meta.env.VITE_FORMSPREE_ID || "";
  const [state, handleSubmit] = useForm(formId);
  const [showSuccess, setShowSuccess] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  if (!formId) {
    console.error("Missing Formspree ID - Check .env file");
    return <div className="text-red-500">Configuration Error</div>;
  }

  // Handle auto-dismiss
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (state.succeeded) {
      setShowSuccess(true);
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000); // 10 seconds
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [state.succeeded]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageCount(e.target.value.length);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <div className="text-[#d4af37] font-semibold tracking-wider uppercase text-sm flex items-center justify-center mb-4">
                                              <span className="">
                                              <GoDotFill />
                                              </span>
                                                
            GET IN TOUCH
                                            </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Boost Your Book <br /> Sales?
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and let's discuss how we can help you achieve your <br /> publishing goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12  bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                    <p className="text-gray-600">We respond to all inquiries within 1{" "}hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                    <p className="text-gray-600">100+ successful book campaigns with measurable results.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12  bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Free Consultation</h4>
                    <p className="text-gray-600">Every project starts with a free strategy session.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-500" />
                  <span className="text-gray-700">epic.bookmarketing@gmail.com</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-500" />
                  <span className="text-gray-700">+1 (914) 583-2115</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <span className="text-gray-700">New York, NY</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">90%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">1h</div>
                <div className="text-sm text-gray-600">Avg. Response Time</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Book Title */}
              <div>
                <label
                  htmlFor="bookTitle"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Book Title
                </label>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter your book title"
                  required
                />
                <ValidationError
                  prefix="Book Title"
                  field="bookTitle"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your book and marketing goals..."
                  required
                  onChange={handleMessageChange}
                  maxLength={500}
                ></textarea>
                <div className="flex justify-between mt-1">
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm"
                  />
                  <span className={`text-sm ${messageCount === 500 ? 'text-red-500' : 'text-gray-500'}`}>
                    {messageCount}/500 characters
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Send My Project"}
              </button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed top-4 right-4 z-50 max-w-sm w-full bg-green-50 border-l-4 border-green-500 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FiCheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3 w-0 flex-1">
                      <p className="text-sm font-medium text-green-800">
                        Message Sent Successfully!
                      </p>
                      <p className="mt-1 text-sm text-green-600">
                        Thanks for your message! We'll get back to you within 24 hours. 🚀
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        onClick={() => setShowSuccess(false)}
                        className="bg-green-50 rounded-md inline-flex text-green-400 hover:text-green-500 focus:outline-none"
                      >
                        <FaTimes className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress bar that counts down from 10 seconds */}
                <div className="w-full bg-green-200 h-1">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="bg-green-500 h-1"
                  />
                </div>
              </motion.div>
            )}

            {/* Privacy Note */}
            <div className="mt-8 pt-6 border-t border-gray-300">
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;