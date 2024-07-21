import React from 'react';
import '../../assets/css/Testimonial.css';
import testpic from '../../assets/images/garret_mccurrach.png';

const testimonials = [
  {
    id: 1,
    text: "I'm a huge fan of Mercury! All my companies use it. It's the bank built for human intuition, and you're just scratching the surface.",
    name: "Garrett McCurrach",
    company: "Mercury",
    investors: 2453,
    imgSrc: testpic
  },
  {
    id: 2,
    text: "I've been using Replit for years, I love the company, I love the team, I love the mission. LET'S GO!!!",
    name: "Stefan Opsal",
    company: "Replit",
    investors: 2589,
    imgSrc: testpic
  },
  {
    id: 3,
    text: "I deeply believe in this company and this team. I am very happy to be part of Recompose's history!",
    name: "Ellen Leanse",
    company: "Recompose",
    investors: 567,
    imgSrc: testpic
  },
  {
    id: 4,
    text: "Fondeate is a pioneer in its industry. I believe in the future of crowdfunding and Fondeate's relevance in shaping that future.",
    name: "Rogelio Martinez",
    company: "Fondeate",
    investors: 6700,
    imgSrc: testpic
  },
  {
    id: 5,
    text: "Tucson Tamale tem sido uma delícia para comer desde o dia em que abriu e rapidamente se tornou um ponto de orgulho de Tucson para mim. Obrigado por um ótimo produto e estou muito contente por ser um investidor!",
    name: "Lori VanBuggenum",
    company: "Tucson Tamale",
    investors: 458,
    imgSrc: testpic
  },
  {
    id: 6,
    text: "Porque esta equipa é incrivelmente inteligente e motivada, e são pessoas fantásticas.",
    name: "Shareil Nariman",
    company: "Arrived",
    investors: 1778,
    imgSrc: testpic
  }
];

const Testimonial = () => {
  const firstMarquee = testimonials.slice(0, 3);
  const secondMarquee = testimonials.slice(3);

  return (
    <section className="max-w-7xl mx-auto py-16 lg:py-20">
      <div className="hidden md:block space-y-4">
        <div className="marquee">
          <ul className="marquee__group marquee--right-to-left marquee--slow-80 md:marquee--slow-120 animationMovePaused">
            {firstMarquee.map(testimonial => (
              <li key={testimonial.id} className="testimonial-box rounded-lg bg-gradient-to-r from-[#F6897B] via-[#A579FE] to-[#51B5F2] p-px list-none m-2">
                <div className="w-full md:max-w-sm h-full md:h-60 bg-white rounded-[7px] p-5 md:px-6 md:py-7 flex flex-col justify-between gap-4">
                  <p className="flex-grow flex items-center font-normal text-base whitespace-normal">
                    "{testimonial.text}"
                  </p>
                  <div className="w-full flex gap-2 md:gap-4">
                    <img src={testimonial.imgSrc} alt={testimonial.name} className="wf-avatar-sm animate-fadein" loading="lazy" height="38" width="38" />
                    <p className="text-sm font-normal">
                      <a className="block font-bold hover:underline" href={`/${testimonial.name.replace(" ", "").toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                        {testimonial.name}
                      </a>
                      <span className="block w-full max-w-xs leading-tight" style={{ whiteSpace: 'break-spaces' }}>
                        Invested in <a href={`/${testimonial.company.toLowerCase()}`} className="font-medium hover:underline" target="_blank" rel="noopener noreferrer">{testimonial.company}</a> along with {testimonial.investors} investors
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="marquee marquee--reverse">
          <ul className="marquee__group marquee--left-to-right marquee--slow-80 md:marquee--slow-120 animationMovePaused">
            {secondMarquee.map(testimonial => (
              <li key={testimonial.id} className="testimonial-box rounded-lg bg-gradient-to-r from-[#F6897B] via-[#A579FE] to-[#51B5F2] p-px list-none m-2">
                <div className="w-full md:max-w-sm h-full md:h-60 bg-white rounded-[7px] p-5 md:px-6 md:py-7 flex flex-col justify-between gap-4">
                  <p className="flex-grow flex items-center font-normal text-base whitespace-normal">
                    "{testimonial.text}"
                  </p>
                  <div className="w-full flex gap-2 md:gap-4">
                    <img src={testimonial.imgSrc} alt={testimonial.name} className="wf-avatar-sm animate-fadein" loading="lazy" height="38" width="38" />
                    <p className="text-sm font-normal">
                      <a className="block font-bold hover:underline" href={`/${testimonial.name.replace(" ", "").toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                        {testimonial.name}
                      </a>
                      <span className="block w-full max-w-xs leading-tight" style={{ whiteSpace: 'break-spaces' }}>
                        Invested in <a href={`/${testimonial.company.toLowerCase()}`} className="font-medium hover:underline" target="_blank" rel="noopener noreferrer">{testimonial.company}</a> along with {testimonial.investors} investors
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  );
};

export default Testimonial;
