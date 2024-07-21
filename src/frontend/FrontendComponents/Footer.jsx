import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faLinkedin, faYoutubeSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/images/IMG_1969.png';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto p-4">
      <hr className="mt-0 border-0" />

      <div className="flex flex-col lg:flex-row lg:ml-2">
        <div className="flex-none mr-4 xl:mr-12">
          <div className="flex-col lg:flex-row flex">
            <div className="flex-none">
              <NavLink to="/pbc" aria-label="PBC">
                <img
                  className="h-18 w-18 mb-2 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-cover mx-auto lg:mx-0"
                  alt="Fondeate logo"
                  src={logo}
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </NavLink>
            </div>
            <div className="flex-grow lg:ml-8 mt-3 text-sm lg:text-base text-center lg:text-left lg:mt-1">
              <div className="font-sm lg:font-base font-medium leading-7">
                <span>Fondeate is a public benefit entity. </span>
                <br />
                <span>We're here to fix capitalism</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow -mt-0.5">
          <div className="flex justify-between sm:justify-around text-xs sm:text-sm gap-3">
            <ul className="wf-link-nav">
              <li className="py-3 fontDec"><NavLink to="/#history">Our history</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">Careers</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">Blog</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">VIP Members</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">Get/Give$</NavLink></li>
            </ul>
            <ul className="wf-link-nav">
              <li className="py-3 fontDec"><NavLink to="/#">Fundraising Playbook</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">FAQ for investors</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">FAQ for Founders</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">Guides</NavLink></li>
              <li className="py-3 fontDec"><NavLink to="/#">Support</NavLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <hr className="mb-6" />
        <div className="flex flex-col-reverse sm:flex-row lg:ml-2 font-light">
          <div className="flex-grow text-xs lg:text-sm leading-5 text-gray-700 max-w-xl lg:max-w-2xl mr-4">
            <p>
              Fondeate means Fondeate Inc and all of its subsidiaries: Fondeate Advisors LLC, Capitalize Advisors LLC, Fondeate Portal LLC and Fondeate EU BV. This page is organized by Fondeate Inc.
            </p>
            <p className="mt-5">
              Fondeate Portal LLC is a member of the <a className="wf-link-inline-muted" target="_blank" rel="noopener noreferrer" href="https://www.finra.org/about/firms-we-regulate/funding-portals-we-regulate">Financial Industry Regulatory Authority</a> (FINRA). Fondeate EU BV is registered with the Dutch Financial Markets Authority. Investing in Fondeate is risky. Do not invest more than the amount you are willing to lose.
            </p>
          </div>

          <div className="flex justify-between sm:block sm:flex-grow mb-4 sm:mb-0 text-left sm:text-right -mt-2 text-2xl mr-0 lg:mr-12">
            <a target="_blank" rel="noopener noreferrer" aria-label="Fondeate's Facebook" href="https://www.facebook.com/Fondeate">
              <FontAwesomeIcon icon={faFacebookSquare} className="p-3 sm:p-2 text-gray-600 hover:text-gray-800" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noopener noreferrer" aria-label="Fondeate's Twitter" href="https://twitter.com/Fondeate">
              <FontAwesomeIcon icon={faTwitterSquare} className="p-3 sm:p-2 text-gray-600 hover:text-gray-800" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noopener noreferrer" aria-label="Fondeate's Linkedin" href="https://www.linkedin.com/company/Fondeate">
              <FontAwesomeIcon icon={faLinkedin} className="p-3 sm:p-2 text-gray-600 hover:text-gray-800" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noopener noreferrer" aria-label="Fondeate's Youtube" href="https://www.youtube.com/Fondeate">
              <FontAwesomeIcon icon={faYoutubeSquare} className="p-3 sm:p-2 text-gray-600 hover:text-gray-800" aria-hidden="true" />
            </a>
            <a target="_blank" rel="noopener noreferrer" aria-label="Fondeate's Instagram" href="https://www.instagram.com/Fondeate/">
              <FontAwesomeIcon icon={faInstagram} className="p-3 sm:p-2 text-gray-600 hover:text-gray-800" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex text-xs text-gray-500 mt-4 flex-col sm:flex-row lg:ml-2 items-center flex-wrap gap-x-4">
          <div className="flex-grow flex xs:flex-row flex-wrap text-center gap-x-3">
            <div>
              <button className="wf-btn-flat wf-btn-med-gray-flat text-xs px-0">IMPORTANT DISCLOSURES</button>
            </div>
            <NavLink to="/terms">
              <button className="wf-btn-flat wf-btn-med-gray-flat text-xs px-0 uppercase">Terms</button>
            </NavLink>
            <NavLink to="/terms#privacy">
              <button className="wf-btn-flat wf-btn-med-gray-flat text-xs px-0 uppercase">Privacy</button>
            </NavLink>
          </div>
          <div className="flex-none lg:mr-14 mt-4 sm:my-0 text-left mx-auto">
            <div className="flex flex-row gap-2 items-center">
              <FontAwesomeIcon icon={faGlobe} className="text-xl text-gray-400" aria-hidden="true" />
              <select
                id="footer_language_selector"
                className="text-xs text-gray-500 p-2"
                title="Language"
                defaultValue="pt"
              >
                <option value="da">dansk</option>
                <option value="de">German</option>
                <option value="en">English</option>
                <option value="es">spanish</option>
                <option value="fr">français</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="nl">Dutch</option>
                <option value="no">Norwegian</option>
                <option value="pt">Portuguese</option>
                <option value="sv">swedish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;