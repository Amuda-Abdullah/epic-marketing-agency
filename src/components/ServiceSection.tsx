// components/ServicesSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaChevronRight,
  FaCheck,
  FaStar,
  FaChartLine,
  FaUsers,
  FaBook,
  FaBullhorn,
  FaChartBar,
  FaHeadset,
  FaCalendarAlt,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration: string;
  features: string[];
  highlight?: string;
  popular?: boolean;
  ctaText?: string;
}

const getPriceValue = (price?: string) => {
  if (!price) return Number.POSITIVE_INFINITY;
  const numericValue = Number(price.replace(/[$,]/g, ""));
  return Number.isFinite(numericValue) ? numericValue : Number.POSITIVE_INFINITY;
};

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const services: Service[] = [
    {
      id: 1,
      icon: <FaBook className="text-2xl" />,
      title: "Starter Launch",
      tagline: "Perfect for new authors testing the waters",
      description:
        "Get your book off the ground with essential marketing basics and initial reader engagement.",
      price: "$150",
      duration: "Basic Campaign",
      features: [
        "Basic Book Audit",
        "10-15 Goodreads reviews from real readers",
        "1 week social media posts (3-4 posts)",
        "Basic email announcement template",
        "Goodreads Listopia listings (up to 10 lists)",
        "Campaign performance report",
      ],
      ctaText: "Start Basic",
    },
    {
      id: 2,
      icon: <FaBullhorn className="text-2xl" />,
      title: "Growth Accelerator",
      tagline: "Build momentum and consistency",
      description:
        "Expand your reach with more comprehensive marketing and consistent social media presence.",
      price: "$300",
      originalPrice: "",
      duration: "2-Week Campaign",
      features: [
        "2 weeks social media (10-12 posts)",
        "Readers and influencer outreach",
        "20-30 Goodreads reviews from real readers",
        "Email campaign (2 emails)",
        "Goodreads Listopia listings (up to 15 lists)",
        "Campaign performance report",
      ],
      popular: true,
      highlight: "Most Popular",
      ctaText: "Accelerate Growth",
    },
    {
      id: 3,
      icon: <FaChartBar className="text-2xl" />,
      title: "Professional Campaign",
      tagline: "Comprehensive marketing for serious authors",
      description:
        "Full-scale marketing with targeted outreach and professional content strategy.",
      price: "$500",
      duration: "3-Week Campaign",
      features: [
        "Everything in Growth Accelerator, plus:",
        "Targeted promotion in high traffic communities",
        "2-3 weeks social media (20 posts)",
        "35-40 Goodreads reviews from real readers",
        "Book blogger outreach (15-20 contacts)",
        "Email campaign (reads list)",
        "Goodreads Listopia listings (up to 25 lists)",
      ],
      popular: true,
      highlight: "Professional Choice",
      ctaText: "Go Professional",
    },
    {
      id: 4,
      icon: <FaHeadset className="text-2xl" />,
      title: "Elite 90-Day Program",
      tagline: "Strategic launch for maximum visibility",
      description:
        "Designed to push your book toward bestseller status with verified reviews and extensive outreach.",
      price: "$750",
      duration: "4-Week Campaign",
      features: [
        "3-4 weeks social media (30 posts)",
        "2-3 Verified Amazon reviews",
        "Blogger outreach (30-40 contacts)",
        "40-50 Goodreads reviews from real readers",
        "Full targeted email campaign",
        "Goodreads Listopia listings (up to 35 lists)",
        "Custom Amazon QR code mockup",
      ],
      highlight: "Premium Choice",
      ctaText: "Blueprint Success",
    },
    {
      id: 5,
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Premium Launch System",
      tagline: "Full-service marketing for ambitious authors",
      description:
        "Complete marketing ecosystem for authors ready to dominate their genre.",
      price: "$1000",
      duration: "8 Week Campaign",
      features: [
        "Everything in Authority Platform, plus:",
        "7-8 weeks social media (45 posts)",
        "10+ Verified Amazon reviews",
        "Professional book trailer",
        "90+ Goodreads reviews from real readers",
        "Complete sales funnel",
        "Advanced campaign optimization",
      ],
      ctaText: "Launch Premium",
    },
    {
      id: 6,
      icon: <FaBook className="text-2xl" />,
      title: "Website Development",
      tagline: "Author landing page built around your brand",
      description:
        "Custom website design and author landing pages tailored to your book, audience, and conversion goals.",
      price: "Custom Quote",
      duration: "Project Based",
      features: [
        "Custom author landing page design",
        "Book sales page or brand homepage",
        "Lead capture and contact flow",
        "Responsive design for desktop and mobile",
        "Launch-ready layout based on your goals",
      ],
      ctaText: "Build My Site",
    },
    {
      id: 7,
      icon: <FaBullhorn className="text-2xl" />,
      title: "Ghostwriting",
      tagline: "From concept to finished manuscript",
      description:
        "Professional writing support for authors who want a book developed with clarity, consistency, and market fit.",
      price: "Custom Quote",
      duration: "Based on Scope",
      features: [
        "Concept development and planning",
        "Full manuscript drafting",
        "Structure and storytelling support",
        "Research and writer collaboration",
        "Revision support based on your feedback",
      ],
      ctaText: "Discuss My Project",
    },
    {
      id: 8,
      icon: <FaChartBar className="text-2xl" />,
      title: "Book Editing & Formatting",
      tagline: "Polish your manuscript for publishing success",
      description:
        "Professional editing and formatting to make your manuscript clean, readable, and ready for print or digital release.",
      price: "Custom Quote",
      duration: "Per Manuscript",
      features: [
        "Developmental or line editing",
        "Proofreading and consistency checks",
        "Interior formatting for print and ebook",
        "Cover layout support where needed",
        "Publishing-ready final pass",
      ],
      ctaText: "Edit My Book",
    },
    {
      id: 9,
      icon: <FaHeadset className="text-2xl" />,
      title: "UGC Video Creation",
      tagline: "Short-form content tailored to your audience",
      description:
        "Custom user-generated style video campaigns designed to build visibility, trust, and excitement around your book or brand.",
      price: "Custom Quote",
      duration: "Custom Campaign",
      features: [
        "Video concept and script planning",
        "Short-form editing for TikTok, Reels, and Shorts",
        "Brand-aligned content direction",
        "Campaign support for launches and promotions",
        "Delivery based on your content goals",
      ],
      ctaText: "Plan My Video Campaign",
    },
  ];

  const stats = [
    { icon: <FaChartLine />, number: "85%", label: "Sales Increase" },
    { icon: <FaStar />, number: "4.9", label: "Client Rating" },
    { icon: <FaUsers />, number: "500+", label: "Authors Helped" },
    { icon: <FaRocket />, number: "200+", label: "Bestsellers" },
  ];

  const tabs = [
    { id: "all", label: "All Packages" },
    { id: "budget", label: "Budget-Friendly" },
    { id: "popular", label: "Most Popular" },
    { id: "premium", label: "Premium" },
  ];

  const filteredServices = [...services]
    .sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price))
    .filter((service) => {
      if (activeTab === "all") return true;
      if (activeTab === "budget") return Number.isFinite(getPriceValue(service.price)) && getPriceValue(service.price) <= 500;
      if (activeTab === "popular") return service.popular;
      if (activeTab === "premium") return Number.isFinite(getPriceValue(service.price)) && getPriceValue(service.price) >= 750;
      return true;
    });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-[#d4af37] font-semibold tracking-wider uppercase text-sm flex items-center justify-center mb-4">
            <span className="">
              <GoDotFill />
            </span>
            MARKETING PACKAGES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
              Strategic Marketing Packages
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Choose from our results-driven packages designed to match your goals, budget, and timeline.
            Every package includes personalized strategy and dedicated support.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-amber-500">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                </div>
                <div className="text-sm text-gray-600 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 ${
                service.popular ? "ring-2 ring-amber-500" : ""
              } ${service.highlight === "Enterprise Level" ? "border-2 border-purple-300" : ""}`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className={`px-4 py-1 rounded-full text-sm font-semibold shadow-lg ${
                    service.highlight === "Most Popular"
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white"
                      : service.highlight === "Premium Choice"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
                  }`}>
                    {service.highlight}
                  </div>
                </div>
              )}

              {/* Original Price */}
              {service.originalPrice && (
                <div className="absolute -top-3 right-4">
                  <div className="text-xs text-gray-500 line-through bg-white px-2 py-1 rounded">
                    {service.originalPrice}
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
                  <div className="text-amber-600">{service.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-amber-600 font-medium text-sm mb-2">{service.tagline}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

              {/* Price & Duration */}
              <div className="mb-4 p-4 bg-gradient-to-r from-gray-50 to-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-xs text-gray-500">{service.duration}</div>
                  </div>
                  {service.originalPrice && (
                    <div className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                      Save ${Number(service.originalPrice.replace("$", "")) - Number(service.price.replace("$", ""))}
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm mb-2">What's Included:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaCheck className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                    <span className="text-gray-600 text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  // This would typically open a contact form or booking modal
                  console.log(`Selected package: ${service.title}`);
                  // You can replace this with your actual booking logic
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform group relative overflow-hidden ${
                  hoveredCard === service.id || service.popular
                    ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-white shadow-lg"
                    : service.highlight === "Enterprise Level"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg"
                    : "bg-white border-2 border-gray-800 text-gray-800 hover:shadow-md"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                  {service.ctaText || "Get Started"}
                  <FaChevronRight
                    className={`transition-transform duration-300 text-xs ${
                      hoveredCard === service.id ? "translate-x-1" : ""
                    }`}
                  />
                </span>
                
                {/* Gradient overlay on hover */}
                {hoveredCard === service.id && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;