'use client';

import React, { useState } from 'react';

// Define the types for the props
interface InfoCardProps {
  index: number;
  title: string;
  description: string;
  image: string; // Add image prop
  extraInfo: string; // Additional text to show on hover
  isHovered: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

// Data for the content cards
const contentData = [
  {
    title: "Buyer-Seller Matching",
    description: "Use QualiBuy™, our algorithm that scores buyers for better matches.",
    image: "/buyer-seller-matching-old-man-laptop.png", 
    extraInfo: "QualiBuy™ : Our seller-buyer scoring algorithm gives you more control by seeing match scores and profiles of interested buyers to decide who proceeds."
  },
  {
    title: "Access Enhanced Support",
    description: "Onboard and access preferred rates from vetted lawyers, accountants, M&A advisors, and more.",
    image: "/access-enhanced-support-two-people-talking.png", 
    extraInfo: "Detailed info about enhanced support that appears on hover."
  },
  {
    title: "Guided Workflow",
    description: "Use SellerSpan™ to follow our step-by-step workflow for preparing your business for sale.",
    image: "/Guided-Workflows-old-man-laptop.png", 
    extraInfo: "SellerSpan™ : Our step-by-step workflow from start-to-finish to sell your business, supported by our AI experts."
  },
  {
    title: "Marketplace",
    description: "Enhance your business profile with our redesigned Marketplace.",
    image: "/marketplace-girl-tablet.png", 
    extraInfo: "We’ve redesigned the pre-NDA and post-NDA sites to, enhance the profile and beauty of your business to buyers."
  }
];

// InfoCard Component with TypeScript props
const InfoCard = ({
  index,
  title,
  description,
  image,
  extraInfo,
  isHovered,
  onMouseEnter,
  onMouseLeave
}: InfoCardProps) => (
  <div
    className={`relative w-96 bg-white p-4 md:p-6 mb-4 mx-4 rounded-lg shadow-md text-center transition-all duration-500 ease-in-out ${isHovered ? 'scale-105' : ''}`}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={onMouseLeave}
  >
    {/* Content Container */}
    <div className="relative transition-opacity duration-300 ease-in-out opacity-100">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="mb-2">
        {description}
      </p>
    </div>

    {/* Image that appears on hover */}
    <div
      className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 max-h-60 mt-4' : 'opacity-0 max-h-0'}`}
      style={{ overflow: 'hidden' }}
    >
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-lg mb-2"
      />
    </div>

    {/* Additional info that appears on hover */}
    <div
      className={`transition-all duration-500 ease-in-out ${isHovered ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      style={{ overflow: 'hidden' }}
    >
      <p>{extraInfo}</p>
    </div>
  </div>
);

// Journey Component
const Journey = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to top, #F9F9F9 50%, #E1F1FD 90%)', // Diagonal split background
      }}
      className="grow items-center pt-10 sm:pt-16 md:pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-20">
        <div className="w-full text-left">
          <div className="w-[218px] text-[#0a0a19] text-[13px] font-medium font-['Plus Jakarta Sans'] uppercase leading-[18px] tracking-wide mb-4">
            We Span the End-to-End Journey
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-start mb-20">
          <div className="w-full md:w-[607px] text-[#0a0a19] text-[57px] font-bold font-['Plus Jakarta Sans'] leading-[61.90px] mb-4 md:mb-0 text-left">
            End-to-End Journey
          </div>
        </div>

        {/* Horizontal Line with Circles */}
        <div className="relative flex items-center w-full">
          <div className="flex-1 h-px bg-black"></div>
          <div className="absolute inset-x-0 flex justify-between w-full px-16">
            {contentData.map((_, index) => (
              <div key={index} className="w-3 h-3 bg-black rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 relative p-1 md:p-8 pt-8 mb-1 text-center">

          {/* Cards */}
          {contentData.map((item, index) => (
            <div key={index} className="relative">
              <InfoCard
                index={index}
                title={item.title}
                description={item.description}
                image={item.image}
                extraInfo={item.extraInfo}
                isHovered={hoveredIndex === index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
