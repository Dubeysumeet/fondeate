import React from 'react';
import Heroimg from '../../assets/images/substack_hero_card_pt_lg.png'
import Img1 from '../../assets/images/a16z-logo.png';
import Img2 from '../../assets/images/yc-logo.png'
import CustomButton from './Buttons/CustomButton';

const InvestorSection = () => {
    return (
        <section className="relative px-2 xs:px-6 py-16 lg:py-20 custom-home-gradient overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-4 md:space-y-8">
                <div className="max-w-5xl mx-auto space-y-2 text-center">
                    <h2 className="text-[#292524] text-2xl md:text-3xl lg:text-5xl lg:leading-tight lg:font-light">
                        Co-invest with VCs and professional angels
                    </h2>
                    <p className="text-black text-base md:text-lg lg:text-xl lg:leading-7 lg:font-normal">
                        Under the same conditions, using the same tools.
                    </p>
                </div>
                <div className="relative max-w-6xl mx-auto">
                    <div className="md:absolute w-full z-[-1] -mr-6">
                        <img src={Heroimg} alt="Chris Best, Diretor Executivo da Substack" className="md:hidden mx-auto" width="364" height="326" loading="lazy" />
                        <img src={Heroimg} alt="Chris Best, Executive Director at Substack" className="hidden md:block max-w-[60%] lg:max-w-[600px] xl:max-w-[750px] lg:object-cover" height="679" width="926" loading="lazy" />
                    </div>
                    <div className="flex justify-center md:justify-end lg:py-16 z-10">
                        <div className="rounded-lg max-w-sm md:max-w-[45%] lg:max-w-md w-full border border-[#C4C4C4] p-5 pb-7 space-y-3 bg-white/60">
                            <p className="text-gray-600 mb-3">Cap Table</p>
                            <div className="space-y-3 md:space-y-5 w-full">
                                <div className="relative group">
                                    <div className="bg-gray-100 h-full w-full rounded-md absolute"></div>
                                    <div className="rounded-md bg-white w-full border border-[#C4C4C4] p-2 md:p-4 flex gap-4 items-center transition-all translate-x-0 translate-y-0 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
                                        <img src={Img1} alt="Andreessen Horowitz" className="animate-fadein rounded-md w-12 h-12 lg:w-14 lg:h-14" width="64" height="64" loading="lazy" />
                                        <p className="font-normal text-sm md:text-base lg:text-lg">
                                            Andreessen Horowitz
                                        </p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <div className="bg-gray-100 h-full w-full rounded-md absolute"></div>
                                    <div className="rounded-md bg-white w-full border border-[#C4C4C4] p-2 md:p-4 flex gap-4 items-center transition-all translate-x-0 translate-y-0 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
                                        <img src={Img2} alt="Y Combinator" className="animate-fadein rounded-md w-12 h-12 lg:w-14 lg:h-14" width="64" height="64" loading="lazy" />
                                        <p className="font-normal text-sm md:text-base lg:text-lg">
                                            Y Combinator
                                        </p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <div className="bg-gray-100 h-full w-full rounded-md absolute"></div>
                                    <div className="rounded-md bg-white border border-[#C4C4C4] w-full p-4 py-6 transition-all translate-x-0 translate-y-0 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
                                        <p className="text-sm md:text-base lg:text-lg">
                                            <span className="font-bold">+6,688</span> Fondeate investors
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="px-2 xs:px-6 lg:pt-4">
                    <a href="/explore/investors" target="_blank" className="max-w-xs mx-auto w-full block py-3 rounded-lg text-center font-medium bg-gray-900 hover:bg-black text-white transition-all">
                        Explore Investors
                    </a>
                </div> */}
                <CustomButton text="Explore Investors" href="/explore/investors" />
            </div>
        </section>
    );
};

export default InvestorSection;
