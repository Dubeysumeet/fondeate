import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the icon from react-icons
import CustomButton from './Buttons/CustomButton';
const FAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (faq) => {
    setActiveFAQ(activeFAQ === faq ? null : faq);
  };

  return (
    <section id="faqs_dropdown_list" className="relative px-2 xs:px-6 py-16 lg:py-20 space-y-4 md:space-y-8 max-w-7xl mx-auto">
      <h2 className="text-[#292524] text-2xl md:text-3xl lg:text-5xl lg:leading-tight lg:font-light text-center">
        Common questions
      </h2>
      <div className="divide-y divide-[#969696] max-w-2xl mx-auto">
        <div>
          <button
            id="faqs_question1-question"
            className="w-full text-base md:text-lg lg:text-xl font-normal py-4 md:py-6 lg:opacity-70 lg:hover:opacity-100 text-left flex gap-2 items-center justify-between"
            onClick={() => toggleFAQ('question1')}
            aria-label="Any tips for a new Fondeate investor?"
          >
            <span>Any tips for a new Fondeate investor?</span>
            <FaChevronDown className={`transition-transform duration-300 ${activeFAQ === 'question1' ? 'rotate-180' : ''}`} />
          </button>
          <div id="faqs_question1-answer" className={`text-sm leading-relaxed md:leading-loose md:text-base font-normal pb-4 md:pb-6 space-y-4 ${activeFAQ === 'question1' ? 'block' : 'hidden'}`}>
            <ol className="list-decimal pl-4 md:pl-5 space-y-2">
              <li><span className="font-semibold">Invest only what you can afford to lose. </span></li>
              <li><span className="font-semibold">Invest only in what you understand. </span> Preferably, in a product or mission that you like.</li>
              <li><span className="font-semibold">Do your research. </span> You can also ask founders questions on their company profile.</li>
              <li><span className="font-semibold">Diversify.</span> It is better to make several small investments than one large one.</li>
              <li><span className="font-semibold">Look at the lead investor.</span> Did a more experienced investor invest in the company under the same conditions as you? Why is he investing?</li>
            </ol>
            <p>Please note that this information is advice and not investment recommendations. You must make your own decisions when deciding what to invest in.</p>
          </div>
        </div>
        <div>
          <button
            id="faqs_question2-question"
            className="w-full text-base md:text-lg lg:text-xl font-normal py-4 md:py-6 lg:opacity-70 lg:hover:opacity-100 text-left flex gap-2 items-center justify-between"
            onClick={() => toggleFAQ('question2')}
            aria-label="Where does my money go after investing?"
          >
            <span>Where does my money go after investing?</span>
            <FaChevronDown className={`transition-transform duration-300 ${activeFAQ === 'question2' ? 'rotate-180' : ''}`} />
          </button>
          <div id="faqs_question2-answer" className={`text-sm leading-relaxed md:leading-loose md:text-base font-normal pb-4 md:pb-6 space-y-4 ${activeFAQ === 'question2' ? 'block' : 'hidden'}`}>
            <p>Fondeate is prohibited by law from handling your money. When you invest, your funds are transferred to an escrow account. If the raise is successful, the capital will be released to the startup. Otherwise refunded.</p>
          </div>
        </div>
        <div>
          <button
            id="faqs_question3-question"
            className="w-full text-base md:text-lg lg:text-xl font-normal py-4 md:py-6 lg:opacity-70 lg:hover:opacity-100 text-left flex gap-2 items-center justify-between"
            onClick={() => toggleFAQ('question3')}
            aria-label="How do I know the value of my investment?"
          >
            <span>How do I know the value of my investment?</span>
            <FaChevronDown className={`transition-transform duration-300 ${activeFAQ === 'question3' ? 'rotate-180' : ''}`} />
          </button>
          <div id="faqs_question3-answer" className={`text-sm leading-relaxed md:leading-loose md:text-base font-normal pb-4 md:pb-6 space-y-4 ${activeFAQ === 'question3' ? 'block' : 'hidden'}`}>
            <p>As there is no liquid secondary market for private securities like the New York Stock Exchange, it's difficult for us to provide a dynamically updated value for your investment. The best way to approximate the value of your investment is to compare the company's valuation from the round you invested in with their most recent valuation.</p>
            <p>If the company makes an IPO, it will be able to monitor the value of its shares in the same way as it would with the shares of public companies.</p>
          </div>
        </div>
        <div>
          <button
            id="faqs_question4-question"
            className="w-full text-base md:text-lg lg:text-xl font-normal py-4 md:py-6 lg:opacity-70 lg:hover:opacity-100 text-left flex gap-2 items-center justify-between"
            onClick={() => toggleFAQ('question4')}
            aria-label="How long does it take to get a return?"
          >
            <span>How long does it take to get a return?</span>
            <FaChevronDown className={`transition-transform duration-300 ${activeFAQ === 'question4' ? 'rotate-180' : ''}`} />
          </button>
          <div id="faqs_question4-answer" className={`text-sm leading-relaxed md:leading-loose md:text-base font-normal pb-4 md:pb-6 space-y-4 ${activeFAQ === 'question4' ? 'block' : 'hidden'}`}>
            <p>The length of time required to achieve a return largely depends on the type of investment contract. On average, companies on Fondeate that achieve a return take around 7 years to do so.</p>
          </div>
        </div>
      </div>
      <CustomButton text="More Investor FAQs" href="/#" />
    </section>
  );
};

export default FAQs;
