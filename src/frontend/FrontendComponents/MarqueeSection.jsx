// MarqueeSection.jsx
import React from 'react';

const MarqueeSection = () => {
    const links = [
        { href: "replit", title: "replit", label: "👩🏽 A coding platform for everyone" },
        { href: "immersed", title: "immersed", label: "🏗️ Virtual Reality Workspaces" },
        { href: "leah", title: "Leah", label: "🐶 A cure for cancer in dogs" },
        { href: "adfontesmedia", title: "adfontesmedia", label: "🗞 Increase media literacy" },
        { href: "move", title: "move", label: "🛒 A community-owned supermarket" }
    ];

    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-4 mt-8">
            <div className="marquee">
                <div className="marquee__wrapper">
                    <div className="marquee__group marquee--right-to-left marquee--slow-80 md:marquee--slow-120 animationMovePaused">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} title={link.title} target="_blank" className="py-2 px-4 rounded-lg bg-white text-black border border-coolgray-500 hover:border-gray-900 hover:bg-gray-50 transition-all font-normal w-max text-sm md:text-base">
                                {link.label}
                            </a>
                        ))}
                        {links.map((link, index) => (
                            <a key={index + links.length} href={link.href} title={link.title} target="_blank" className="py-2 px-4 rounded-lg bg-white text-black border border-coolgray-500 hover:border-gray-900 hover:bg-gray-50 transition-all font-normal w-max text-sm md:text-base">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="marquee__wrapper">
                    <div className="marquee__group marquee--left-to-right marquee--slow-80 md:marquee--slow-120 animationMovePaused">
                        {links.map((link, index) => (
                            <a key={index} href={link.href} title={link.title} target="_blank" className="py-2 px-4 rounded-lg bg-white text-black border border-coolgray-500 hover:border-gray-900 hover:bg-gray-50 transition-all font-normal w-max text-sm md:text-base">
                                {link.label}
                            </a>
                        ))}
                        {links.map((link, index) => (
                            <a key={index + links.length} href={link.href} title={link.title} target="_blank" className="py-2 px-4 rounded-lg bg-white text-black border border-coolgray-500 hover:border-gray-900 hover:bg-gray-50 transition-all font-normal w-max text-sm md:text-base">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;
