// components/AuthorsSection.tsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";

interface Author {
  link: string | undefined;
  id: number;
  name: string;
  genre: string;
  status: string;
  color: string;
}

const AuthorsSection: React.FC = () => {
  const [isPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const authors: Author[] = [
    {
      id: 1,
      name: "Donal Ryan",
      genre: "Literature & Fiction",
      status: "Amazon Bestseller",
      color: "from-blue-500 to-blue-600",
      link: "https://www.amazon.com/stores/Donal-Ryan/author/B00CMAYTPI?ref=ap_rdr&shoppingPortalEnabled=true"
    },
    {
      id: 2,
      name: "J. D. Kinnest",
      genre: "Humor & Entertainment",
      status: "Best Seller",
      color: "from-amber-500 to-amber-600",
      link: "https://www.amazon.com/stores/J.-D.-Kinnest/author/B09SY9V53N?ref=ap_rdr&shoppingPortalEnabled=true"
    },
    {
      id: 4,
      name: "Emma Greene",
      genre: "Children's Books",
      status: "Best Seller",
      color: "from-purple-500 to-purple-600",
      link: "https://www.amazon.com/stores/Emma-Greene/author/B0CQ63R25V?ref=ap_rdr&shoppingPortalEnabled=true"
    },
    {
      id: 6,
      name: "M.L. Scott",
      genre: "Humor & Entertainment",
      status: "Kindle Unlimited",
      color: "from-indigo-500 to-indigo-600",
      link: "https://www.amazon.com/stores/M.L.-Scott/author/B0G4LMX4S9?ref=ap_rdr&shoppingPortalEnabled=true"
    },
    {
      id: 7,
      name: "Park Kara",
      genre: "Science Fiction & Fantasy",
      status: "Kindle Unlimited",
      color: "from-yellow-500 to-yellow-600",
      link: "https://www.amazon.com/stores/Park-Kara/author/B0D6472KM5?ref=sr_ntt_srch_lnk_1&qid=1756417887&sr=1-1&isDramIntegrated=true&shoppingPortalEnabled=true"
    },
    {
      id: 9,
      name: "Shubham K. Singh",
      genre: "Self-Help",
      status: "Kindle Unlimited",
      color: "from-gray-500 to-gray-600",
      link: "https://www.amazon.com/stores/Shubham-K.-Singh/author/B0D1YQTYZ8?ref=ap_rdr&shoppingPortalEnabled=true"
    },
    {
      id: 10,
      name: "Stephen J. Ellis",
      genre: "Children's Books",
      status: "Best Seller",
      color: "from-green-500 to-green-600",
      link: "https://www.amazon.com/stores/Stephen-J.-Ellis/author/B09G37ZBPM?ref=ap_rdr&shoppingPortalEnabled=true"
    },
  ];

  // Duplicate authors for seamless scrolling
  const allAuthors = [...authors, ...authors, ...authors];

  return (
    <section id="authors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                                    SUCCESS STORIES
                                </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Authors We've Worked With
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful authors who have transformed their book sales and built thriving reader communities with our help.
          </p>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <div 
          className="relative overflow-hidden mb-16"
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div
            ref={containerRef}
            className={`flex gap-6 ${
              !isPaused ? "animate-scroll" : ""
            }`}
            style={{
              animationDuration: "40s", // Slow speed for better readability
            }}
          >
            {allAuthors.map((author, index) => (
              <div
                key={`${author.id}-${index}`}
                className="flex-shrink-0 w-64"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Author Avatar */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${author.color} mx-auto flex items-center justify-center`}>
                      <span className="text-white text-xl font-bold">
                        {author.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {author.name}
                    </h3>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-sm font-medium text-gray-700">
                        {author.genre}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">
                        {author.status}
                      </div>
                      <span>
                        <a href={author.link} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-[#b8860b] text-sm transition-colors duration-200">
                          View Profile
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AuthorsSection;