import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

const InvestmentKnowledgeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      href: "https://help.wefunder.com/contracts/304785-safe-simple-agreement-for-future-equity",
      label: "SAFEs",
      description: "Grants the right to obtain capital at a future date.",
      borderColor: "#2C99F2",
      backgroundColor: "#F6FBFF",
    },
    {
      href: "https://help.wefunder.com/contracts/304786-convertible-note",
      label: "Convertible notes",
      description: "A loan that converts into shares at a certain time in the future.",
      borderColor: "#FFB000",
      backgroundColor: "#FFFCF6",
    },
    {
      href: "https://help.wefunder.com/contract/295250-revenue-share",
      label: "Recipe sharing",
      description: "A loan that is repaid based on income.",
      borderColor: "#F06A35",
      backgroundColor: "#FFF6F6",
    },
    {
      href: "https://help.wefunder.com/contract/304929-promissory-note",
      label: "Simple loan",
      description: "A simple loan, like a car loan.",
      borderColor: "#2C99F2",
      backgroundColor: "#F6FBFF",
    },
    {
      href: "https://help.wefunder.com/basic-jargon/priced-round",
      label: "Price per Share",
      description: "Owns shares at a certain price.",
      borderColor: "#FFB000",
      backgroundColor: "#FFFCF6",
    },
  ];

  const moveInvestmentContractsGliderLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const moveInvestmentContractsGliderRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 3 ? prevIndex + 1 : prevIndex));
  };

  return (
    <section className="relative py-16 lg:py-20 bg-[#F0F8FF]">
      <div className="space-y-8 lg:space-y-4 max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-2 px-2 xs:px-6 text-center">
          <h2 className="text-[#292524] text-2xl md:text-3xl lg:text-5xl lg:leading-tight lg:font-light">
            How you obtain a return depends on the investment contract
          </h2>
          <p className="text-black text-base md:text-lg lg:text-xl lg:leading-7 lg:font-normal">
            Learn more with our resources for new investors.
          </p>
        </div>

        <div className="px-2 xs:px-6 hidden lg:flex justify-end gap-2">
          <button
            className="py-1 px-4 rounded-lg border border-coolgray-700 text-coolgray-700 hover:text-black hover:border-black"
            onClick={moveInvestmentContractsGliderLeft}
            aria-label="previous slide"
            disabled={currentIndex === 0}
          >
            <FaArrowLeft className="text-xl scale-x-110" aria-hidden="true" />
          </button>
          <button
            className="py-1 px-4 rounded-lg border border-coolgray-700 text-coolgray-700 hover:text-black hover:border-black"
            onClick={moveInvestmentContractsGliderRight}
            aria-label="next slide"
            disabled={currentIndex === slides.length - 3}
          >
            <FaArrowRight className="text-xl scale-x-110" aria-hidden="true" />
          </button>
        </div>

        <div id="investment_contracts-glide" className="glide relative lg:pl-6 glide--ltr glide--slider glide--swipeable">
          <div className="glide__track overflow-hidden" data-glide-el="track">
            <ul
              className="glide__slides flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${slides.length * (100 / 5)}%`,
              }}
            >
              {slides.map((slide, index) => (
                <li key={index} className="glide__slide flex-shrink-0 w-[calc(100%/3)]">
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={slide.label}
                    className="h-[12rem] space-y-4 rounded-lg m-1 border p-4 md:p-5 flex flex-col justify-between transition-all group-hover:ring-2"
                    style={{ borderColor: slide.borderColor, backgroundColor: slide.backgroundColor }}
                  >
                    <div className="space-y-2">
                      <p className="text-lg md:text-xl text-gray-800 group-hover:text-black font-medium">{slide.label}</p>
                      <p className="text-sm md:text-base font-normal">{slide.description}</p>
                    </div>
                    <span className="text-sm md:text-base text-gray-800 flex items-center gap-2 group-hover:text-black group-hover:font-medium">
                      know more <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="hidden md:flex justify-start items-center absolute top-1/2 -translate-y-1/2 left-0 z-10 transition-all bg-gradient-to-l lg:bg-transparent lg:hover:bg-gradient-to-l from-transparent to-[#EFF8FF] text-transparent hover:text-black h-[12rem] lg:h-[14.5rem] w-12 p-2"
            aria-hidden="true"
            onClick={moveInvestmentContractsGliderLeft}
            aria-label="previous slide"
            disabled={currentIndex === 0}
          >
            <FaChevronLeft className="text-xl" aria-hidden="true" />
          </button>
          <button
            className="hidden md:flex justify-end items-center absolute top-1/2 -translate-y-1/2 right-0 z-10 transition-all bg-gradient-to-r from-transparent to-[#EFF8FF] text-transparent hover:text-black h-[12rem] lg:h-[14.5rem] w-24 p-2"
            aria-hidden="true"
            onClick={moveInvestmentContractsGliderRight}
            aria-label="next slide"
            disabled={currentIndex === slides.length - 3}
          >
            <FaChevronRight className="text-xl" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentKnowledgeCarousel;
