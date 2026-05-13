// components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa";
import { logo } from "../assets";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // const whatsappRedirect = () => {
  //   const whatsappNumber = "19145832115";
  //   const message = "Hello, I need assistance for my book to get seen!";
  //   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  //   // In a web app, you typically navigate to the URL
  //   window.location.href = whatsappUrl;
  // };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img
                src={logo}
                alt="Book Marketing Agency Logo"
                className="w-20 h-auto"
              />
              <p className="text-gray-400 leading-relaxed">
                Helping authors sell more books and build loyal reader communities through proven marketing strategies.
              </p>
             
            </motion.div>

       

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {[
                  'Amazon Marketing',
                  'Book Launch Campaigns',
                  'Author Branding',
                  'Social Media Ads',
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect With Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* <h4 className="text-lg font-semibold mb-4">Connect With Us</h4> */}
              <div className="space-y-4">
                {/* Social Media */}
                {/* <div className="flex gap-4 mb-6">
                 <button onClick={whatsappRedirect} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110">
                    <FaWhatsapp />
                  </button>
                </div> */}

               
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8 md:my-12"
          />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Book Marketing Agency. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
              
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;