// components/TeamSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import { david, deborah, emily, marcus, sarah } from "../assets";

interface TeamMember {
  id: number;
  name: string;
  image?: string;
  role: string;
  description: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      image: sarah,
      role: "Marketing Strategist",
      description: "With 8+ years in digital marketing, Sarah develops strategies for all our packages ($500-$3,500) to maximize ROI for authors.",
    },
    {
      id: 2,
      name: "Marcus Walker",
      image: marcus,
      role: "Media Buyer",
      description: "Marcus has managed over $1k in ad spend across Facebook, Amazon, and Google, consistently achieving 3-5x ROAS for book campaigns.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: emily,
      role: "Book PR Manager",
      description: "Emily handles review campaigns and influencer outreach for packages $1,200+, securing features in major publications.",
    },
    {
      id: 4,
      name: "David Thompson",
      image: david,
      role: "Creative Designer",
      description: "David creates stunning visuals for our $1,800+ packages, including book covers and promotional graphics.",
    },
    {
      id: 5,
      name: "Caroline Owolawi",
      image: deborah,
      role: "Finance Manager",
      description: "Caroline manages all financial aspects of our campaigns, ensuring optimal budget allocation and ROI for every package.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
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
                        TEAM
                    </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Experts Behind Your Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of marketing professionals brings decades of combined experience to help you achieve your publishing goals.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container with Hover Effect */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                {/* Black & White Image */}
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable="false"
                    className="w-full object-cover"
                    onContextMenu={(e) => e.preventDefault()} 

                  />
                )}

                {/* Color Reveal on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af377a] to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" onContextMenu={(e) => e.preventDefault()} />
                
                {/* Social Icons */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 delay-100">
                    <SiGmail className="text-[#d4af37] text-sm" />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#d4af37] font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;